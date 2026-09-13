export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Troque esta foto de fundo por uma sua: substitua o arquivo public/images/hero-fundo.png */}
      <img
        src="/images/hero-fundo.png"
        alt="Grupo diverso de migrantes, refugiados e voluntários sorrindo e se abraçando em um centro comunitário"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay em gradiente para dar contraste e legibilidade ao texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-yellow-400/95 text-emerald-900 text-sm font-bold shadow-sm">
            ONG &amp; Produtora Cultural
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight text-balance drop-shadow-sm">
            Conectamos culturas, transformamos encontros.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-emerald-50/90 max-w-xl leading-relaxed">
            Acolhemos migrantes, refugiados e a comunidade com assistência social e o poder transformador da arte. Aqui,
            cada história encontra um novo caminho.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full bg-yellow-400 text-emerald-900 font-extrabold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
            >
              Conheça os Projetos
            </a>
            <a
              href="#cadastro"
              className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/10 text-white font-extrabold text-lg border-2 border-white/70 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              Preciso de Ajuda
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
