/**
 * Lightweight className combiner — filters falsy values and joins with spaces.
 * Avoids pulling in an extra dependency for simple conditional classes.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
