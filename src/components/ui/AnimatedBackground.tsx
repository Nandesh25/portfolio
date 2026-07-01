import { motion } from 'framer-motion';

/**
 * Decorative animated background for the hero:
 * a subtle grid, floating gradient blobs, and a radial glow.
 * Purely presentational and hidden from assistive tech.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-light bg-[size:44px_44px] opacity-70 dark:bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px] dark:bg-accent-500/25" />

      {/* Floating blobs */}
      <motion.div
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
