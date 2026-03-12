-- =============================================
-- Liga de Wiffle Ball Venezolana - Esquema de BD
-- Ejecutar en Supabase SQL Editor en orden
-- =============================================

-- Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla: equipos
CREATE TABLE public.equipos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT,
  logo_url TEXT,
  color_primario VARCHAR(7) DEFAULT '#FFD700',
  color_secundario VARCHAR(7) DEFAULT '#00BFFF',
  activo BOOLEAN DEFAULT true,
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  actualizado_en TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla: usuarios (extiende auth.users de Supabase)
CREATE TABLE public.usuarios (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  nombre_completo VARCHAR(200) NOT NULL,
  apodo VARCHAR(50),
  correo VARCHAR(254) NOT NULL,
  telefono VARCHAR(20),
  equipo_id UUID REFERENCES public.equipos(id) ON DELETE SET NULL,
  rol VARCHAR(20) DEFAULT 'jugador' CHECK (rol IN ('admin', 'organizador', 'jugador', 'espectador')),
  avatar_url TEXT,
  activo BOOLEAN DEFAULT true,
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  actualizado_en TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla: juegos
CREATE TABLE public.juegos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  descripcion TEXT,
  fecha DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fin TIME,
  ubicacion VARCHAR(300) NOT NULL,
  latitud DECIMAL(10, 8),
  longitud DECIMAL(11, 8),
  equipo_local_id UUID REFERENCES public.equipos(id),
  equipo_visitante_id UUID REFERENCES public.equipos(id),
  marcador_local INTEGER DEFAULT 0,
  marcador_visitante INTEGER DEFAULT 0,
  estado VARCHAR(20) DEFAULT 'programado'
    CHECK (estado IN ('programado', 'en_curso', 'finalizado', 'cancelado', 'pospuesto')),
  max_jugadores INTEGER DEFAULT 20,
  creado_por UUID REFERENCES public.usuarios(id),
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  actualizado_en TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla: inscripciones
CREATE TABLE public.inscripciones (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  juego_id UUID REFERENCES public.juegos(id) ON DELETE CASCADE NOT NULL,
  usuario_id UUID REFERENCES public.usuarios(id) ON DELETE CASCADE,
  nombre_completo VARCHAR(200) NOT NULL,
  correo VARCHAR(254) NOT NULL,
  telefono VARCHAR(20),
  equipo_preferido UUID REFERENCES public.equipos(id),
  posicion VARCHAR(50),
  experiencia VARCHAR(20) DEFAULT 'principiante'
    CHECK (experiencia IN ('principiante', 'intermedio', 'avanzado')),
  notas TEXT,
  estado VARCHAR(20) DEFAULT 'pendiente'
    CHECK (estado IN ('pendiente', 'confirmada', 'rechazada', 'cancelada')),
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(juego_id, correo)
);

-- Tabla: mensajes_contacto
CREATE TABLE public.mensajes_contacto (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nombre VARCHAR(200) NOT NULL,
  correo VARCHAR(254) NOT NULL,
  asunto VARCHAR(300) NOT NULL,
  mensaje TEXT NOT NULL,
  leido BOOLEAN DEFAULT false,
  respondido BOOLEAN DEFAULT false,
  creado_en TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para rendimiento
CREATE INDEX idx_juegos_fecha ON public.juegos(fecha);
CREATE INDEX idx_juegos_estado ON public.juegos(estado);
CREATE INDEX idx_inscripciones_juego ON public.inscripciones(juego_id);
CREATE INDEX idx_inscripciones_correo ON public.inscripciones(correo);
CREATE INDEX idx_usuarios_equipo ON public.usuarios(equipo_id);

-- Trigger para actualizar 'actualizado_en' automáticamente
CREATE OR REPLACE FUNCTION public.actualizar_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.actualizado_en = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_equipos_actualizar
  BEFORE UPDATE ON public.equipos
  FOR EACH ROW EXECUTE FUNCTION public.actualizar_timestamp();

CREATE TRIGGER trigger_usuarios_actualizar
  BEFORE UPDATE ON public.usuarios
  FOR EACH ROW EXECUTE FUNCTION public.actualizar_timestamp();

CREATE TRIGGER trigger_juegos_actualizar
  BEFORE UPDATE ON public.juegos
  FOR EACH ROW EXECUTE FUNCTION public.actualizar_timestamp();
