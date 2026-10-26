import { siteSettings } from "@/lib/content";
import { WhatsApp } from "@/components/icons";

export function WhatsAppContact() {
  const message = encodeURIComponent("Hello, I would like to enquire about an appointment.");
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${siteSettings.whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask about an appointment on WhatsApp"
    >
      <WhatsApp />
      <span>WhatsApp</span>
    </a>
  );
}

