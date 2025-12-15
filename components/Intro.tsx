'use client';

import { useLanguage } from "@/components/LanguageProvider";

export default function Intro() {
  const { lang, toggleLang } = useLanguage();

  const labels = {
    titulo: lang === "es" ? "abrirá muy pronto" : "is opening very soon",
    parrafo1: lang === "es" ? "Un lugar diseñado para quienes aprecian la gastronomía, el diseño y las experiencias que van más allá del plato." : "A place designed for those who appreciate gastronomy, design, and experiences that go beyond the plate.",
    parrafo2: lang === "es" ? "Una experiencia que se siente, se comparte y conecta." : "An experience you feel, share, and connect with.",
    parrafo3: lang === "es" ? "Sé parte de los primeros en descubrirlo. " : "Be one of the first to discover it.",
    joinOur: lang === "es" ? "Únete a" : "Join our",
    vipList: lang === "es" ? "nuestra Lista VIP" : "VIP List",
    parrafoFinal: lang === "es" ? "para recibir acceso anticipado, adelantos exclusivos y una invitación a nuestra gran inauguración" : "to receive early access, special previews, and an invitation to our grand opening",
    boton: lang === "es" ? "Únete a nuestra lista VIP" : "Join To Our VIP List"
  }
  return (
    <section className="container-inner py-16 text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          <span className="text-black font-bold">Ventura Wynwood</span> {labels.titulo}
        </h2>
        <p className="mt-3 text-lg text-gray-700">
        {labels.parrafo1}
        </p>
      </div>

      <div>
        <p className="text-xl italic text-gray-800">
        “{labels.parrafo2}”
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          {labels.parrafo3} 
          {labels.joinOur}  <span className="font-semibold text-black">{labels.vipList}</span> <span> {labels.parrafoFinal} </span>
        </p>
      </div>

      <div className="pt-6">
        <a
          href="#vip"
          className="inline-block rounded-full bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition"
        >
          {labels.boton}
        </a>
      </div>
    </section>
  );
}
