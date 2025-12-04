export default function Intro() {
  return (
    <section className="container-inner py-16 text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          <span className="text-black font-bold">Ventura Wynwood</span> is opening very soon
        </h2>
        <p className="mt-3 text-lg text-gray-700">
        A place designed for those who appreciate gastronomy, design, and experiences that go beyond the plate.
        </p>
      </div>

      <div>
        <p className="text-xl italic text-gray-800">
        “An experience you feel, share, and connect with.”
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          Sé parte de los primeros en descubrirlo.  
          Join our  <span className="font-semibold text-black">VIP list</span> to receive early access, special previews, and an invitation to <span className="font-semibold">our grand opening.</span>
        </p>
      </div>

      <div className="pt-6">
        <a
          href="#vip"
          className="inline-block rounded-full bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition"
        >
          Join to our VIP list
        </a>
      </div>
    </section>
  );
}
