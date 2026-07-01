import { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Loader } from '@/components/layout/Loader';
import { Hero } from '@/components/sections/Hero';
import { useTheme } from '@/hooks/useTheme';
import { useMediaQuery } from '@/hooks/useMediaQuery';

// Lazy-load below-the-fold sections to keep the initial bundle small.
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })));
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects })),
);
const Education = lazy(() =>
  import('@/components/sections/Education').then((m) => ({ default: m.Education })),
);
const Certifications = lazy(() =>
  import('@/components/sections/Certifications').then((m) => ({ default: m.Certifications })),
);
const Achievements = lazy(() =>
  import('@/components/sections/Achievements').then((m) => ({ default: m.Achievements })),
);
const Resume = lazy(() => import('@/components/sections/Resume').then((m) => ({ default: m.Resume })));
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
);

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  // Custom cursor only on devices with a fine pointer (desktop).
  const hasFinePointer = useMediaQuery('(pointer: fine)');

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      <a
        href="#main-content"
        className="focus-ring sr-only z-[80] rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <ScrollProgress />
      {hasFinePointer && <CustomCursor />}

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </Suspense>
      </motion.main>

      <Footer />
      <BackToTop />
    </>
  );
}

function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-hidden="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-400/30 border-t-accent-400" />
    </div>
  );
}
