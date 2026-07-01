import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
  project: Project;
}

/** Detailed, expandable project card with hover animation and an image placeholder. */
export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;
  const hasGithub = project.github !== '#';
  const hasDemo = project.demo !== '#';

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="glass-card group flex h-full flex-col overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-glow"
    >
      {/* Image placeholder */}
      <div
        className={cn(
          'relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br',
          project.accent,
        )}
      >
        <div className="absolute inset-0 bg-grid-dark bg-[size:28px_28px] opacity-40" />
        <motion.span
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur"
          whileHover={{ rotate: 6, scale: 1.05 }}
        >
          <Icon className="h-7 w-7" aria-hidden />
        </motion.span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.summary}
        </p>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <dl className="mt-5 space-y-4 text-sm">
                <Detail term="Problem" value={project.problem} />
                <Detail term="Solution" value={project.solution} />
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-accent-600 dark:text-accent-400">
                    Key Features
                  </dt>
                  <ul className="mt-2 space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Detail term="Challenges" value={project.challenges} />
                <Detail term="Outcome" value={project.outcome} />
              </dl>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="focus-ring inline-flex items-center gap-1.5 rounded-full text-sm font-semibold text-accent-600 transition-colors hover:text-accent-500 dark:text-accent-300"
          >
            {expanded ? 'Show less' : 'View details'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <FaChevronDown className="h-3 w-3" aria-hidden />
            </motion.span>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={project.github}
              target={hasGithub ? '_blank' : undefined}
              rel={hasGithub ? 'noopener noreferrer' : undefined}
              aria-label={`${project.title} source code on GitHub`}
              title={hasGithub ? 'View source' : 'Repository link coming soon'}
              className={cn(
                'focus-ring flex h-9 w-9 items-center justify-center rounded-full border transition-colors',
                'border-slate-200 text-slate-600 hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:text-slate-300 dark:hover:text-accent-300',
                !hasGithub && 'opacity-50',
              )}
            >
              <FaGithub className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={project.demo}
              target={hasDemo ? '_blank' : undefined}
              rel={hasDemo ? 'noopener noreferrer' : undefined}
              aria-label={`${project.title} live demo`}
              title={hasDemo ? 'Live demo' : 'Live demo coming soon'}
              className={cn(
                'focus-ring flex h-9 w-9 items-center justify-center rounded-full border transition-colors',
                'border-slate-200 text-slate-600 hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:text-slate-300 dark:hover:text-accent-300',
                !hasDemo && 'opacity-50',
              )}
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-widest text-accent-600 dark:text-accent-400">
        {term}
      </dt>
      <dd className="mt-1 leading-relaxed text-slate-600 dark:text-slate-400">{value}</dd>
    </div>
  );
}
