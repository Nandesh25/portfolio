import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/portfolio';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

/** Education section rendered as a timeline. */
export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="My Background"
        title="Education"
        description="My academic journey and qualifications."
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto mt-14 max-w-3xl"
      >
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-500/60 via-slate-300 to-transparent dark:via-white/10 sm:left-5" />

        {education.map((item) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            variants={fadeInUp}
            className="relative mb-8 pl-14 last:mb-0 sm:pl-16"
          >
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent-400/40 bg-accent-500/10 text-accent-600 dark:text-accent-300 sm:h-10 sm:w-10">
              <FaGraduationCap className="h-4 w-4" aria-hidden />
            </span>

            <div className="glass-card p-5 shadow-card sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <span className="inline-flex w-fit rounded-full bg-accent-500/10 px-3 py-1 font-mono text-xs font-medium text-accent-600 dark:text-accent-300">
                  {item.duration}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                {item.institution}
              </p>
              {item.score && (
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                  Score: <span className="font-semibold text-accent-600 dark:text-accent-300">{item.score}</span>
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
