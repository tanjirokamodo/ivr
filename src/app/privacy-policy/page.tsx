import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "Draft Privacy Policy", description: "Draft privacy policy for client review." };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeading eyebrow="Draft · client review required" title={<>Privacy <em>policy.</em></>} intro="This placeholder policy is written for the presentation demo. It is not approved legal copy and must be reviewed before production publication." />
      <article className="legal-copy section-pad page-width">
        <div className="draft-banner"><strong>Draft for discussion</strong><p>The production team must confirm the final data controller, processors, retention periods, security practices and contact process.</p></div>
        <h2>1. About this demo</h2><p>This website is a visual and functional prototype. The appointment form operates only in the browser and does not send or store the information entered.</p>
        <h2>2. Information a production website may collect</h2><p>A future production booking service may collect contact details, appointment preferences and information a patient chooses to provide. The final form should request only what the clinic genuinely needs.</p>
        <h2>3. Use and sharing</h2><p>The clinic should define how information is used to respond to enquiries, arrange care and meet legal obligations. Information should not be sold. Any service providers and lawful disclosures must be documented in the approved policy.</p>
        <h2>4. Sensitive information</h2><p>Visitors should avoid sending detailed medical information through general website forms unless the clinic has implemented an appropriate secure process and explained how that information will be protected.</p>
        <h2>5. Retention and rights</h2><p>The production policy must state retention periods and the process for access, correction, deletion or other applicable requests under relevant law.</p>
        <h2>6. Contact</h2><p>The clinic must approve a privacy contact and postal address before this section is published.</p>
      </article>
    </>
  );
}

