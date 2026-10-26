import type { Metadata } from "next";
import { AppointmentCta } from "@/components/appointment-cta";
import { LeafMark } from "@/components/icons";
import { PageHeading } from "@/components/page-heading";
import { practitioner } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practitioner",
  description: `Meet ${practitioner.displayName}, founder and practitioner at Dr Dadhe's Ayur & Nature Cure LLP.`,
};

export default function PractitionerPage() {
  return (
    <>
      <PageHeading
        eyebrow="Practitioner"
        title={<>Vaidya Sri<br /><em>Venkat Rao</em></>}
        intro="A careful profile based only on information published by the clinic. Qualifications, registrations and detailed professional history await client-supplied verification."
      />
      <section className="profile-section section-pad page-width">
        <div className="profile-art" aria-hidden="true">
          <LeafMark />
          <span>Founder</span>
        </div>
        <div className="profile-copy">
          <p className="eyebrow">{practitioner.role}</p>
          <h2>A whole-person view of care.</h2>
          <p className="large-copy">{practitioner.introduction}</p>
          <p>{practitioner.approach}</p>
          <div className="verification-note">
            <strong>Information awaiting clinic approval</strong>
            <p>{practitioner.approvalNote}</p>
          </div>
        </div>
      </section>
      <section className="practice-principles section-pad">
        <div className="page-width">
          <p className="eyebrow eyebrow--gold">Proposed care principles</p>
          <div className="practice-principles__grid">
            <article><span>01</span><h3>Understand</h3><p>Hear the concern in the context of the person&apos;s health, routines and present medical care.</p></article>
            <article><span>02</span><h3>Individualise</h3><p>Choose a path for the individual, with attention to suitability and practical constraints.</p></article>
            <article><span>03</span><h3>Review</h3><p>Observe comfort, discuss progress honestly and change course when appropriate.</p></article>
          </div>
        </div>
      </section>
      <AppointmentCta />
    </>
  );
}

