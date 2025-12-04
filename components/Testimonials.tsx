type Testimonial = {
    quote: string;
    name: string;
    rating?: number; // por si luego quieres 4–5
  };
  
  const data: Testimonial[] = [
    {
      quote:
        "A fresh and different concept. Wynwood needed a place like this: modern, thoughtful, and with flavors that truly surprise you.",
      name: "Laura Martínez",
      rating: 5,
    },
    {
      quote:
        "The combination of atmosphere and gastronomy is perfect. It feels like a space designed with intention in every detail.",
      name: "Daniel Herrera",
      rating: 5,
    },
    {
      quote:
        "Probé el preview del menú y quedé impresionada. Platos creativos, delicados y con mucho carácter. Definitivamente volveré.",
      name: "Sofía Benítez",
      rating: 5,
    },
  ];
  
  function Stars({ count = 5, size = 22, className = "" }) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {Array.from({ length: count }).map((_, i) => (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-amber-400"
            aria-hidden="true"
          >
            <path d="M12 17.3l-6.16 3.64 1.64-6.99L2 8.98l7.04-.6L12 1.8l2.96 6.58L22 8.98l-5.48 5.0 1.64 6.99z" />
          </svg>
        ))}
      </div>
    );
  }
  
  export default function Testimonials() {
    return (
      <section className="container-inner py-16 md:py-20">
        {/* Título multilinea */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[28px] md:text-[34px] leading-tight text-neutral-800">

            Wynwood is about to welcome something new…
            <br />
            <span className="block">a culinary experience that inspires and connects.</span>
            <span className="block">Be among the first to discover Ventura Wynwood,</span>
            <span className="block">a place where food becomes memory and every dish speaks for itself.</span>
          </p>
  
          {/* Fila de estrellas grande */}
          <Stars count={5} size={30} className="justify-center mt-6" />
        </div>
  
        {/* Tarjetas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((t, idx) => (
            <article
              key={idx}
              className="
                relative rounded-3xl border border-black/10 bg-white px-8 py-10 text-center
                shadow-[0_25px_40px_-20px_rgba(0,0,0,0.2)]
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                after:-bottom-3 after:w-0 after:h-0
                after:border-l-[14px] after:border-r-[14px] after:border-t-[14px]
                after:border-l-transparent after:border-r-transparent after:border-t-white
              "
            >
              {/* Línea decorativa superior */}
              <div className="mx-auto h-[4px] w-16 rounded-full bg-orange-300/90 mb-6" />
  
              {/* Texto */}
              <p className="text-neutral-500 italic tracking-wide leading-7">
                {t.quote}
              </p>
  
              {/* Nombre */}
              <p className="mt-6 text-[22px] font-medium text-orange-400"> {t.name} </p>
  
              {/* Estrellas pequeñas + línea inferior */}
              <div className="mt-3 flex flex-col items-center gap-4">
                <Stars count={t.rating ?? 5} size={18} />
                <div className="h-[4px] w-16 rounded-full bg-orange-300/90" />
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
  