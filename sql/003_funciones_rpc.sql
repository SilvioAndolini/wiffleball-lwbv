-- =============================================
-- Funciones RPC para llamadas desde el frontend
-- Ejecutar DESPUÉS de 001 y 002
-- =============================================

-- Obtener juegos próximos con conteo de inscritos
CREATE OR REPLACE FUNCTION public.obtener_juegos_proximos(limite INTEGER DEFAULT 5)
RETURNS TABLE (
  id UUID,
  titulo VARCHAR,
  descripcion TEXT,
  fecha DATE,
  hora_inicio TIME,
  ubicacion VARCHAR,
  estado VARCHAR,
  equipo_local VARCHAR,
  equipo_visitante VARCHAR,
  total_inscritos BIGINT,
  max_jugadores INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    j.id,
    j.titulo,
    j.descripcion,
    j.fecha,
    j.hora_inicio,
    j.ubicacion,
    j.estado,
    el.nombre AS equipo_local,
    ev.nombre AS equipo_visitante,
    COUNT(i.id) AS total_inscritos,
    j.max_jugadores
  FROM public.juegos j
  LEFT JOIN public.equipos el ON j.equipo_local_id = el.id
  LEFT JOIN public.equipos ev ON j.equipo_visitante_id = ev.id
  LEFT JOIN public.inscripciones i ON j.id = i.juego_id AND i.estado = 'confirmada'
  WHERE j.fecha >= CURRENT_DATE AND j.estado = 'programado'
  GROUP BY j.id, el.nombre, ev.nombre
  ORDER BY j.fecha ASC, j.hora_inicio ASC
  LIMIT limite;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Verificar si un correo ya está inscrito en un juego
CREATE OR REPLACE FUNCTION public.verificar_inscripcion(
  p_juego_id UUID,
  p_correo VARCHAR
)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.inscripciones
    WHERE juego_id = p_juego_id AND correo = p_correo
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
