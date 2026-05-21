export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-orange-900 opacity-80" />
        <div className="relative z-10">
          <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Kaospilot · Avgångsår 2025
          </p>
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-6">
            TRANSLO<span className="text-orange-400">CATION</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto mb-10">
            En kväll för de som vågade navigera kaoset. Nu firar vi övergången.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/biljetter" className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-10 py-4 text-lg uppercase tracking-widest transition-all">
              Köp Biljett
            </a>
            <a href="/info" className="border border-white hover:border-orange-400 hover:text-orange-400 text-white font-bold px-10 py-4 text-lg uppercase tracking-widest transition-all">
              Info
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce text-gray-500 text-sm tracking-widest">↓ SCROLL</div>
      </section>

      <section className="grid md:grid-cols-3 border-t border-white/10">
        {[
          { label: "DATUM", value: "14 Juni 2025" },
          { label: "PLATS", value: "Aarhus, Danmark" },
          { label: "DRESS CODE", value: "Bold & Beautiful" },
        ].map((item) => (
          <div key={item.label} className="border-r border-white/10 p-12 text-center last:border-r-0">
            <p className="text-orange-400 text-xs uppercase tracking-[0.3em] mb-2">{item.label}</p>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/10 p-8 text-center text-gray-600 text-sm">
        © 2025 Kaospilot Translocation Party · Made with chaos & love
      </footer>
    </main>
  )
}
