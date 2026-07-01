import { motion } from 'framer-motion';
import { FaArrowDown, FaEnvelope, FaDownload } from 'react-icons/fa';
import { profile } from '@/data/portfolio';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/utils/motion';

/** Hero section: name, title, intro, CTAs, socials over an animated background. */
export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <AnimatedBackground />

      <div className="container-px w-full">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-xs font-medium text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
            </span>
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              size="lg"
              icon={FaDownload}
            >
              Download Resume
            </Button>
            <Button
              as="button"
              variant="secondary"
              size="lg"
              icon={FaEnvelope}
              onClick={() => scrollTo('contact')}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-full text-slate-400 hover:text-accent-500 dark:hover:text-accent-300 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <FaArrowDown className="h-3.5 w-3.5" />
      </motion.button>
    </section>
  );
}
