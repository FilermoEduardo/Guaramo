'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#como-ajudamos', label: 'Como Ajudamos' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#cadastro', label: 'Cadastro' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-700 text-yellow-400 text-xl font-black">
            G
          </span>
          <span className="text-lg md:text-xl font-extrabold text-emerald-800 leading-tight">
            Guaramo <span className="text-amber-800">Arte</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-stone-700">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-emerald-700 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cadastro"
          className="hidden md:inline-flex items-center h-12 px-5 rounded-full bg-yellow-400 text-emerald-900 font-extrabold hover:bg-yellow-300 transition-colors shadow-sm"
        >
          Seja Voluntário
        </a>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-lg text-emerald-800 hover:bg-stone-200 transition-colors"
        >
          {open ? <X className="w-7 h-7" aria-hidden="true" /> : <Menu className="w-7 h-7" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-stone-200 bg-stone-50">
          <ul className="flex flex-col px-4 py-3 gap-1 font-semibold text-stone-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block p-3 rounded-lg hover:bg-stone-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#cadastro"
                onClick={() => setOpen(false)}
                className="block p-3 text-center rounded-lg bg-yellow-400 text-emerald-900 font-extrabold hover:bg-yellow-300"
              >
                Seja Voluntário
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
