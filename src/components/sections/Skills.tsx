import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { skillCategories } from '@/data/portfolio';
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from '@/utils/motion';

/** Skills section: categorized, animated skill cards. */
export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeading
        eyebrow="What I Work With"
        title="Skills & Technologies"
        description="A categorized overview of the languages, frameworks and tools I use to build and ship software."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <motion.article
            key={title}
            variants={scaleIn}
            whileHover={{ y: -6 }}
            className="glass-card group p-6 shadow-card transition-shadow duration-300 hover:shadow-glow"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500/20 dark:text-accent-300">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
            </div>

            <motion.ul
              variants={staggerContainer(0.05)}
              className="mt-5 flex flex-wrap gap-2"
            >
              {skills.map((skill) => (
                <motion.li key={skill} variants={fadeInUp}>
                  <Badge label={skill} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
