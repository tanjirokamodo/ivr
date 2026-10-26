"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteSettings } from "@/lib/content";
import { LeafMark, Phone } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <p>Traditional care, thoughtfully considered</p>
        <a href={`tel:${siteSettings.phonePrimary}`}>
          <Phone className="utility-icon" />
          {siteSettings.phonePrimary}
        </a>
      </div>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label={`${siteSettings.name} home`}>
          <LeafMark className="brand-mark" />
          <span className="brand-copy">
            <strong>{siteSettings.shortName}</strong>
            <small>Ayur & Nature Cure</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} className={active ? "active" : ""} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="nav-appointment" href="/book-appointment">
          Book appointment
        </Link>

        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link className="mobile-book" href="/book-appointment" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Book an appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}

