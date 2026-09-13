const photos = [
  {
    src: '/images/galeria-aula.png',
    alt: 'Aula de português para migrantes adultos em sala acolhedora',
    caption: 'Aulas de Português',
  },
  {
    src: '/images/galeria-arte.png',
    alt: 'Oficina de arte cultural com pessoas pintando e criando juntas',
    caption: 'Oficinas de Arte',
  },
  {
    src: '/images/galeria-voluntarios.png',
    alt: 'Voluntários distribuindo cestas de alimentos para famílias',
    caption: 'Ação dos Voluntários',
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-800">Nossa Galeria</h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            Momentos que contam a nossa história. Cada foto é um encontro, um recomeço, uma conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <figure
              key={photo.caption}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 aspect-[4/3]"
            >
              {/* Troque esta foto por uma sua: substitua o arquivo correspondente em public/images/ */}
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-extrabold text-lg">{photo.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
