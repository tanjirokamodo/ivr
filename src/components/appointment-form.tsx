"use client";

import { useState, type FormEvent } from "react";
import { treatments } from "@/lib/content";
import { Check } from "@/components/icons";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    setSubmitted(true);
    document.getElementById("demo-confirmation")?.focus();
  }

  return (
    <div className="appointment-form-wrap">
      {submitted && (
        <div id="demo-confirmation" className="form-success" role="status" tabIndex={-1}>
          <Check />
          <div>
            <h2>Demo enquiry completed</h2>
            <p>
              This prototype did not send, save or create an appointment. In production, the clinic should confirm the next step with the patient.
            </p>
          </div>
          <button type="button" onClick={() => setSubmitted(false)}>Submit another demo</button>
        </div>
      )}

      <form className="appointment-form" onSubmit={handleSubmit} noValidate={false}>
        <div className="field field--wide">
          <label htmlFor="patient-name">Patient name <span>*</span></label>
          <input id="patient-name" name="patientName" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number <span>*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" minLength={8} required />
        </div>
        <div className="field">
          <label htmlFor="email">Email <small>Optional</small></label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div className="field field--wide">
          <label htmlFor="treatment">Treatment or concern <span>*</span></label>
          <select id="treatment" name="treatment" defaultValue="" required>
            <option value="" disabled>Select an option</option>
            {treatments.map((treatment) => <option key={treatment.slug} value={treatment.slug}>{treatment.title}</option>)}
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="preferred-date">Preferred date <span>*</span></label>
          <input id="preferred-date" name="preferredDate" type="date" required />
        </div>
        <div className="field">
          <label htmlFor="preferred-time">Preferred time <span>*</span></label>
          <input id="preferred-time" name="preferredTime" type="time" min="08:00" max="14:00" required />
        </div>
        <div className="field field--wide">
          <label htmlFor="message">Message <small>Optional</small></label>
          <textarea id="message" name="message" rows={5} placeholder="Share only what is necessary for this demo." />
        </div>
        <div className="form-submit field--wide">
          <p>No information entered here is sent or stored.</p>
          <button type="submit">Complete demo enquiry <span aria-hidden="true">↗</span></button>
        </div>
      </form>
    </div>
  );
}

