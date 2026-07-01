import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor for desktop (pointer) devices only.
 * A small dot follows the pointer exactly; a larger ring follows with spring
 * and grows over interactive elements. Rendered only when enabled by the parent.
 */
export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 350, damping: 28 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 28 });

  useEffect(() => {
    document.body.classList.add('no-cursor');

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setHidden(false);

      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest('a, button, input, textarea, [role="button"]');
      setHovering(interactive);
    };

    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseout', leave);
    return () => {
      document.body.classList.remove('no-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseout', leave);
    };
  }, [dotX, dotY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-accent-400"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: hidden ? 0 : 1 }}
      />
      <motion.div
        className="absolute rounded-full border border-accent-400/70"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hidden ? 0 : hovering ? 1 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
