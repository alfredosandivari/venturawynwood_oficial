'use client';
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">

      <div className="container-inner py-4 flex items-center justify-between">
        {/* Logo VA */}
        <div className="flex items-center gap-3">
          <Image src="/images/logo_va.png" alt="VA" width={100} height={100} priority />
        </div>

        {/* Icons: menu, pin, chat */}
        <nav className="flex items-center gap-5">
          <button aria-label="Menú">
            <Image src="/icons/menu.svg" alt="Menú" width={40} height={40} />
          </button>
          <button
            aria-label="Ubicación"
            onClick={() => {
              const section = document.getElementById('contacto');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Image src="/icons/pin.svg" alt="Ubicación" width={40} height={40} />
          </button>
          <button aria-label="Contacto">
            <Image src="/icons/chat.svg" alt="Contacto" width={40} height={40} />
          </button>
        </nav>
      </div>
      <div className="border-b border-black/10">
        <div className="container-inner py-2 text-center md:text-center font-bold">
          <p className="tagline">
          A space where art and gastronomy come together to create more than just food: an experience to enjoy, share, and remember.
          </p>
        </div>
      </div>
    </header>
  );
}
