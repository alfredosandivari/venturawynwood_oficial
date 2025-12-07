import Image from "next/image";

const images = [
  "/images/gallery2-1.jpg",
  "/images/gallery2-2.jpg",
  "/images/gallery2-3.jpg",
  "/images/gallery2-4.jpg",
  "/images/gallery2-5.jpg",
  "/images/gallery2-6.jpg",
  "/images/gallery2-7.jpg",
  "/images/gallery2-8.jpg",
];

export default function GalleryTwo() {
  return (
    <section className="container-inner py-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-neutral-800 mb-10">
        Inspiration and flavors that define us.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((src, i) => (
          <a
            key={i}
            href="https://www.instagram.com/venturawynwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Imagen base */}
            <Image
              src={src}
              alt={`Ventura Wynwood gallery ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />

            {/* Overlay con logo Instagram */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Image
                src="/icons/instagram-light.png"
                alt="Instagram Ventura Wynwood"
                width={60}
                height={60}
                className="opacity-90"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
