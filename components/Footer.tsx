import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2F3B35] text-white">
      <div className="container-inner py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/circle-logo.png"
            alt="Ventura Wynwood"
            width={140}
            height={140}
            className="opacity-95"
          />
        </div>

        {/* Redes */}
        <div className="flex items-center justify-center gap-10">
          <a
            href="https://www.instagram.com/venturawynwood/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="opacity-90 hover:opacity-100 transition"
          >
            <Image src="/icons/instagram-light.png" alt="" width={56} height={56} />
          </a>
          <a
            href="https://facebook.com/venturawynwood"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="opacity-90 hover:opacity-100 transition"
          >
            <Image src="/icons/facebook-light.png" alt="" width={56} height={56} />
          </a>
        </div>

        {/* Datos */}
        <address className="not-italic text-center md:text-right text-lg leading-7 opacity-95">
          33 NW 28th St, Miami, FL 33127<br />
          <a href="mailto:hello@venturawynwood.com" className="hover:underline">
            hello@venturawynwood.com
          </a>
          <br />
          <a href="tel:+17863006051" className="hover:underline">
            +1 (786) 300-6051
          </a>
        </address>
      </div>
    </footer>
  );
}
