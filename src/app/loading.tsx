// Pantalla de carga global

export default function Cargando() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fondo-principal">
      <div className="text-center">
        {/* Spinner circular */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-fondo-elevado" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-azul-primario animate-spin" />
        </div>

        {/* Texto */}
        <p className="font-titulos text-lg text-texto-secundario animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  )
}
