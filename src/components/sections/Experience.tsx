import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/portfolio';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

/** Experience section rendered as a vertical timeline. */
export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Where I've Worked"
        title="Experience"
        description="My professional journey, responsibilities and the impact I've delivered."
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto mt-14 max-w-3xl"
      >
        {/* Timeline line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-500/60 via-slate-300 to-transparent dark:via-white/10 sm:left-5" />

        {experiences.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.role}`}
            variants={fadeInUp}
            className="relative mb-10 pl-14 last:mb-0 sm:pl-16"
          >
            {/* Node */}
            <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent-400/40 bg-accent-500/10 text-accent-600 dark:text-accent-300 sm:h-10 sm:w-10">
              <FaBriefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            </span>

            <div className="glass-card p-6 shadow-card">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <span className="inline-flex w-fit rounded-full bg-accent-500/10 px-3 py-1 font-mono text-xs font-medium text-accent-600 dark:text-accent-300">
                  {exp.duration}
                </span>
              </div>
              <p className="mt-1 font-semibold text-accent-600 dark:text-accent-400">
                {exp.company}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>

              {exp.achievements.length > 0 && (
                <div className="mt-4 rounded-xl border border-accent-500/20 bg-accent-500/[0.06] p-4">
                  {exp.achievements.map((a) => (
                    <p
                      key={a}
                      className="flex gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      <FaTrophy className="mt-0.5 h-3.5 w-3.5 flex-none text-accent-500" aria-hidden />
                      {a}
                    </p>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
