import { useState, useEffect } from 'react';

/**
 * Tracks the currently active section id based on scroll position,
 * used for highlighting the active nav item.
 */
export function useActiveSection(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      // Handle bottom of page — highlight last section.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sectionIds[sectionIds.length - 1] ?? current;
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
