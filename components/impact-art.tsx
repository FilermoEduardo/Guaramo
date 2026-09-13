'use client'

import { useEffect, useRef, useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'

const stats = [
  { target: 1200, label: 'Pessoas Atendidas', color: 'text-emerald-700' },
  { target: 85, label: 'Ações Culturais', color: 'text-amber-800' },
  { target: 340, label: 'Voluntários', color: 'text-yellow-500' },
]

function Counter({ target, color, label }: { target: number; color: string; label: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1500
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.floor(eased * target))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="bg-white rounded-2xl p-8 text-center border border-emerald-100 shadow-sm">
      <div className={`text-4xl md:text-5xl font-black ${color}`}>{value.toLocaleString('pt-BR')}+</div>
      <p className="mt-2 font-bold text-stone-600">{label}</p>
    </div>
  )
}

export function ImpactArt() {
  return (
    <section id="projetos" className="py-16 md:py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-800">Impacto &amp; Arte</h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            A arte é a nossa ponte entre culturas. Conheça um dos projetos que fazem essa magia acontecer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 border border-emerald-100 shadow-sm">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-yellow-400 text-emerald-900 text-sm font-extrabold">
              Projeto em destaque
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-amber-800 mb-4">Saboroso Caribe</h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              Gastronomia caribenha que celebra sabores e memórias, valorizando as PANCs (Plantas Alimentícias Não
              Convencionais) e a cozinha afetiva.
            </p>
            <p className="text-stone-700 font-semibold">
              Sob o comando da <span className="text-emerald-700">Chef Damelis Castillo</span>, cada prato é um encontro
              entre o Caribe e o Brasil.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[220px] shadow-md">
            {/* Troque esta foto por uma sua: substitua o arquivo public/images/saboroso-caribe.png */}
            <img
              src="/images/saboroso-caribe.png"
              alt="Prato da culinária caribenha do projeto Saboroso Caribe"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative bg-gradient-to-t from-black/60 to-transparent flex items-end min-h-[220px] p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-6 h-6 text-amber-800" aria-hidden="true" />
                </div>
                <p className="text-white font-extrabold text-lg">Sabores que unem povos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
