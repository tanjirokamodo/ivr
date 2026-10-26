import type { Metadata } from "next";
import Image from "next/image";
import { AppointmentCta } from "@/components/appointment-cta";
import { PageHeading } from "@/components/page-heading";
import { TreatmentCard } from "@/components/treatment-card";
import { treatments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Explore traditional therapies and supportive care described by Dr Dadhe's Ayur & Nature Cure LLP.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Treatments & supportive care"
        title={<>Care begins with <em>context.</em></>}
        intro="This directory presents the clinic's publicly described therapies in measured language. Suitability, duration and expected outcomes must be discussed in consultation."
      />
      <section className="treatments-lead page-width">
        <div className="treatments-lead__image">
          <Image src="/images/therapy-preparation.png" alt="Illustrative preparation of a traditional herbal poultice" fill priority sizes="(max-width: 900px) 100vw, 60vw" />
          <p className="image-caption">Illustrative therapy preparation</p>
        </div>
        <aside>
          <p className="eyebrow">Before you choose</p>
          <h2>Assessment first.</h2>
          <p>Therapy names can be familiar; suitability is personal. Share diagnoses, current medicines, allergies, pregnancy and recent procedures before any recommendation.</p>
        </aside>
      </section>
      <section className="treatments-directory section-pad page-width">
        {treatments.map((treatment, index) => <TreatmentCard key={treatment.slug} treatment={treatment} index={index} />)}
      </section>
      <AppointmentCta />
    </>
  );
}

