export default function Intro() {
  return (
    <section className="container-inner py-16 text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Muy pronto abre <span className="text-black font-bold">Ventura Wynwood</span>
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          Un espacio creado para quienes buscan algo más que comer:
        </p>
      </div>

      <div>
        <p className="text-xl italic text-gray-800">
          “Una energía que se siente, se comparte y se vive.”
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          Sé parte de los primeros en descubrirlo.  
          Únete a nuestra <span className="font-semibold text-black">lista VIP</span> y obtén acceso anticipado, degustaciones privadas  
          y la invitación oficial a nuestra <span className="font-semibold">noche inaugural</span>.
        </p>
      </div>

      <div className="pt-6">
        <a
          href="#vip"
          className="inline-block rounded-full bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition"
        >
          Unirme a la lista VIP
        </a>
      </div>
    </section>
  );
}
