import Image from "next/image";

const images = [
  "/images/gallery2-1.png",
  "/images/gallery2-2.png",
  "/images/gallery2-3.png",
  "/images/gallery2-4.png",
  "/images/gallery2-5.png",
  "/images/gallery2-6.png",
  "/images/gallery2-7.png",
  "/images/gallery2-8.png",
];

export default function GalleryTwo() {
  return (
    <section className="container-inner py-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-neutral-800 mb-10">
        Inspiración y sabores que nos definen
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((src, i) => (
          <a
            key={i}
            href="https://www.instagram.com/venturawynwood/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Ventura Wynwood gallery ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
