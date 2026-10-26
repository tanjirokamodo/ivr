import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M8.3 3.8 10 7.7 7.9 9.4c1.2 2.7 3.2 4.7 5.9 5.9l1.7-2.1 3.9 1.7c.3.1.5.5.4.8l-.5 3.1c-.1.6-.6 1.1-1.3 1.1C10.3 19.9 4.1 13.7 4.1 6c0-.6.5-1.2 1.1-1.3l3.1-.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="m5 12.5 4.2 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 15.7-4.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.4 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.2.1.4 0 .6l-.7.9c.8 1.5 1.8 2.5 3.4 3.2l.8-1c.2-.2.4-.2.6-.1l1.7.8c.3.1.3.3.3.5 0 .5-.2 1.3-.7 1.7-.5.4-1.2.7-2 .7-1.2 0-3-.8-4.7-2.3-1.5-1.4-2.5-3.3-2.5-4.7 0-.8.3-1.5.7-1.9.2-.1.5-.1.8-.1Z" fill="currentColor" />
    </svg>
  );
}

export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" fill="none">
      <path d="M24 42V19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M24 25C12 24 7 15 8 6c9 1 17 7 16 19Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M24 32c10-1 16-7 16-15-8 0-15 5-16 15Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M13 11c5 3 8 7 11 14m11-4c-5 3-8 7-11 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

