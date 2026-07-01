import { navItems, profile } from '@/data/portfolio';
import { SocialLinks } from '@/components/ui/SocialLinks';

/** Simple, professional footer with navigation, socials and copyright. */
export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-slate-200/70 bg-slate-100/50 dark:border-white/10 dark:bg-white/[0.015]">
      <div className="container-px py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs text-center md:text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="focus-ring inline-flex items-center gap-2 rounded-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-400/40 bg-accent-500/10 font-mono text-accent-500 dark:text-accent-300">
                N
              </span>
              <span className="text-slate-900 dark:text-white">{profile.name}</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.title} — {profile.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-center sm:grid-cols-3 md:text-left">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className="focus-ring rounded text-sm text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <SocialLinks />
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded text-sm text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-300"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
