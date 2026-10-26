import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentCta } from "@/components/appointment-cta";
import { ArrowRight, Check } from "@/components/icons";
import { getTreatment, treatments } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = getTreatment((await params).slug);
  if (!treatment) return { title: "Treatment not found" };
  return { title: treatment.title, description: treatment.summary };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const treatment = getTreatment((await params).slug);
  if (!treatment) notFound();

  return (
    <>
      <section className="detail-hero page-width">
        <Link className="detail-back" href="/treatments">← All treatments</Link>
        <div className="detail-hero__grid">
          <div>
            <p className="eyebrow">{treatment.eyebrow}</p>
            <h1>{treatment.title}</h1>
            <p className="detail-summary">{treatment.summary}</p>
          </div>
          <div className="detail-number">Care / {String(treatments.indexOf(treatment) + 1).padStart(2, "0")}</div>
        </div>
      </section>
      <section className="detail-image page-width">
        <Image src="/images/therapy-preparation.png" alt="Illustrative preparation for traditional Ayurvedic external therapy" fill priority sizes="100vw" />
        <p className="image-caption">Illustrative image · the specific care plan may differ</p>
      </section>
      <section className="detail-content section-pad page-width">
        <div className="detail-main">
          <p className="eyebrow">Understanding the care</p>
          <h2>A measured introduction</h2>
          <p className="large-copy">{treatment.description}</p>
          <h3>How a conversation may proceed</h3>
          <ul className="check-list">
            {treatment.approach.map((item) => <li key={item}><Check />{item}</li>)}
          </ul>
        </div>
        <aside className="detail-aside">
          <div><span>May be relevant for</span><p>{treatment.suitableFor}</p></div>
          <div><span>Important note</span><p>{treatment.note}</p></div>
          <Link className="text-link text-link--dark" href="/medical-disclaimer">Read medical disclaimer <ArrowRight /></Link>
        </aside>
      </section>
      <AppointmentCta />
    </>
  );
}

