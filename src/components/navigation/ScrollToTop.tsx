import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Clean ID from hash (e.g. "#duvidas" -> "duvidas")
      const id = hash.replace(/^#/, '');
      
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          // Element found: compute position minus sticky header height (88px)
          const headerOffset = 88;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: prefersReducedMotion ? 'instant' : 'smooth',
          });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollToElement()) {
        // If not mounted yet, retry after frame & short timeout
        const frameId = requestAnimationFrame(() => {
          if (!scrollToElement()) {
            const timer = setTimeout(scrollToElement, 150);
            return () => clearTimeout(timer);
          }
        });
        return () => cancelAnimationFrame(frameId);
      }
    } else {
      // Standard page navigation: instant scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
