'use client'

// Proveedor de tema para la aplicación
// Dark mode por defecto, preparado para toggle futuro

import { createContext, useContext, useState, type ReactNode } from 'react'

type Tema = 'oscuro' | 'claro'

interface ContextoTema {
  tema: Tema
  alternarTema: () => void
}

const ContextoTemaApp = createContext<ContextoTema>({
  tema: 'oscuro',
  alternarTema: () => {},
})

export function useTema() {
  return useContext(ContextoTemaApp)
}

export function ProveedorTema({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>('oscuro')

  function alternarTema() {
    setTema(anterior => (anterior === 'oscuro' ? 'claro' : 'oscuro'))
  }

  return (
    <ContextoTemaApp.Provider value={{ tema, alternarTema }}>
      {children}
    </ContextoTemaApp.Provider>
  )
}
