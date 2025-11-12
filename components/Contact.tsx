'use client';

import { FormEvent } from "react";

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <section
      id="contacto"
      className="
        relative w-full text-white overflow-hidden
        bg-[url('/images/contact-bg.png')] bg-cover bg-center
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

      {/* Contenido en dos columnas iguales */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[520px]">
        {/* IZQUIERDA: formulario */}
        <div className="flex flex-col justify-center py-16 px-6 md:px-12">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow">Contact us!</h3>

          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              name="name"
              placeholder="NAME"
              required
              className="h-12 rounded-full bg-white/95 text-gray-800 placeholder-gray-400 px-5 shadow outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              required
              className="h-12 rounded-full bg-white/95 text-gray-800 placeholder-gray-400 px-5 shadow outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="NUMBER"
              className="h-12 rounded-full bg-white/95 text-gray-800 placeholder-gray-400 px-5 shadow outline-none"
            />
            <button
              type="submit"
              className="mt-4 inline-block rounded-full bg-white text-gray-900 font-extrabold text-3xl tracking-wide px-12 py-2 hover:opacity-95 transition"
            >
              SEND
            </button>
          </form>
        </div>

        {/* DERECHA: mapa pegado a todos los bordes + filtros elegantes */}
        <div className="relative w-full h-full">
          <iframe
            title="Ubicación Ventura Wynwood"
            src="https://maps.google.com/maps?hl=en&q=33%20NW%2028th%20St,%20Miami,%20FL%2033127&ie=UTF8&t=&z=16&iwloc=B&output=embed"
            className="
              absolute inset-0 w-full h-full block
              grayscale contrast-110 brightness-95
            "
            style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.95)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
