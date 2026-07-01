import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/portfolio';
import { slideInLeft, slideInRight, viewportOnce } from '@/utils/motion';
import { cn } from '@/utils/cn';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = { name: '', email: '', subject: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactChannels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope, external: false },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: FaPhone, external: false },
  { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, icon: FaLinkedin, external: true },
  { label: 'GitHub', value: 'See my work', href: profile.github, icon: FaGithub, external: true },
] as const;

/** Contact section: contact channels plus a client-side validated form. */
export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email.';
    else if (!EMAIL_REGEX.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.subject.trim()) next.subject = 'Please enter a subject.';
    if (!values.message.trim()) next.message = 'Please enter a message.';
    else if (values.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.';
    return next;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // Frontend-only: open the user's mail client with prefilled content.
      const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject,
      )}&body=${body}`;
      setSubmitted(true);
      setForm(EMPTY_FORM);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Let's Connect"
        title="Get In Touch"
        description="Have an opportunity or just want to say hello? I'd love to hear from you."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* Channels */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4"
        >
          <p className="max-w-md leading-relaxed text-slate-600 dark:text-slate-400">
            I&apos;m currently {profile.availability.toLowerCase()}. Reach me through any of the
            channels below, or use the form and it will open in your email client.
          </p>
          <ul className="space-y-3">
            {contactChannels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="focus-ring group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/50 p-4 transition-all duration-300 hover:border-accent-400 hover:shadow-card dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500/20 dark:text-accent-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                      {label}
                    </span>
                    <span className="block truncate font-semibold text-slate-800 dark:text-slate-100">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card space-y-5 p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              value={form.name}
              error={errors.name}
              onChange={(v) => handleChange('name', v)}
              placeholder="Your name"
              autoComplete="name"
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(v) => handleChange('email', v)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <Field
            id="subject"
            label="Subject"
            value={form.subject}
            error={errors.subject}
            onChange={(v) => handleChange('subject', v)}
            placeholder="What's this about?"
          />

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Tell me a little about it..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={cn(inputClass, 'resize-none', errors.message && errorInputClass)}
            />
            {errors.message && (
              <p id="message-error" className={errorTextClass}>
                {errors.message}
              </p>
            )}
          </div>

          <Button as="button" type="submit" size="lg" icon={FaPaperPlane} iconPosition="right" fullWidth>
            Send Message
          </Button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-300"
            >
              <FaCheckCircle className="h-4 w-4" aria-hidden />
              Your email client should now be open — thanks for reaching out!
            </motion.p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300';
const inputClass =
  'focus-ring w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100 dark:placeholder:text-slate-500';
const errorInputClass = 'border-rose-400 dark:border-rose-500/70';
const errorTextClass = 'mt-1.5 text-xs font-medium text-rose-500 dark:text-rose-400';

interface FieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
}

function Field({ id, label, value, error, onChange, placeholder, type = 'text', autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputClass, error && errorInputClass)}
      />
      {error && (
        <p id={`${id}-error`} className={errorTextClass}>
          {error}
        </p>
      )}
    </div>
  );
}
