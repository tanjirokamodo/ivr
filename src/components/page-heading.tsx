import type { ReactNode } from "react";

type PageHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
};

export function PageHeading({ eyebrow, title, intro }: PageHeadingProps) {
  return (
    <section className="page-heading page-width">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-heading__grid">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

