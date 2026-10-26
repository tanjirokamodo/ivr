import Link from "next/link";
import type { Treatment } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export function TreatmentCard({ treatment, index }: { treatment: Treatment; index: number }) {
  return (
    <article className="treatment-card">
      <div className="treatment-card__top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <p>{treatment.eyebrow}</p>
      </div>
      <div>
        <h2>{treatment.title}</h2>
        <p className="treatment-card__summary">{treatment.summary}</p>
        <Link href={`/treatments/${treatment.slug}`} aria-label={`Read about ${treatment.title}`}>
          Explore treatment <ArrowUpRight />
        </Link>
      </div>
    </article>
  );
}

