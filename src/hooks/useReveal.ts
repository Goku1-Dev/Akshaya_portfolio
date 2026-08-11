import { useEffect, useRef } from 'react';

interface UseRevealOptions {
  /** Fraction of the element that must be visible before it reveals. */
  threshold?: number;
  /** Only ever reveal once, then stop observing. */
  once?: boolean;
  /** Root margin passed straight to IntersectionObserver. */
  rootMargin?: string;
}

/**
 * Attaches an IntersectionObserver to the returned ref's element (and,
 * if present, to every direct child) and toggles the `is-visible` class
 * when it scrolls into view. Pairs with the `.reveal` / `.reveal-stagger`
 * utility classes and the `reveal()` / `stagger()` SCSS mixins.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
) {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -8% 0px' } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion users: reveal immediately, skip the observer.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return ref;
}
