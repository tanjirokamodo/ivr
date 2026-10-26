import Image from "next/image";
import Link from "next/link";
import { AppointmentCta } from "@/components/appointment-cta";
import { ButtonLink } from "@/components/button-link";
import { ArrowRight, ArrowUpRight, LeafMark } from "@/components/icons";
import { TreatmentCard } from "@/components/treatment-card";
import { eventOfferings, practitioner, siteSettings, treatments } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <div className="hero-index"><span>Est. in Telangana</span><span>Ayurveda · Nature cure</span></div>
          <p className="eyebrow">Traditional care, thoughtfully considered</p>
          <h1>Ancient wisdom.<br /><em>Attentive care.</em></h1>
          <p className="hero-lede">
            Individual consultation, supportive therapies and practical routines—brought together with clarity, care and respect for modern medicine.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/book-appointment">Request an appointment</ButtonLink>
            <Link className="text-link" href="/treatments">Explore treatments <ArrowRight /></Link>
          </div>
          <div className="hero-detail">
            <LeafMark className="hero-detail__mark" />
            <p><strong>Visit in Pilligundla</strong>{siteSettings.hours}<br />{siteSettings.closure}</p>
          </div>
        </div>
        <div className="home-hero__visual">
          <Image
            src="/images/buddha-forest-hero.png"
            alt="Illustrative stone Buddha seated among moss and deep forest greenery"
            fill
            priority
            sizes="100vw"
          />
          <p className="image-caption">Illustrative wellness imagery · not the clinic premises</p>
          <div className="hero-vertical">Rooted in tradition · Guided by responsibility</div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="page-width intro-grid">
          <div>
            <p className="eyebrow">A grounded philosophy</p>
            <h2>Traditional knowledge.<br /><em>Clear responsibility.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="intro-copy__lead">
              Dr Dadhe’s Ayur & Nature Cure brings together Ayurveda, nature cure and disciplined daily practices with a focus on individual assessment.
            </p>
            <p>
              This proposed experience presents traditional care with measured language. It positions consultation first, recognises the role of modern medical care and avoids promises that no responsible practitioner can make.
            </p>
            <Link className="text-link text-link--dark" href="/about">Our approach <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="featured-treatments section-pad">
        <div className="page-width">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--gold">Selected care</p>
              <h2>An individual path,<br />not a fixed package.</h2>
            </div>
            <p>Every therapy starts with suitability, context and an honest conversation about what it can—and cannot—offer.</p>
          </div>
          <div className="treatment-editorial-grid">
            {treatments.slice(0, 4).map((treatment, index) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} index={index} />
            ))}
          </div>
          <div className="section-end-link">
            <Link className="text-link text-link--light" href="/treatments">View all treatments <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="practitioner-feature section-pad">
        <div className="page-width practitioner-grid">
          <div className="practitioner-art" aria-hidden="true">
            <span className="practitioner-art__ring" />
            <LeafMark className="practitioner-art__leaf" />
            <p>प्रकृति</p>
            <small>Nature</small>
          </div>
          <div className="practitioner-copy">
            <p className="eyebrow">Meet the practitioner</p>
            <h2>{practitioner.displayName}</h2>
            <p className="practitioner-role">{practitioner.role}</p>
            <p>{practitioner.introduction}</p>
            <blockquote>“Listen to the person before deciding the path.”</blockquote>
            <p className="approval-inline">Editorial principle for this demo—not a verified quotation.</p>
            <Link className="text-link text-link--dark" href="/practitioner">Practitioner profile <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="events-teaser">
        <div className="events-teaser__image">
          <Image
            src="/images/traditional-offerings.png"
            alt="Illustrative traditional offerings arranged in brass bowls at twilight"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <p className="image-caption">Illustrative image · event details should be confirmed directly</p>
        </div>
        <div className="events-teaser__content">
          <p className="eyebrow eyebrow--gold">Traditional offerings</p>
          <h2>Care in rhythm<br />with tradition.</h2>
          <p>
            Three recurring occasions described by the clinic, prepared with prayer, care and a community intention.
          </p>
          <div className="event-mini-list">
            {eventOfferings.map((event, index) => (
              <Link href="/events" key={event.title}>
                <span>0{index + 1}</span>
                <div><strong>{event.title}</strong><small>{event.rhythm}</small></div>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-pad">
        <div className="page-width">
          <div className="section-heading section-heading--split section-heading--dark">
            <div>
              <p className="eyebrow">The clinic experience</p>
              <h2>Simple, attentive,<br /><em>human.</em></h2>
            </div>
            <p>
              The reference site verifies the location and opening hours, but does not publish a detailed facility inventory. This demo therefore focuses on the care journey without inventing amenities.
            </p>
          </div>
          <ol className="experience-steps">
            <li><span>01</span><h3>Enquire</h3><p>Call, WhatsApp or use the presentation-only enquiry form.</p></li>
            <li><span>02</span><h3>Consult</h3><p>Bring relevant records and discuss your present care and priorities.</p></li>
            <li><span>03</span><h3>Consider</h3><p>Understand suitability, precautions and a measured next step.</p></li>
          </ol>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}

