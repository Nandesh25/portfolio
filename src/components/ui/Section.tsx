import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Adds a subtle alternating background tint. */
  muted?: boolean;
}

/** Standard page section wrapper with consistent vertical rhythm and scroll offset. */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, muted = false }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          'scroll-mt-24 py-20 sm:py-28',
          muted && 'bg-slate-100/60 dark:bg-white/[0.015]',
          className,
        )}
      >
        <div className="container-px">{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
