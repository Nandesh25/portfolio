import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/portfolio';
import { fadeInUp, staggerContainer, viewportOnce } from '@/utils/motion';

/** Projects section: a responsive grid of detailed project cards. */
export function Projects() {
  return (
    <Section id="projects" muted>
      <SectionHeading
        eyebrow="What I've Built"
        title="Featured Projects"
        description="A selection of projects spanning real-time systems, computer vision and IoT. Expand any card for the full breakdown."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={fadeInUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
