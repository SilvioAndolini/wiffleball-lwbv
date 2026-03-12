// Página de Inicio - Liga de Wiffle Ball Venezolana

import { SeccionHeroe } from '@/components/features/inicio/SeccionHeroe'
import { CarruselFotos } from '@/components/features/inicio/CarruselFotos'
import { VistaJuegos } from '@/components/features/inicio/VistaJuegos'
import { LlamadaAccion } from '@/components/features/inicio/LlamadaAccion'

export const metadata = {
  title: 'Inicio',
  description: 'La liga de Wiffle Ball más emocionante de Venezuela. Únete, juega y vive la pasión del deporte.',
}

export default function PaginaInicio() {
  return (
    <>
      <SeccionHeroe />
      <CarruselFotos />
      <VistaJuegos />
      <LlamadaAccion />
    </>
  )
}
