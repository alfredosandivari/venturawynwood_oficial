'use client';

import Image from "next/image";
import { FormEvent } from "react";

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // TODO: fetch a tu API / enviar email / WhatsApp
    // await fetch('/api/contact', { method: 'POST', body: fd });
  };

  return (
    <section id="contacto" className="relative w-full">
      {/* fondo con blur */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <Image
          src="/images/contact-bg.png"
          alt="Background contact"
          fill
          className="object-cover blur-sm scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* contenido */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-full max-w-2xl mx-auto px-6 text-center" onSubmit={onSubmit}>
          <h3 className="text-white text-4xl md:text-5xl font-extrabold mb-6 drop-shadow">
            Contact us!
          </h3>

          <div className="grid gap-4">
            <input name="name" placeholder="NAME" className="h-12 rounded-full bg-white text-gray-800 px-5 outline-none" required />
            <input type="email" name="email" placeholder="EMAIL" className="h-12 rounded-full bg-white text-gray-800 px-5 outline-none" required />
            <input type="tel" name="phone" placeholder="NUMBER" className="h-12 rounded-full bg-white text-gray-800 px-5 outline-none" />
          </div>

          <button type="submit" className="mt-6 inline-block rounded-full bg-white text-gray-900 font-extrabold text-3xl tracking-wide px-12 py-2 hover:opacity-95 transition">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
