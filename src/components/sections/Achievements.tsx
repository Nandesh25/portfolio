import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { achievements } from '@/data/portfolio';
import { scaleIn, staggerContainer, viewportOnce } from '@/utils/motion';

/** Achievements section: animated highlight cards. */
export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements"
        description="Milestones and recognition earned along the way."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2"
      >
        {achievements.map((item) => (
          <motion.article
            key={item.title}
            variants={scaleIn}
            whileHover={{ y: -5 }}
            className="glass-card group relative overflow-hidden p-6 shadow-card transition-shadow duration-300 hover:shadow-glow"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-300">
                <FaTrophy className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  {item.date && (
                    <span className="rounded-full bg-accent-500/10 px-2 py-0.5 font-mono text-xs font-medium text-accent-600 dark:text-accent-300">
                      {item.date}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
