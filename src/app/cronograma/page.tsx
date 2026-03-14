// Página de Cronograma - Lista de juegos de la liga

import { HeroPagina } from '@/components/features/compartidos/HeroPagina'
import { ListaJuegos } from '@/components/features/cronograma/ListaJuegos'

export const metadata = {
  title: 'Cronograma',
  description: 'Consulta el cronograma de juegos de la Liga de Wiffle Ball Venezolana. Inscríbete en los próximos partidos.',
}

export default function PaginaCronograma() {
  return (
    <>
      <HeroPagina
        etiqueta="TEMPORADA 2026"
        titulo="CRONOGRAMA"
        tituloColor="GRAMA"
        subtitulo="Todos los juegos de la temporada. Encuentra tu próximo partido y apúntate."
      />
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <ListaJuegos />
        </div>
      </div>
    </>
  )
}
