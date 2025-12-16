"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EventsPage() {
  const { lang } = useLanguage();

  const t = {
    back: lang === "es" ? "Volver a la página principal" : "Back to main page",
    title: lang === "es" ? "Eventos privados en Ventura Wynwood" : "Private Events at Ventura Wynwood",
    desc:
      lang === "es"
        ? "Ya sea un almuerzo corporativo, cumpleaños, celebración privada o cualquier ocasión especial, Ventura Wynwood ofrece un espacio único en el corazón de Wynwood con gastronomía y coctelería curada."
        : "Whether it's a corporate lunch, birthday celebration, private gathering, or any special occasion, Ventura Wynwood offers a unique space in the heart of Wynwood with curated food and cocktails.",
    inquiry: lang === "es" ? "Consultas y disponibilidad" : "Inquiries and availability",
    phone: "+1 (786) 300-6051",
    email: "hello@venturawynwood.com",

    // Form
    formTitle: lang === "es" ? "Cuéntanos sobre tu evento" : "Tell us about your event",
    firstName: lang === "es" ? "Nombre" : "First name",
    lastName: lang === "es" ? "Apellido" : "Last name",
    location: lang === "es" ? "Ubicación" : "Location",
    firstNamePh: lang === "es" ? "Tu nombre" : "Your first name",
    lastNamePh: lang === "es" ? "Tu apellido" : "Your last name",
    locationPh: lang === "es" ? "Ciudad / Estado" : "City / State",
    submit: lang === "es" ? "Enviar" : "Submit",
    thanks:
      lang === "es"
        ? "¡Gracias! Te contactaremos pronto."
        : "Thanks! We'll get back to you shortly.",
    disclaimer:
      lang === "es"
        ? "Al enviar, aceptas que te contactemos en relación a tu solicitud de evento."
        : "By submitting, you agree to be contacted regarding your event inquiry.",
  };

  return (
    <>
      <Header />

      <main className="bg-[#F4EBDC] min-h-screen">
        {/* Back */}
        <div className="container-inner pt-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2A4539] hover:opacity-80"
          >
            <span className="text-lg">←</span>
            <span>{t.back}</span>
          </a>
        </div>

        {/* Content */}
        <section className="container-inner py-10 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Image (landscape friendly) */}
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/events.png" // 👈 reemplaza por tu foto real
              alt="Private events at Ventura Wynwood"
              fill
              className="object-cover"
              priority
            />
            
          </div>

          {/* FORM */}
          <form
              className="mt-8 grid gap-3 rounded-xl border border-[#2A4539]/15 bg-white/40 p-5 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert(t.thanks);
              }}
            >
              <h2 className="text-base font-bold text-[#2A4539]">
                {t.formTitle}
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#2A4539]">
                    {t.firstName}
                  </label>
                  <input
                    required
                    name="firstName"
                    placeholder={t.firstNamePh}
                    className="mt-1 w-full rounded-lg border border-[#2A4539]/20 bg-white px-4 py-3 text-sm text-[#2A4539] outline-none focus:border-[#2A4539]/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A4539]">
                    {t.lastName}
                  </label>
                  <input
                    required
                    name="lastName"
                    placeholder={t.lastNamePh}
                    className="mt-1 w-full rounded-lg border border-[#2A4539]/20 bg-white px-4 py-3 text-sm text-[#2A4539] outline-none focus:border-[#2A4539]/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2A4539]">
                  {t.location}
                </label>
                <input
                  required
                  name="location"
                  placeholder={t.locationPh}
                  className="mt-1 w-full rounded-lg border border-[#2A4539]/20 bg-white px-4 py-3 text-sm text-[#2A4539] outline-none focus:border-[#2A4539]/60"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition hover:opacity-90"
                style={{
                  backgroundColor: "rgba(42, 69, 57, 0.9)",
                  color: "#F4EBDC",
                  border: "1px solid rgba(244, 235, 220, 0.35)",
                }}
              >
                {t.submit}
              </button>

              <p className="text-[11px] text-[#2A4539]/70">{t.disclaimer}</p>
            </form>

          {/* Text + Form */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2A4539]">
              {t.title}
            </h1>

            <p className="text-lg leading-relaxed mb-6 text-[#2A4539]">
              {t.desc}
            </p>

            <p className="font-semibold mb-2 text-[#2A4539]">{t.inquiry}:</p>

            <p className="text-lg mb-1 text-[#2A4539]">{t.phone}</p>

            <a
              href={`mailto:${t.email}`}
              className="text-lg font-bold underline text-[#2A4539]"
            >
              {t.email}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
