import { motion, useScroll, useSpring } from 'framer-motion';

/** Fixed top progress bar reflecting page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500"
      aria-hidden="true"
    />
  );
}
