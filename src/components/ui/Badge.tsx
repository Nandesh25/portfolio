import { cn } from '@/utils/cn';

interface BadgeProps {
  label: string;
  className?: string;
}

/** Small pill used for technologies/skills tags. */
export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-700 transition-colors duration-300 hover:border-accent-400 hover:text-accent-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-accent-400/60 dark:hover:text-accent-300',
        className,
      )}
    >
      {label}
    </span>
  );
}
