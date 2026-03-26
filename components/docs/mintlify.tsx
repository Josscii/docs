import type { ReactNode } from 'react';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';

export function Tip({ children }: { children: ReactNode }) {
  return (
    <Callout title="提示" type="info">
      {children}
    </Callout>
  );
}

export function AccordionGroup({ children }: { children: ReactNode }) {
  return <Accordions type="single">{children}</Accordions>;
}

type UpdateProps = {
  slug: string;
  label: string;
  description: string;
  children: ReactNode;
};

export function Update({ slug, label, description, children }: UpdateProps) {
  return (
    <section className="my-8 rounded-3xl border border-fd-border/70 bg-fd-card/60 px-6 py-5 shadow-sm">
      <h2
        id={slug}
        className="mb-5 flex scroll-m-28 flex-wrap items-center gap-3 text-base font-semibold"
      >
        <span className="rounded-full bg-fd-primary/10 px-3 py-1 font-semibold text-fd-primary">
          {description}
        </span>
        <span className="text-sm font-normal text-fd-muted-foreground">{label}</span>
      </h2>
      {children}
    </section>
  );
}

export { Accordion };
