'use client'

import { useState } from 'react'

const inputClass =
  'w-full h-12 px-4 rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition'
const selectClass =
  'w-full h-12 px-4 rounded-xl border border-stone-300 bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition'

type Tab = 'beneficiario' | 'voluntario'

export function RegistrationPortal() {
  const [tab, setTab] = useState<Tab>('beneficiario')

  return (
    <section id="cadastro" className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-emerald-800">Portal de Registros</h2>
          <p className="mt-4 text-stone-600 text-lg leading-relaxed">
            Faça parte da nossa rede de acolhimento. Escolha uma opção abaixo para começar.
          </p>
        </div>

        <div className="flex bg-stone-100 rounded-full p-1.5 mb-8" role="tablist" aria-label="Tipo de cadastro">
          <button
            type="button"
            role="tab"
            id="tab-beneficiario"
            aria-selected={tab === 'beneficiario'}
            aria-controls="panel-beneficiario"
            onClick={() => setTab('beneficiario')}
            className={`flex-1 h-12 rounded-full font-extrabold transition-colors ${
              tab === 'beneficiario' ? 'bg-yellow-400 text-emerald-900' : 'text-stone-600'
            }`}
          >
            Sou Beneficiário
          </button>
          <button
            type="button"
            role="tab"
            id="tab-voluntario"
            aria-selected={tab === 'voluntario'}
            aria-controls="panel-voluntario"
            onClick={() => setTab('voluntario')}
            className={`flex-1 h-12 rounded-full font-extrabold transition-colors ${
              tab === 'voluntario' ? 'bg-yellow-400 text-emerald-900' : 'text-stone-600'
            }`}
          >
            Quero ser Voluntário
          </button>
        </div>

        {tab === 'beneficiario' ? (
          <form
            id="panel-beneficiario"
            role="tabpanel"
            aria-labelledby="tab-beneficiario"
            method="POST"
            action="#"
            className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="benef-nome" className="block font-bold text-stone-700 mb-2">
                Nome completo
              </label>
              <input id="benef-nome" name="nome" type="text" required placeholder="Seu nome" className={inputClass} />
            </div>
            <div>
              <label htmlFor="benef-email" className="block font-bold text-stone-700 mb-2">
                E-mail
              </label>
              <input
                id="benef-email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="benef-telefone" className="block font-bold text-stone-700 mb-2">
                Telefone
              </label>
              <input
                id="benef-telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(61) 90000-0000"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="benef-ajuda" className="block font-bold text-stone-700 mb-2">
                Em que podemos ajudar?
              </label>
              <select id="benef-ajuda" name="area_ajuda" required defaultValue="" className={selectClass}>
                <option value="" disabled>
                  Selecione uma área
                </option>
                <option value="portugues">Ensino de Português</option>
                <option value="documentos">Emissão de Documentos</option>
                <option value="moradia">Orientação de moradia / Aluguel</option>
                <option value="sus">Registro no SUS</option>
                <option value="gestantes">Atenção a gestantes</option>
                <option value="trabalho">Trabalho e Diárias</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full h-14 rounded-full bg-emerald-700 text-white font-extrabold text-lg hover:bg-emerald-800 transition-colors shadow-md"
            >
              Solicitar acolhimento
            </button>
          </form>
        ) : (
          <form
            id="panel-voluntario"
            role="tabpanel"
            aria-labelledby="tab-voluntario"
            method="POST"
            action="#"
            className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="vol-nome" className="block font-bold text-stone-700 mb-2">
                Nome completo
              </label>
              <input id="vol-nome" name="nome" type="text" required placeholder="Seu nome" className={inputClass} />
            </div>
            <div>
              <label htmlFor="vol-email" className="block font-bold text-stone-700 mb-2">
                E-mail
              </label>
              <input
                id="vol-email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="vol-telefone" className="block font-bold text-stone-700 mb-2">
                Telefone
              </label>
              <input
                id="vol-telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(61) 90000-0000"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="vol-interesse" className="block font-bold text-stone-700 mb-2">
                Área de interesse
              </label>
              <select id="vol-interesse" name="area_interesse" required defaultValue="" className={selectClass}>
                <option value="" disabled>
                  Selecione uma área
                </option>
                <option value="ensino">Aulas e ensino de Português</option>
                <option value="juridico">Apoio jurídico e documentos</option>
                <option value="saude">Saúde e SUS</option>
                <option value="cultura">Ações culturais e arte</option>
                <option value="gastronomia">Gastronomia (Saboroso Caribe)</option>
                <option value="administrativo">Apoio administrativo</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full h-14 rounded-full bg-emerald-700 text-white font-extrabold text-lg hover:bg-emerald-800 transition-colors shadow-md"
            >
              Quero ser voluntário
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
