import Image from "next/image";

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="relative aspect-[4/3] md:aspect-[4/5]">
          <Image src="/images/gallery1.png" alt="Plato 1" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] md:aspect-[4/5]">
          <Image src="/images/gallery2.png" alt="Plato 2" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] md:aspect-[4/5]">
          <Image src="/images/gallery3.png" alt="Plato 3" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
