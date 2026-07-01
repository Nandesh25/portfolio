import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import type { Theme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

/** Accessible dark/light theme toggle with an animated icon swap. */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="focus-ring relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/60 text-slate-700 transition-colors duration-300 hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -18, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 18, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark ? <FaMoon className="h-4 w-4" /> : <FaSun className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
