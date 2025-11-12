export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Contenedor del video */}
      <div className="relative w-full h-[150px] md:h-[600px] overflow-hidden">
      <video
        className="w-full h-full object-cover object-center"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"   // opcional (un frame del video)
        disablePictureInPicture
      />

      </div>

      {/* Overlay circular (si lo mantienes) 
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/circle_logo.svg"
          alt="Ventura Wynwood Circular"
          className="w-[160px] md:w-[200px] opacity-90"
        />
      </div>
      */}
    </section>
  );
}
