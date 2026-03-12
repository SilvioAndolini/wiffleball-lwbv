-- =============================================
-- Políticas RLS (Row Level Security)
-- Ejecutar DESPUÉS de 001_crear_tablas.sql
-- =============================================

-- Habilitar RLS en todas las tablas
ALTER TABLE public.equipos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.juegos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inscripciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mensajes_contacto ENABLE ROW LEVEL SECURITY;

-- EQUIPOS: Lectura pública, escritura solo admin
CREATE POLICY "equipos_lectura_publica" ON public.equipos
  FOR SELECT USING (true);

CREATE POLICY "equipos_escritura_admin" ON public.equipos
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.usuarios WHERE id = auth.uid() AND rol = 'admin')
  );

-- USUARIOS: Leer su propio perfil, admin lee todos
CREATE POLICY "usuarios_lectura_propia" ON public.usuarios
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "usuarios_lectura_admin" ON public.usuarios
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.usuarios WHERE id = auth.uid() AND rol = 'admin')
  );

CREATE POLICY "usuarios_actualizar_propio" ON public.usuarios
  FOR UPDATE USING (id = auth.uid());

CREATE POLICY "usuarios_insertar_propio" ON public.usuarios
  FOR INSERT WITH CHECK (id = auth.uid());

-- JUEGOS: Lectura pública, escritura admin/organizador
CREATE POLICY "juegos_lectura_publica" ON public.juegos
  FOR SELECT USING (true);

CREATE POLICY "juegos_escritura_admin" ON public.juegos
  FOR ALL USING (
    EXISTS (SELECT 1 FROM public.usuarios WHERE id = auth.uid() AND rol IN ('admin', 'organizador'))
  );

-- INSCRIPCIONES: Insertar cualquiera, leer propias o admin
CREATE POLICY "inscripciones_insertar_publico" ON public.inscripciones
  FOR INSERT WITH CHECK (true);

CREATE POLICY "inscripciones_lectura_propia" ON public.inscripciones
  FOR SELECT USING (usuario_id = auth.uid());

CREATE POLICY "inscripciones_lectura_admin" ON public.inscripciones
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.usuarios WHERE id = auth.uid() AND rol IN ('admin', 'organizador'))
  );

-- MENSAJES_CONTACTO: Insertar cualquiera, leer solo admin
CREATE POLICY "contacto_insertar_publico" ON public.mensajes_contacto
  FOR INSERT WITH CHECK (true);

CREATE POLICY "contacto_lectura_admin" ON public.mensajes_contacto
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.usuarios WHERE id = auth.uid() AND rol = 'admin')
  );
