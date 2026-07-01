import { motion } from 'framer-motion';

interface LoaderProps {
  onFinish?: () => void;
}

/** Full-screen loading animation shown briefly on first paint. */
export function Loader({ onFinish }: LoaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onFinish}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent-400/40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.span
            className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text font-mono text-4xl font-extrabold text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            N
          </motion.span>
        </motion.div>

        <div className="h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-400 to-accent-600"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
