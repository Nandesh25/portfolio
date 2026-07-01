import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certifications } from '@/data/portfolio';
import { scaleIn, staggerContainer, viewportOnce } from '@/utils/motion';

/** Certifications section: animated certificate cards. */
export function Certifications() {
  return (
    <Section id="certifications" muted>
      <SectionHeading
        eyebrow="Continuous Learning"
        title="Certifications"
        description="Professional certifications that strengthen my technical foundation."
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.title}
            variants={scaleIn}
            whileHover={{ y: -5 }}
            className="glass-card group flex items-start gap-4 p-6 shadow-card transition-shadow duration-300 hover:shadow-glow"
          >
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500/20 dark:text-accent-300">
              <FaCertificate className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-bold leading-snug text-slate-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
                {cert.organization}
                {cert.date && (
                  <span className="text-slate-500 dark:text-slate-500"> · {cert.date}</span>
                )}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
