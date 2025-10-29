"use client";
// Ventura Wynwood — Landing v1 (Client Component)

import React, { useEffect, useState } from "react";

// === CONFIG ===
const BRAND = {
  name: "Ventura Wynwood",
  taglineEs: "Cocina latina creativa en el corazón de Wynwood",
  taglineEn: "Creative Latin kitchen in the heart of Wynwood",
  ctaPrimaryEs: "Reserva tu mesa",
  ctaPrimaryEn: "Book a table",
  ctaSecondaryEs: "Síguenos en Instagram",
  ctaSecondaryEn: "Follow on Instagram",
  instagram: "https://www.instagram.com/venturawynwood/",
  phone: "+1 786 300 6051",
  address: "33 NW 28th St, Miami, FL 33127",
  googleMapsEmbed: "https://www.google.com/maps?q=33+NW+28th+St,+Miami,+FL+33127&output=embed",
  emailCapture: true,
  openingTarget: "2025-12-15T18:00:00-05:00",
  colors: {
    primary: "#2A4539", // Ventura Green
    accent: "#F4EBDC",  // Warm beige
    dark: "#0E1512",
    light: "#F4EBDC",
  },
};

export default function VenturaWynwoodLanding(){
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (!BRAND.openingTarget) return;
    const target = new Date(BRAND.openingTarget).getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000*60*60*24));
      const hours = Math.floor((diff / (1000*60*60)) % 24);
      const minutes = Math.floor((diff / (1000*60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: `radial-gradient(80% 60% at 50% -10%, ${BRAND.colors.primary}40, transparent),
                     linear-gradient(180deg, ${BRAND.colors.dark}, ${BRAND.colors.dark})`,
      }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Ventura Wynwood" className="h-9 w-9 rounded-xl object-contain bg-white/5 ring-1 ring-white/10" />
            <span className="text-lg font-semibold tracking-wide">{BRAND.name}</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#menu" className="hover:opacity-80">Menú</a>
            <a href="#about" className="hover:opacity-80">Nosotros</a>
            <a href="#gallery" className="hover:opacity-80">Galería</a>
            <a href="#location" className="hover:opacity-80">Ubicación</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#reservations" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:shadow-lg">
              {BRAND.ctaPrimaryEs}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden>
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full"
            style={{ background: `radial-gradient(circle at 30% 30%, ${BRAND.colors.primary}, transparent 60%)`, filter: "blur(40px)" }} />
          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full"
            style={{ background: `radial-gradient(circle at 70% 70%, ${BRAND.colors.accent}, transparent 60%)`, filter: "blur(40px)" }} />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
          <div className="flex items-center justify-start sm:justify-center py-1">
            <img
                src="/logo.png"
                alt={BRAND.name}
                className="max-h-[50px] w-auto object-contain opacity-90"
                style={{ height: "200px", maxHeight: "200px" }}
            />
            </div>



            <p className="mt-4 max-w-xl text-lg text-white/80">{BRAND.taglineEs}</p>
            <p className="mt-1 max-w-xl text-sm text-white/60">{BRAND.taglineEn}</p>
            {countdown && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND.colors.accent }} />
                <span>Apertura en {countdown}</span>
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#reservations" className="rounded-xl px-5 py-3 text-sm font-semibold shadow hover:shadow-lg" style={{ backgroundColor: "#fff", color: "#000" }}>
                {BRAND.ctaPrimaryEs}
              </a>
              <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="rounded-xl border border-white/20 bg-white/0 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                {BRAND.ctaSecondaryEs}
              </a>
            </div>

            {BRAND.emailCapture && (
              <form
                className="mt-8 flex max-w-lg items-center gap-2"
                onSubmit={(e) => { e.preventDefault(); alert("¡Gracias! Te avisaremos del soft opening."); }}
              >
                <input type="email" required placeholder="Tu email para el soft opening" className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/50 outline-none backdrop-blur" />
                <button type="submit" className="whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold shadow hover:shadow-lg" style={{ backgroundColor: BRAND.colors.primary, color: "#fff" }}>
                  Avisarme
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-white/50">
              Tel: {BRAND.phone} · {BRAND.address} · <a href="mailto:hello@venturawynwood.com" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">hello@venturawynwood.com</a>
            </p>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
              <img src="/hero-plate.png" alt="Firma Ventura" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
              <img src="/hero-cocktail.png" alt="Coctelería" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
              <img src="/hero-interior.png" alt="Interior Wynwood" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section id="menu" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold">Menú destacado</h2>
            <p className="mt-2 max-w-2xl text-white/70">Sabores latinos con técnica contemporánea. Cambiamos por temporada.</p>
          </div>
          <a href="#reservations" className="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">
            Ver menú completo
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: "Taco de short rib", desc: "Maíz azul, demi glace de ají panca, pico verde.", price: 14 },
            { name: "Ceviche Wynwood", desc: "Corvina, leche de tigre maracuyá, cancha y choclo.", price: 19 },
            { name: "Arroz Ventura", desc: "Langostinos, sofrito de ají amarillo, toques cítricos.", price: 26 },
          ].map((item) => (
            <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow">
              <header className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">${item.price}</span>
              </header>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Nuestra propuesta</h2>
            <p className="mt-4 text-white/80">Inspirados por el arte de Wynwood, creamos platos vibrantes con raíces latinas y un giro contemporáneo. Cocktails de autor, música y una energía única.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• Cocina de temporada con proveedores locales</li>
              <li>• Coctelería de autor y vinos naturales</li>
              <li>• DJ sets y pop-ups de chefs invitados</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Private events / Eventos privados</h3>
            <p className="mt-2 text-white/70">¿Soft opening, cumpleaños, lanzamiento de marca? Escríbenos para propuestas a medida.</p>
            <form className="mt-4 grid gap-3" onSubmit={(e) => { e.preventDefault(); alert("Gracias, te contactaremos pronto."); }}>
              <input className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/50" placeholder="Nombre" />
              <input className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/50" placeholder="Email" type="email" />
              <textarea className="min-h-[100px] rounded-XL border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder-white/50" placeholder="Cuéntanos tu idea" />
              <button className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* GALLERY / SOCIAL PROOF */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold">De nuestro feed</h2>
          <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white">
            {BRAND.ctaSecondaryEs}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={`/gallery/${i}.jpg`} className="h-full w-full object-cover" alt={`Ventura ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Dónde estamos</h2>
            <p className="mt-2 text-white/80">{BRAND.address}. Estacionamiento cercano. Pet-friendly.</p>
            <div className="mt-6 grid gap-2 text-sm text-white/70">
              <span>Tel: {BRAND.phone}</span>
              <span>Horarios: Próximamente</span>
              <span>Dress code: Casual chic</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <iframe src={BRAND.googleMapsEmbed} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[320px] w-full" title="Ubicación Ventura Wynwood" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-5 pb-24">
        <h2 className="text-3xl font-extrabold">Preguntas frecuentes</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { q: "¿Aceptan walk-ins?", a: "Sí, según disponibilidad. Recomendamos reservar fines de semana." },
            { q: "¿Opciones vegetarianas/veganas?", a: "Sí, contamos con platos dedicados y podemos adaptar varios más." },
            { q: "¿Eventos privados?", a: "Tenemos menús para grupos y coctelería a medida. Escríbenos." },
            { q: "¿Estacionamiento?", a: "Hay parkings cercanos y valet en horarios punta (próximamente)." },
          ].map(({ q, a }) => (
            <details key={q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer text-base font-semibold">{q}</summary>
              <p className="mt-2 text-white/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:grid-cols-3">
          <div>
            <h4 className="font-semibold">{BRAND.name}</h4>
            <p className="mt-2 text-sm text-white/70">{BRAND.taglineEs}</p>
          </div>
          <div className="text-sm text-white/70">
            <p>Contacto</p>
            <p className="mt-2">{BRAND.phone}</p>
            <p><a href="mailto:hello@venturawynwood.com" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">hello@venturawynwood.com</a></p>
          </div>
          <div className="text-sm text-white/70">
            <p>Síguenos</p>
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="mt-2 block underline decoration-white/30 underline-offset-4 hover:decoration-white">Instagram</a>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
      </footer>

      {/* SEO Meta (script can live here; in production move to head) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: BRAND.name,
            address: BRAND.address,
            telephone: "+17863006051",
            url: "https://venturawynwood.com",
            servesCuisine: ["Latin", "Contemporary", "Seafood"],
            areaServed: "Miami",
          }),
        }}
      />
    </main>
  );
}
