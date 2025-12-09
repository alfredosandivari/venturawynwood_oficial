'use client';

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur">
      {/* Barra superior */}
      <div className="container-inner py-4 flex items-center justify-between">
        {/* Logo VA */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo_va.png"
            alt="VA"
            width={100}
            height={100}
            priority
          />
        </div>

        {/* NAV DESKTOP (icons + botón) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Icons: menu, pin, chat */}
          <nav className="flex items-center gap-5">
            <button
              aria-label="Menú"
              onClick={() => scrollToSection("menu")}
            >
              <Image
                src="/icons/chat.svg"
                alt="Menú"
                width={40}
                height={40}
              />
            </button>

            <button
              aria-label="Ubicación"
              onClick={() => scrollToSection("contacto")}
            >
              <Image
                src="/icons/pin.svg"
                alt="Ubicación"
                width={40}
                height={40}
              />
            </button>

          </nav>

          {/* Botón Order Here (desktop) */}
          <a
            href="https://order.toasttab.com/online/ventura-new-33-northwest-28th-street"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-sm shadow-xl backdrop-blur
                       transition hover:opacity-90"
            style={{
              backgroundColor: "rgba(42, 69, 57, 0.85)",
              color: "#F4EBDC",
              border: "1px solid rgba(244, 235, 220, 0.3)",
            }}
          >
            Order Here
            <span className="text-base">↗</span>
          </a>
        </div>

        {/* NAV MOBILE (solo botón hamburguesa + Order Here compacto si quieres) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <div className="relative h-4 w-4">
                <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-black" />
                <span className="absolute left-0 top/1 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-black" />
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
            A space where art and gastronomy come together to create more than
            just food: an experience to enjoy, share, and remember.
          </p>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-black/10 bg-white/95 backdrop-blur">
          <div className="container-inner flex flex-col gap-2 py-4 text-sm font-medium text-black">
            {/* Order Here dentro del menú mobile */}
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
              Order Here
              <span className="text-base">↗</span>
            </a>

            <button
              onClick={() => scrollToSection("menu")}
              className="text-left rounded-xl px-3 py-2 hover:bg-black/[0.03]"
            >
              Menú
            </button>

            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left rounded-xl px-3 py-2 hover:bg-black/[0.03]"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
