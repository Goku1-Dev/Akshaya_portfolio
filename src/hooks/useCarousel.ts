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
}

/**
 * Headless carousel controller: tracks the active page, exposes next/prev/
 * goTo, and optionally autoplays. Pages are derived from `count` and
 * `perView` so dot navigation lines up with however many cards show
 * per breakpoint.
 */
export function useCarousel({
  count,
  perView = 1,
  autoplayMs = 0,
  pauseOnInteract = true,
}: UseCarouselOptions) {
  const pageCount = Math.max(1, Math.ceil(count / perView));
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    if (!autoplayMs || isPaused) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, autoplayMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplayMs, isPaused, pageCount]);

  const handlers = pauseOnInteract
    ? {
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
        onFocus: () => setIsPaused(true),
        onBlur: () => setIsPaused(false),
      }
    : {};

  return { page, pageCount, next, prev, goTo, handlers };
}
