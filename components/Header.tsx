'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const labels = {
    events: lang === "es" ? "Eventos" : "Events",
    menu: lang === "es" ? "Menú" : "Menu",
    contact: lang === "es" ? "Contacto" : "Contact",
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur">
      {/* Barra superior */}
      <div className="container-inner py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo_va.png" alt="VA" width={100} height={100} priority />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          {/* Iconos */}
          <nav className="flex items-center gap-5">
            {/* Menú PDF */}
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View menu PDF"
              title={labels.menu}
            >
              <Image src="/icons/menu-pdf.png" alt="Menu PDF" width={40} height={40} />
            </a>

            {/* Events page */}
            <Link
              href="/events"
              aria-label="Events"
              title={labels.events}
            >
              <Image src="/icons/events.png" alt="Events" width={40} height={40} />
            </Link>

            {/* Ubicación -> contacto */}
            <button
              aria-label="Location"
              title="Location"
              onClick={() => scrollToSection("contacto")}
            >
              <Image src="/icons/pin.svg" alt="Location" width={40} height={40} />
            </button>
          </nav>

          {/* Switch idioma */}
          <button
            onClick={toggleLang}
            className="text-xs font-semibold px-3 py-1 rounded-full border border-black/15 hover:bg-black/5"
            aria-label="Toggle language"
            title="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Order Here */}
          <a
            href="https://toasttakeout.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm shadow-xl backdrop-blur transition hover:opacity-90"
            style={{
              backgroundColor: "rgba(42, 69, 57, 0.85)",
              color: "#F4EBDC",
              border: "1px solid rgba(244, 235, 220, 0.3)",
            }}
          >
            {lang === "es" ? "Ordenar Aquí" : "Order Here"}
            <span className="text-base">↗</span>
          </a>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center gap-3">
          {/* Switch idioma (mobile) */}
          <button
            onClick={toggleLang}
            className="text-xs font-semibold px-3 py-1 rounded-full border border-black/15 hover:bg-black/5"
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Hamburguesa */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black"
          >
            {isMenuOpen ? (
              <div className="relative h-4 w-4">
                <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-black" />
                <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-black" />
              </div>
            ) : (
              <div className="space-y-1.5">
                <span className="block h-0.5 w-4 rounded-full bg-black" />
                <span className="block h-0.5 w-4 rounded-full bg-black" />
                <span className="block h-0.5 w-4 rounded-full bg-black" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Tagline */}
      <div className="border-b border-black/10">
        <div className="container-inner py-2 text-center md:text-center font-bold">
          <p className="tagline">
            {lang === "es"
              ? "Un espacio donde el arte y la gastronomía se unen para crear más que comida: una experiencia para disfrutar, compartir y recordar."
              : "A space where art and gastronomy come together to create more than just food: an experience to enjoy, share, and remember."}
          </p>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-black/10 bg-white/95 backdrop-blur">
          <div className="container-inner flex flex-col gap-2 py-4 text-sm font-medium text-black">
            {/* Order Here */}
            <a
              href="https://toasttakeout.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-5 py-2.5 shadow-sm"
              style={{
                backgroundColor: "rgba(42, 69, 57, 0.9)",
                color: "#F4EBDC",
                border: "1px solid rgba(244, 235, 220, 0.4)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {lang === "es" ? "Ordenar Aquí" : "Order Here"}
              <span className="text-base">↗</span>
            </a>

            {/* Menu PDF */}
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-black/[0.03]"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/icons/cutlery.svg" alt="Menu" className="w-5 h-5" />
              {labels.menu}
            </a>

            {/* Events page */}
            <Link
              href="/events"
              className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-black/[0.03]"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/icons/events.svg" alt="Events" className="w-5 h-5" />
              {labels.events}
            </Link>

            {/* Contacto */}
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left rounded-xl px-3 py-2 hover:bg-black/[0.03]"
            >
              {labels.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
