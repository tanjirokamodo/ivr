import Link from "next/link";
import { navigation, siteSettings } from "@/lib/content";
import { LeafMark } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-width">
        <div className="footer-brand">
          <LeafMark className="footer-mark" />
          <p className="eyebrow eyebrow--gold">Rooted in tradition</p>
          <h2>Care shaped around the whole person.</h2>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/book-appointment">Book appointment</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Visit</p>
          <address>
            {siteSettings.addressLines.map((line) => <span key={line}>{line}</span>)}
          </address>
          <p className="footer-hours">{siteSettings.hours}<br />{siteSettings.closure}</p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="footer-links">
            <a href={`tel:${siteSettings.phonePrimary}`}>{siteSettings.phonePrimary}</a>
            <a href={`tel:${siteSettings.phoneSecondary}`}>{siteSettings.phoneSecondary}</a>
            <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-width">
        <p>© {siteSettings.copyrightYear} {siteSettings.name}</p>
        <div>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/medical-disclaimer">Medical disclaimer</Link>
        </div>
        <p>Presentation demo · Content subject to client approval</p>
      </div>
    </footer>
  );
}

