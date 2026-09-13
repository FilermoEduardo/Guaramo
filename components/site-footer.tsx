function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.2-8.3a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z" />
    </svg>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-emerald-800 text-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-emerald-900 text-xl font-black">
              G
            </span>
            <span className="text-xl font-extrabold">Guaramo Arte do Mundo</span>
          </div>
          <p className="text-emerald-100/80 leading-relaxed">
            Conectamos culturas, transformamos encontros. Assistência social e arte para acolher quem chega.
          </p>
        </div>
        <div>
          <h3 className="font-extrabold text-yellow-400 mb-3">Contato</h3>
          <ul className="space-y-2 text-emerald-100/90">
            <li>Brasília — DF, Brasil</li>
            <li>
              <a href="mailto:contato@guaramoarte.org" className="hover:text-yellow-400 transition-colors">
                contato@guaramoarte.org
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold text-yellow-400 mb-3">Redes</h3>
          <a
            href="https://instagram.com/guaramoarte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-4 rounded-full bg-emerald-700 hover:bg-emerald-600 transition-colors font-semibold"
          >
            <InstagramIcon className="w-5 h-5" />
            @guaramoarte
          </a>
        </div>
      </div>
      <div className="border-t border-emerald-700">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-emerald-100/70 text-sm">
          © {year} Guaramo Arte do Mundo. Feito com carinho e cultura.
        </p>
      </div>
    </footer>
  )
}
