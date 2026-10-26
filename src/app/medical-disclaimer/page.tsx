import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Draft Medical Disclaimer", description: "Draft medical disclaimer for client review." };

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHeading eyebrow="Draft · clinical and legal review required" title={<>Medical <em>disclaimer.</em></>} intro="This presentation copy sets a responsible direction but must be reviewed by the clinic's qualified clinical and legal advisers before publication." />
      <article className="legal-copy section-pad page-width">
        <div className="draft-banner"><strong>Not medical advice</strong><p>Website information is general and cannot replace an individual consultation, diagnosis or treatment plan.</p></div>
        <h2>Care decisions</h2><p>Do not start, stop or change prescribed medicines or medical treatment based on this website. Tell every practitioner about your diagnoses, medicines, supplements, allergies and ongoing care.</p>
        <h2>Serious and chronic conditions</h2><p>Cancer, kidney disease, liver disease, stroke, paralysis and developmental conditions require appropriate medical assessment and ongoing professional care. Ayurvedic or nature-cure services should be considered complementary support only and are not presented as cures.</p>
        <h2>Emergencies</h2><p>This website is not an emergency service. For sudden weakness, facial drooping, speech difficulty, chest pain, breathing difficulty, severe bleeding, loss of consciousness or another urgent concern, seek emergency medical help immediately.</p>
        <h2>Individual results and suitability</h2><p>Responses to any therapy vary. No result, recovery timeline or outcome is guaranteed. Traditional therapies and herbs can have contraindications and may interact with medicines.</p>
        <h2>Children and pregnancy</h2><p>Care involving children, pregnancy, breastfeeding or complex conditions requires additional assessment and coordination with appropriate medical professionals.</p>
      </article>
    </>
  );
}

