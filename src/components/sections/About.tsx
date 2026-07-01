import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { about, profile } from '@/data/portfolio';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '@/utils/motion';

/** About section: summary, objective and quick highlight stats. */
export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="Who I Am"
        title="About Me"
        description="A short introduction to my background, focus and what drives my work."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        {/* Text */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-3"
        >
          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            {profile.title} focused on {profile.tagline.toLowerCase()}
          </p>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {about.summary}
          </p>

          <div className="mt-6 rounded-2xl border-l-2 border-accent-500 bg-slate-100/60 p-5 dark:bg-white/[0.03]">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-600 dark:text-accent-400">
              Career Objective
            </p>
            <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
              {about.objective}
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-2"
        >
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {about.highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="glass-card flex flex-col justify-center p-5 text-center shadow-card"
              >
                <span className="text-2xl font-extrabold text-gradient sm:text-3xl">
                  {h.value}
                </span>
                <span className="mt-1 text-xs font-medium leading-snug text-slate-500 dark:text-slate-400">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
