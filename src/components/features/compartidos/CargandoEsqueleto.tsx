// Componente de skeleton loader animado

interface PropiedadesEsqueleto {
  tipo?: 'tarjeta' | 'linea' | 'circulo'
  cantidad?: number
  className?: string
}

export function CargandoEsqueleto({ tipo = 'tarjeta', cantidad = 3, className = '' }: PropiedadesEsqueleto) {
  const elementos = Array.from({ length: cantidad }, (_, i) => i)

  if (tipo === 'linea') {
    return (
      <div className={`space-y-3 ${className}`}>
        {elementos.map(i => (
          <div
            key={i}
            className="h-4 bg-fondo-elevado rounded animate-pulse"
            style={{ width: `${100 - i * 15}%` }}
          />
        ))}
      </div>
    )
  }

  if (tipo === 'circulo') {
    return (
      <div className={`flex gap-4 ${className}`}>
        {elementos.map(i => (
          <div
            key={i}
            className="w-12 h-12 bg-fondo-elevado rounded-full animate-pulse"
          />
        ))}
      </div>
    )
  }

  // Tipo tarjeta (por defecto)
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {elementos.map(i => (
        <div
          key={i}
          className="bg-fondo-tarjeta rounded-xl p-6 space-y-4 animate-pulse border border-borde-sutil"
        >
          <div className="flex justify-between">
            <div className="h-5 w-24 bg-fondo-elevado rounded" />
            <div className="h-5 w-16 bg-fondo-elevado rounded" />
          </div>
          <div className="h-6 w-3/4 bg-fondo-elevado rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-fondo-elevado rounded" />
            <div className="h-4 w-2/3 bg-fondo-elevado rounded" />
          </div>
          <div className="h-3 w-full bg-fondo-elevado rounded-full" />
          <div className="h-10 w-full bg-fondo-elevado rounded-lg" />
        </div>
      ))}
    </div>
  )
}
