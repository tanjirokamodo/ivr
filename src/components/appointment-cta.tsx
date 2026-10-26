import { ButtonLink } from "@/components/button-link";

export function AppointmentCta() {
  return (
    <section className="appointment-cta section-pad">
      <div className="page-width appointment-cta__inner">
        <p className="eyebrow eyebrow--gold">A considered first step</p>
        <h2>Begin with a conversation, not a promise.</h2>
        <p>
          Tell us what brings you here. The clinic can discuss whether an in-person consultation may be appropriate.
        </p>
        <ButtonLink href="/book-appointment" variant="light">Request an appointment</ButtonLink>
      </div>
    </section>
  );
}

