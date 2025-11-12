'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Asegura mute desde el inicio (Safari exige muted en el primer paint)
    v.muted = true;
    v.playsInline = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // Safari/Chrome mobile: reintenta forzando mute
          v.muted = true;
          v.play().catch(() => {/* ignorar */});
        });
      }
    };

    // Intenta reproducir apenas tenga metadata
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('loadeddata', tryPlay, { once: true });

    return () => v.removeEventListener('loadeddata', tryPlay);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[600px] overflow-hidden">
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover object-center"
          // atributos críticos para autoplay en móvil
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          // poster opcional para evitar pantalla negra mientras carga
          poster="/images/hero-poster.jpg"
          // evitar PiP y ciertos controles (opcional)
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* si algún día generas webm:
          <source src="/videos/hero.webm" type="video/webm" /> */}
        </video>
      </div>
    </section>
  );
}
