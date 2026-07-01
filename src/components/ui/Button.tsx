import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  className?: string;
  fullWidth?: boolean;
}

interface ButtonAsButton extends BaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsAnchor extends BaseProps {
  as: 'a';
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-500 text-slate-950 hover:bg-accent-400 shadow-glow hover:shadow-[0_0_50px_-8px_rgba(34,211,238,0.55)]',
  secondary:
    'border border-slate-300 bg-white/40 text-slate-800 hover:border-accent-400 hover:text-accent-600 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-100 dark:hover:border-accent-400 dark:hover:text-accent-300',
  ghost:
    'text-slate-600 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

/** Polymorphic, animated button that renders as a <button> or <a>. */
export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    className,
    fullWidth = false,
  } = props;

  const classes = cn(
    'focus-ring group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (props.as === 'a') {
    const { href, download, target, rel } = props;
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  const { type = 'button', onClick, disabled } = props;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && 'cursor-not-allowed opacity-60')}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
