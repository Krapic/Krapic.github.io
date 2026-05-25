export const SectionDivider = () => (
  <div className="relative h-px w-full max-w-4xl mx-auto my-2" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_12px_hsl(var(--primary))]" />
  </div>
);
