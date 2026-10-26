import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { PageHeading } from "@/components/page-heading";
import { eventOfferings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events & Traditional Offerings",
  description: "Recurring traditional offerings described by Dr Dadhe's Ayur & Nature Cure LLP.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Traditional offerings"
        title={<>A calendar shaped by <em>tradition.</em></>}
        intro="Three recurring occasions publicly described by the clinic. Exact dates, preparation details and availability must be confirmed directly before attending."
      />
      <section className="events-hero-image page-width">
        <Image src="/images/traditional-offerings.png" alt="Illustrative traditional offerings in brass bowls at twilight" fill priority sizes="100vw" />
        <p className="image-caption">Illustrative image · not a photograph of a clinic event</p>
      </section>
      <section className="event-list section-pad page-width">
        {eventOfferings.map((event, index) => (
          <article key={event.title}>
            <div className="event-list__number">0{index + 1}</div>
            <div><p className="eyebrow">{event.rhythm}</p><h2>{event.title}</h2></div>
            <div className="event-list__copy"><p>{event.description}</p><small>Who may participate</small><strong>{event.audience}</strong></div>
          </article>
        ))}
      </section>
      <section className="event-enquiry section-pad">
        <div className="page-width event-enquiry__inner">
          <div><p className="eyebrow eyebrow--gold">Plan before visiting</p><h2>Dates follow the traditional calendar.</h2></div>
          <div><p>No specific event date, fee or availability is promised on this demo. Contact the clinic for the current schedule and suitability information.</p><ButtonLink href="/contact" variant="light">Contact the clinic</ButtonLink></div>
        </div>
      </section>
    </>
  );
}

