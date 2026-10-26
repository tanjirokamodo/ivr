import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Clock, Mail, MapPin, Phone, WhatsApp } from "@/components/icons";
import { PageHeading } from "@/components/page-heading";
import { siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Verified contact details, opening hours and location for Dr Dadhe's Ayur & Nature Cure LLP.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="Contact & directions"
        title={<>Let’s begin with<br /><em>a conversation.</em></>}
        intro="Call or message the clinic for appointment and event enquiries. The details below are taken from the clinic's public website."
      />
      <section className="contact-layout section-pad page-width">
        <div className="contact-details">
          <article><MapPin /><div><span>Visit</span><address>{siteSettings.addressLines.map((line) => <span key={line}>{line}</span>)}</address><a href={siteSettings.mapsUrl} target="_blank" rel="noopener noreferrer">Open directions ↗</a></div></article>
          <article><Phone /><div><span>Call</span><a href={`tel:${siteSettings.phonePrimary}`}>{siteSettings.phonePrimary}</a><a href={`tel:${siteSettings.phoneSecondary}`}>{siteSettings.phoneSecondary}</a></div></article>
          <article><Mail /><div><span>Email</span><a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a></div></article>
          <article><Clock /><div><span>Hours</span><p>{siteSettings.hours}<br />{siteSettings.closure}</p></div></article>
          <div className="contact-actions">
            <ButtonLink href="/book-appointment">Appointment demo</ButtonLink>
            <a className="whatsapp-inline" href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noopener noreferrer"><WhatsApp /> WhatsApp</a>
          </div>
        </div>
        <div className="map-wrap">
          <iframe title="Map showing the public clinic location in Pilligundla, Telangana" src={siteSettings.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <p>Map location based on the public address and map link supplied by the reference website.</p>
        </div>
      </section>
    </>
  );
}

