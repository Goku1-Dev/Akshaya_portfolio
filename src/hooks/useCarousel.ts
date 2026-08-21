import { useCallback, useEffect, useRef, useState } from 'react';

interface UseCarouselOptions {
  /** Total number of slides/items. */
  count: number;
  /** How many items are visible at once (affects the number of "pages"). */
  perView?: number;
  /** Autoplay interval in ms. Set to 0 to disable autoplay. */
  autoplayMs?: number;
  /** Pause autoplay while the user is hovering/focusing the carousel. */
  pauseOnInteract?: boolean;
  /** Minimum drag distance (px) before a swipe/drag counts as a page change. */
  dragThreshold?: number;
}

/**
 * Headless carousel controller: tracks the active page, exposes next/prev/
 * goTo, and optionally autoplays. Pages are derived from `count` and
 * `perView` so dot navigation lines up with however many cards show
 * per breakpoint. Also supports mouse/touch/pen drag-to-slide via
 * Pointer Events, exposed through `handlers` + `isDragging`.
 */
export function useCarousel({
  count,
  perView = 1,
  autoplayMs = 0,
  pauseOnInteract = true,
  dragThreshold = 50,
}: UseCarouselOptions) {
  const pageCount = Math.max(1, Math.ceil(count / perView));
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const isPointerDown = useRef(false);
  const trackWidthRef = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      setPage(((index % pageCount) + pageCount) % pageCount);
    },
    [pageCount]
  );

  const next = useCallback(() => goTo(page + 1), [goTo, page]);
  const prev = useCallback(() => goTo(page - 1), [goTo, page]);

  useEffect(() => {
    // Clamp page if perView/count changes (e.g. on resize breakpoint shift).
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    if (!autoplayMs || isPaused || isDragging) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, autoplayMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplayMs, isPaused, isDragging, pageCount]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      isPointerDown.current = true;
      dragStartX.current = e.clientX;
      dragCurrentX.current = e.clientX;
      trackWidthRef.current = e.currentTarget.offsetWidth || 1;
      setIsDragging(true);
      setIsPaused(true);
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    []
  );

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (!isPointerDown.current) return;
    dragCurrentX.current = e.clientX;
    const delta = dragCurrentX.current - dragStartX.current;
    setDragOffset(delta);
  }, []);

  const endDrag = useCallback(() => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;

    const delta = dragCurrentX.current - dragStartX.current;

    if (Math.abs(delta) > dragThreshold) {
      if (delta < 0) next();
      else prev();
    }

    setDragOffset(0);
    setIsDragging(false);
    setIsPaused(false);
  }, [dragThreshold, next, prev]);

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
      endDrag();
    },
    [endDrag]
  );

  const onPointerLeave = useCallback(() => {
    if (isPointerDown.current) endDrag();
  }, [endDrag]);

  // Extra drag progress as a fraction of one page's width — added on top
  // of the `-${page * 100}%` transform so the track visibly follows the
  // pointer while dragging.
  const dragOffsetPercent = trackWidthRef.current
    ? (dragOffset / trackWidthRef.current) * 100
    : 0;

  const handlers = {
    ...(pauseOnInteract
      ? {
          onMouseEnter: () => setIsPaused(true),
          onMouseLeave: () => setIsPaused(false),
          onFocus: () => setIsPaused(true),
          onBlur: () => setIsPaused(false),
        }
      : {}),
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerLeave,
    onPointerCancel: onPointerLeave,
  };

  return { page, pageCount, next, prev, goTo, handlers, isDragging, dragOffsetPercent };
}