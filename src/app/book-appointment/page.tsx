import type { Metadata } from "next";
import { AppointmentForm } from "@/components/appointment-form";
import { PageHeading } from "@/components/page-heading";
import { Clock, Phone } from "@/components/icons";
import { siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Use the presentation-only appointment enquiry form for Dr Dadhe's Ayur & Nature Cure LLP.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHeading
        eyebrow="Appointment enquiry"
        title={<>Start with a <em>conversation.</em></>}
        intro="Complete this interactive demo to preview the proposed patient journey. It does not transmit data or create a real appointment."
      />
      <section className="booking-layout section-pad page-width">
        <aside className="booking-aside">
          <p className="eyebrow">Before you begin</p>
          <h2>This form is a demo.</h2>
          <p>No information is sent or saved. For a real enquiry today, please call the clinic directly.</p>
          <a href={`tel:${siteSettings.phonePrimary}`}><Phone /> <span><small>Call the clinic</small>{siteSettings.phonePrimary}</span></a>
          <div className="booking-hours"><Clock /><p><strong>Visiting hours</strong>{siteSettings.hours}<br />{siteSettings.closure}</p></div>
        </aside>
        <AppointmentForm />
      </section>
    </>
  );
}

