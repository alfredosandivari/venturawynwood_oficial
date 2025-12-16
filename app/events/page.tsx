"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function EventsPage() {
  const { lang } = useLanguage();

  const t = {
    title: lang === "es" ? "Eventos privados en Ventura Wynwood" : "Private Events at Ventura Wynwood",
    desc:
      lang === "es"
        ? "Ya sea un evento corporativo, un cumpleaños, una celebración privada o una ocasión especial, Ventura Wynwood ofrece un espacio único en el corazón de Wynwood con gastronomía, coctelería y una atmósfera cuidadosamente diseñada."
        : "Whether it’s a corporate event, birthday celebration, private gathering, or any special occasion, Ventura Wynwood offers a unique space in the heart of Wynwood with curated food, cocktails, and atmosphere.",
    inquiries:
      lang === "es" ? "Para consultas y disponibilidad:" : "For inquiries and availability:",
    firstName: lang === "es" ? "Nombre" : "First name",
    lastName: lang === "es" ? "Apellido" : "Last name",
    location: lang === "es" ? "Ubicación" : "Location",
    submit: lang === "es" ? "Enviar solicitud" : "Submit request",
    disclaimer:
      lang === "es"
        ? "Al enviar este formulario, aceptas ser contactado para coordinar tu evento."
        : "By submitting this form, you agree to be contacted to coordinate your event.",
  };

  return (
    <>
      <Header />

      <main className="bg-[#F4EBDC]">

        {/* BOTÓN BACK STICKY */}
        <a
          href="/"
          className="
            fixed top-6 left-6 z-50
            inline-flex items-center gap-2
            rounded-full px-4 py-2
            text-sm font-semibold
            backdrop-blur
            transition hover:opacity-90
          "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            color: "#2A4539",
            border: "1px solid rgba(42, 69, 57, 0.2)",
          }}
        >
          <span className="text-lg leading-none">←</span>
          <span>{lang === "es" ? "Volver" : "Back"}</span>
        </a>


        {/* 1️⃣ HERO IMAGE FULL WIDTH */}
        <section className="relative w-full h-[55vh] md:h-[70vh]">
          <Image
            src="/images/events.png" // imagen landscape
            alt="Private events at Ventura Wynwood"
            fill
            priority
            className="object-cover"
          />
        </section>

        {/* 2️⃣ TEXTO + FORMULARIO */}
        <section className="container-inner py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2A4539]">
              {t.title}
            </h1>

            <p className="text-lg leading-relaxed mb-6 text-[#2A4539]">
              {t.desc}
            </p>

            <p className="font-semibold text-[#2A4539] mb-1">
              {t.inquiries}
            </p>

            <p className="text-[#2A4539] text-lg">
              +1 (786) 300-6051
            </p>

            <a
              href="mailto:hello@venturawynwood.com"
              className="text-[#2A4539] font-bold underline text-lg"
            >
              hello@venturawynwood.com
            </a>
          </div>

          {/* Formulario */}
          <form
            className="rounded-2xl border border-[#2A4539]/15 bg-white/50 p-8 shadow-sm grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll contact you shortly.");
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-[#2A4539]">
                {t.firstName}
              </label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-[#2A4539]/20 px-4 py-3 text-[#2A4539]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2A4539]">
                {t.lastName}
              </label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-[#2A4539]/20 px-4 py-3 text-[#2A4539]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2A4539]">
                {t.location}
              </label>
              <input
                required
                className="mt-1 w-full rounded-lg border border-[#2A4539]/20 px-4 py-3 text-[#2A4539]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-full px-6 py-3 font-semibold text-sm transition hover:opacity-90"
              style={{
                backgroundColor: "rgba(42, 69, 57, 0.9)",
                color: "#F4EBDC",
                border: "1px solid rgba(244, 235, 220, 0.35)",
              }}
            >
              {t.submit}
            </button>

            <p className="text-xs text-[#2A4539]/70">
              {t.disclaimer}
            </p>
          </form>
        </section>

        {/* 3️⃣ MAPA FULL WIDTH */}
        <section className="w-full h-[420px]">
          <iframe
            src="https://www.google.com/maps?q=33%20NW%2028th%20St,%20Miami,%20FL%2033127&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ventura Wynwood Location"
          />
        </section>

      </main>

      <Footer />
    </>
  );
}
