import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/portfolio';
import { fadeInUp, viewportOnce } from '@/utils/motion';

/** Resume section: an inline preview of the PDF plus a download action. */
export function Resume() {
  return (
    <Section id="resume" muted>
      <SectionHeading
        eyebrow="My Résumé"
        title="Resume"
        description="Preview my resume below or download a copy for your records."
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mt-14 max-w-3xl"
      >
        <div className="glass-card overflow-hidden shadow-card">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-5 py-3 dark:border-white/10">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <FaFilePdf className="h-4 w-4 text-accent-500" aria-hidden />
              Resume Preview
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-accent-600 hover:text-accent-500 dark:text-accent-300"
            >
              Open in new tab <FaExternalLinkAlt className="h-2.5 w-2.5" aria-hidden />
            </a>
          </div>

          {/* Preview */}
          <object
            data={`${profile.resumeUrl}#toolbar=0&view=FitH`}
            type="application/pdf"
            aria-label="Resume PDF preview"
            className="h-[70vh] max-h-[820px] w-full bg-slate-200 dark:bg-black/40"
          >
            <div className="flex h-64 flex-col items-center justify-center gap-3 p-8 text-center">
              <FaFilePdf className="h-10 w-10 text-accent-500" aria-hidden />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Preview isn&apos;t available in this browser. Please download the resume instead.
              </p>
            </div>
          </object>
        </div>

        <div className="mt-8 flex justify-center">
          <Button as="a" href={profile.resumeUrl} download size="lg" icon={FaDownload}>
            Download Resume
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
