import { useEffect, useState } from 'react';

/**
 * Returns how many carousel items should show per "page" based on the
 * current viewport width, re-evaluating on resize. Breakpoints are
 * expressed as [minWidthPx, perView] pairs, checked widest-first.
 */
export function useResponsivePerView(
  breakpoints: Array<[number, number]>,
  fallback = 1
) {
  const getPerView = () => {
    if (typeof window === 'undefined') return fallback;
    const width = window.innerWidth;
    const sorted = [...breakpoints].sort((a, b) => b[0] - a[0]);
    const match = sorted.find(([minWidth]) => width >= minWidth);
    return match ? match[1] : fallback;
  };

  const [perView, setPerView] = useState(getPerView);

  useEffect(() => {
    let frame: number;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPerView(getPerView()));
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return perView;
}
