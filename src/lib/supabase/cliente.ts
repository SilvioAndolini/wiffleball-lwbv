// Cliente Supabase para uso en el navegador (componentes 'use client')
// Usa la clave anónima que es segura para el frontend

import { createClient } from '@supabase/supabase-js'

const urlSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL!
const claveAnonima = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(urlSupabase, claveAnonima)
