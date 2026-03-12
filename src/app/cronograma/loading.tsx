// Skeleton loader para la página de cronograma

import { CargandoEsqueleto } from '@/components/features/compartidos/CargandoEsqueleto'

export default function CargandoCronograma() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-14 w-80 bg-fondo-elevado rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-5 w-96 bg-fondo-elevado rounded mx-auto animate-pulse" />
        </div>

        {/* Filtros skeleton */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-8 w-24 bg-fondo-elevado rounded-full animate-pulse" />
          ))}
        </div>

        {/* Grid skeleton */}
        <CargandoEsqueleto tipo="tarjeta" cantidad={6} />
      </div>
    </div>
  )
}
