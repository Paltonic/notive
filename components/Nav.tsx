"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#paket", label: "Paket" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" aria-label="Notive — kembali ke atas">
          <Logo light={!scrolled && !open} />
        </a>
        <nav className="nav__links" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#kontak" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Konsultasi gratis
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
