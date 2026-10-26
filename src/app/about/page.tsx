import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentCta } from "@/components/appointment-cta";
import { PageHeading } from "@/components/page-heading";
import { LeafMark } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description: "The philosophy and care approach of Dr Dadhe's Ayur & Nature Cure LLP.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeading
        eyebrow="About the clinic"
        title={<>Tradition, held with <em>care.</em></>}
        intro="A proposed editorial presentation of the clinic's publicly described philosophy—individual attention, Ayurveda, nature cure and disciplined daily living."
      />
      <section className="about-manifesto section-pad page-width">
        <div className="about-manifesto__image">
          <Image src="/images/ayurveda-hero.png" alt="Illustrative Ayurveda setting with natural materials" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <p className="image-caption">Illustrative image · not the clinic premises</p>
        </div>
        <div className="about-manifesto__copy">
          <p className="eyebrow">Why this approach</p>
          <h2>The person comes before the protocol.</h2>
          <p className="large-copy">
            The clinic describes an approach that brings Ayurveda and nature cure together with food, rest and lifestyle discipline.
          </p>
          <p>
            In this redesign, that idea becomes a clear care principle: understand the individual, review the wider context and explain recommendations without overstating what traditional care can do.
          </p>
          <p>
            Serious symptoms and diagnosed conditions still require appropriate medical assessment. Supportive Ayurvedic care should work alongside—not replace—necessary conventional care.
          </p>
        </div>
      </section>
      <section className="values-section section-pad">
        <div className="page-width values-grid">
          {[
            ["01", "Listen first", "Begin with the person's concerns, history, present treatment and daily reality."],
            ["02", "Individualise", "Choose only what is suitable; avoid a fixed package or universal promise."],
            ["03", "Explain clearly", "Discuss boundaries, precautions, expectations and when medical care is essential."],
            ["04", "Support daily life", "Build practical routines around nourishment, rest, movement and consistency."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="principle-banner page-width">
        <LeafMark />
        <p>Ayurveda can offer a framework for supportive care. It should never be used to delay diagnosis, emergency treatment or prescribed medical care.</p>
      </section>
      <AppointmentCta />
    </>
  );
}

