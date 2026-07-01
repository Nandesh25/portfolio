import { motion } from 'framer-motion';
import { socialLinks } from '@/data/portfolio';
import { cn } from '@/utils/cn';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

/** Renders the social links from portfolio data with hover animation. */
export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => {
        const isExternal = href.startsWith('http');
        return (
          <li key={label}>
            <motion.a
              href={href}
              aria-label={label}
              title={label}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-600 transition-colors duration-300 hover:border-accent-400 hover:text-accent-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-300"
            >
              <Icon className={cn('h-5 w-5', iconClassName)} aria-hidden />
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
}
