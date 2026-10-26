import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppContact } from "@/components/whatsapp-contact";
import { siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://drdadhesayurandnaturecurellp.com"),
  title: {
    default: `${siteSettings.name} | Ayurveda & Nature Cure`,
    template: `%s | ${siteSettings.shortName}`,
  },
  description:
    "A presentation demo for Dr Dadhe's Ayur & Nature Cure LLP, introducing its Ayurveda, nature cure and supportive wellness approach.",
  openGraph: {
    title: siteSettings.name,
    description: siteSettings.tagline,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/buddha-forest-hero.png", width: 1672, height: 940, alt: "Illustrative Buddha in a forest wellness setting" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <WhatsAppContact />
      </body>
    </html>
  );
}

