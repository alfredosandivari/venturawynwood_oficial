'use client';

import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/17863006051" // 🔹 Cambia por el número del restaurant si quieres otro
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat en WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366] text-white
        shadow-lg shadow-black/30
        hover:scale-110 hover:shadow-xl hover:shadow-black/40
        transition-all duration-300
      "
    >
      <Image
        src="/icons/whatsapp-light.png" // 🔹 Coloca aquí tu ícono blanco sin fondo
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </a>
  );
}