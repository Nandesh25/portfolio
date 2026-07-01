import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/** Consistent animated heading block for every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}
    >
      <motion.p
        variants={fadeInUp}
        className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 dark:text-accent-400"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        variants={fadeInUp}
        className={cnHeadingBar(isCenter)}
        aria-hidden="true"
      />
    </motion.div>
  );
}

function cnHeadingBar(isCenter: boolean): string {
  return [
    'mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent-400 to-accent-600',
    isCenter ? 'mx-auto' : '',
  ]
    .filter(Boolean)
    .join(' ');
}
