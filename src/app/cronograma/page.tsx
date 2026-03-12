// Página de Cronograma - Lista de juegos de la liga

import { ListaJuegos } from '@/components/features/cronograma/ListaJuegos'

export const metadata = {
  title: 'Cronograma',
  description: 'Consulta el cronograma de juegos de la Liga de Wiffle Ball Venezolana. Inscríbete en los próximos partidos.',
}

export default function PaginaCronograma() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-titulos text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-texto-principal">CRONO</span>
            <span className="texto-gradiente-venezuela">GRAMA</span>
          </h1>
          <p className="text-texto-secundario text-lg max-w-xl mx-auto">
            Todos los juegos de la temporada. Encuentra tu próximo partido y apúntate.
          </p>
        </div>

        {/* Lista de juegos */}
        <ListaJuegos />
      </div>
    </div>
  )
}
