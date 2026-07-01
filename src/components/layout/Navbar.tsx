import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const SECTION_IDS = navItems.map((item) => item.id);

/** Sticky, responsive navbar with active-section highlighting and smooth scroll. */
export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/80'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between" aria-label="Primary">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="focus-ring group flex items-center gap-2 rounded-lg font-bold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-400/40 bg-accent-500/10 font-mono text-accent-500 dark:text-accent-300">
            N
          </span>
          <span className="hidden text-slate-900 dark:text-white sm:inline">
            Nandesh<span className="text-accent-500 dark:text-accent-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'focus-ring relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-accent-600 dark:text-accent-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent-500 dark:bg-accent-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="focus-ring hidden rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-400 md:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/95 lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={cn(
                        'focus-ring block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-accent-500/10 text-accent-600 dark:text-accent-300'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2">
                <a
                  href={profile.resumeUrl}
                  download
                  className="focus-ring block rounded-full bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
