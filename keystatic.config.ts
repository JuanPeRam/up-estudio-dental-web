import { config, collection, fields } from "@keystatic/core";

/**
 * Panel de administración (Keystatic) para que la clínica edite servicios, especialidades y equipo.
 *
 * - En producción usa Keystatic Cloud: los propietarios entran con su correo en /keystatic y cada
 *   cambio se guarda como un commit en GitHub; Vercel republica la web en uno o dos minutos.
 *   Requiere la variable de entorno PUBLIC_KEYSTATIC_CLOUD_PROJECT ("equipo/proyecto" de keystatic.cloud).
 * - Sin esa variable (desarrollo local) guarda directamente en los ficheros del proyecto.
 *
 * Los datos viven en src/content/<colección>/*.yaml y las fotos en src/assets/cms/<colección>/<entrada>/.
 * El esquema que lee la web está en src/content.config.ts: si se añade un campo aquí, añádelo allí.
 */
const cloudProject = import.meta.env.PUBLIC_KEYSTATIC_CLOUD_PROJECT as string | undefined;

const imagen = (coleccion: string, label: string, description?: string) =>
  fields.image({
    label,
    description,
    directory: `src/assets/cms/${coleccion}`,
    publicPath: `../../assets/cms/${coleccion}/`,
    validation: { isRequired: true },
  });

const textoAlt = fields.text({
  label: "Descripción de la foto",
  description: "Qué se ve en la foto, para personas ciegas y para Google. Ejemplo: «Doctora revisando la boca de una paciente».",
  validation: { isRequired: true },
});

const orden = fields.integer({
  label: "Orden",
  description: "Posición en la lista: 1 aparece primero.",
  defaultValue: 10,
  validation: { isRequired: true },
});

export default config({
  storage: cloudProject ? { kind: "cloud" } : { kind: "local" },
  ...(cloudProject ? { cloud: { project: cloudProject } } : {}),
  ui: {
    brand: { name: "Up Estudio Dental" },
    navigation: {
      Contenido: ["servicios", "especialidades", "equipo"],
    },
  },
  collections: {
    servicios: collection({
      label: "Servicios (fichas de tratamiento)",
      path: "src/content/servicios/*",
      format: { data: "yaml" },
      slugField: "titulo",
      columns: ["titulo", "orden"],
      schema: {
        titulo: fields.slug({
          name: { label: "Nombre del tratamiento", validation: { isRequired: true } },
          slug: {
            label: "Dirección en la web",
            description: "Aparece en el enlace: /services?servicio=… No la cambies si el tratamiento ya está publicado.",
          },
        }),
        orden,
        resumen: fields.text({
          label: "Resumen corto",
          description: "Una frase con un dato, para la tarjeta del tratamiento. Ejemplo: «Revisión, radiografías y presupuesto por escrito, sin coste».",
          validation: { isRequired: true, length: { max: 110 } },
        }),
        etiqueta: fields.text({ label: "Etiqueta (opcional)", description: "Una o dos palabras destacadas, como «Sin coste». Déjalo vacío si no hace falta." }),
        imagen: imagen("servicios", "Foto de la tarjeta", "Foto real de la clínica. Horizontal o vertical; se recorta automáticamente."),
        imagenAlt: textoAlt,
        entradilla: fields.text({
          label: "Entradilla",
          description: "Dos o tres frases bajo el título de la ficha: en qué consiste y para qué sirve.",
          multiline: true,
          validation: { isRequired: true },
        }),
        datos: fields.array(
          fields.object({
            icono: fields.select({
              label: "Icono",
              options: [
                { label: "Precio (€)", value: "euro" },
                { label: "Duración (reloj)", value: "clock" },
                { label: "Frecuencia (repetir)", value: "repeat" },
                { label: "Fecha (calendario)", value: "calendar" },
              ],
              defaultValue: "euro",
            }),
            etiqueta: fields.text({ label: "Etiqueta", description: "Ejemplo: Precio" }),
            valor: fields.text({ label: "Valor", description: "Ejemplo: Gratuita, 45-60 min, Según valoración" }),
          }),
          { label: "Datos clave (precio, duración…)", description: "Hasta tres datos. Si no hay precio cerrado, escribe «Según valoración».", itemLabel: (p) => `${p.fields.etiqueta.value}: ${p.fields.valor.value}` },
        ),
        pasos: fields.object(
          {
            titulo: fields.text({ label: "Título del bloque", description: "Ejemplo: Cómo es tu visita, paso a paso" }),
            items: fields.array(
              fields.object({
                titulo: fields.text({ label: "Paso" }),
                texto: fields.text({ label: "Explicación", multiline: true }),
              }),
              { label: "Pasos", itemLabel: (p) => p.fields.titulo.value },
            ),
          },
          { label: "Pasos del tratamiento (opcional)", description: "Déjalo sin pasos para no mostrar este bloque." },
        ),
        incluye: fields.object(
          {
            titulo: fields.text({ label: "Título del bloque", description: "Ejemplo: Qué incluye" }),
            items: fields.array(fields.text({ label: "Elemento" }), { label: "Lista", itemLabel: (p) => p.value }),
            boton: fields.text({ label: "Texto del botón", description: "Ejemplo: Pedir revisión gratuita" }),
          },
          { label: "Qué incluye (opcional)", description: "Lista con marca de verificación junto a los pasos. Vacía para ocultarla." },
        ),
        tarjetas: fields.object(
          {
            titulo: fields.text({ label: "Título del bloque", description: "Ejemplo: Señales de que ya te toca" }),
            items: fields.array(
              fields.object({ titulo: fields.text({ label: "Título" }), texto: fields.text({ label: "Texto", multiline: true }) }),
              { label: "Tarjetas", itemLabel: (p) => p.fields.titulo.value },
            ),
          },
          { label: "Tarjetas informativas (opcional)", description: "Hasta cuatro tarjetas breves. Vacío para ocultar." },
        ),
        beneficios: fields.object(
          {
            antetitulo: fields.text({ label: "Antetítulo", description: "Ejemplo: Después de la limpieza" }),
            titulo: fields.text({ label: "Título" }),
            texto: fields.text({ label: "Texto", multiline: true }),
            items: fields.array(fields.text({ label: "Beneficio" }), { label: "Lista de beneficios", itemLabel: (p) => p.value }),
          },
          { label: "Beneficios (opcional)", description: "Bloque destacado con una lista. Vacío para ocultar." },
        ),
        tratamientos: fields.array(
          fields.object({
            titulo: fields.text({ label: "Nombre" }),
            texto: fields.text({ label: "Descripción", multiline: true }),
            imagen: imagen("servicios", "Foto"),
            imagenAlt: textoAlt,
            puntos: fields.array(fields.text({ label: "Dato" }), { label: "Datos breves", description: "Ejemplo: Sesión de 30 min", itemLabel: (p) => p.value }),
          }),
          { label: "Tratamientos dentro del servicio (opcional)", description: "Para servicios con varios tratamientos, como medicina estética: foto y texto alternados.", itemLabel: (p) => p.fields.titulo.value },
        ),
        preguntas: fields.object(
          {
            titulo: fields.text({ label: "Título del bloque", description: "Ejemplo: Preguntas frecuentes" }),
            items: fields.array(
              fields.object({ pregunta: fields.text({ label: "Pregunta" }), respuesta: fields.text({ label: "Respuesta", multiline: true }) }),
              { label: "Preguntas", itemLabel: (p) => p.fields.pregunta.value },
            ),
          },
          { label: "Preguntas frecuentes (opcional)", description: "Vacío para ocultar." },
        ),
        avisoCancelacion: fields.checkbox({ label: "Mostrar la política de cancelación", defaultValue: false }),
        cierre: fields.object(
          {
            antetitulo: fields.text({ label: "Antetítulo", defaultValue: "Pide tu cita" }),
            titulo: fields.text({ label: "Título", validation: { isRequired: true } }),
            texto: fields.text({ label: "Texto", multiline: true }),
            mensajeWhatsapp: fields.text({
              label: "Tratamiento en el mensaje de WhatsApp",
              description: "Completa la frase «Hola, me gustaría pedir cita para…». Ejemplo: una limpieza bucal",
            }),
          },
          { label: "Banda final de cita" },
        ),
      },
    }),

    especialidades: collection({
      label: "Especialidades (rejilla de la portada)",
      path: "src/content/especialidades/*",
      format: { data: "yaml" },
      slugField: "titulo",
      columns: ["titulo", "orden"],
      schema: {
        titulo: fields.slug({ name: { label: "Nombre", validation: { isRequired: true } } }),
        orden: fields.integer({
          label: "Orden",
          description: "Posición en la rejilla: la 1 sale en grande. Con 9 especialidades la rejilla queda completa.",
          defaultValue: 10,
          validation: { isRequired: true },
        }),
        linea: fields.text({ label: "Línea breve", description: "Un dato corto. Ejemplo: Escaneo digital iTero", validation: { isRequired: true, length: { max: 50 } } }),
        imagen: imagen("especialidades", "Foto"),
        imagenAlt: textoAlt,
        enlace: fields.text({
          label: "Enlace",
          description: "A dónde lleva al pulsar. Ejemplos: /services?servicio=limpieza-bucal#detalle, /member/cristina o /contact",
          defaultValue: "/contact",
          validation: { isRequired: true },
        }),
      },
    }),

    equipo: collection({
      label: "Equipo",
      path: "src/content/equipo/*",
      format: { data: "yaml" },
      slugField: "nombre",
      columns: ["nombre", "orden"],
      schema: {
        nombre: fields.slug({
          name: { label: "Nombre completo", validation: { isRequired: true } },
          slug: { label: "Dirección de su ficha", description: "Aparece en el enlace: /member/… No la cambies si ya está publicada." },
        }),
        orden,
        especialidades: fields.array(fields.text({ label: "Especialidad" }), {
          label: "Especialidades",
          description: "Hasta tres. Ejemplo: Ortodoncia, Odontopediatría",
          itemLabel: (p) => p.value,
        }),
        biografia: fields.text({ label: "Biografía", description: "Tres o cuatro frases con su formación y experiencia reales.", multiline: true, validation: { isRequired: true } }),
        retrato: imagen("equipo", "Retrato", "Vertical, a ser posible sobre el fondo turquesa de los demás retratos y con espacio sobre la cabeza."),
        retratoAlt: fields.text({ label: "Descripción del retrato", description: "Normalmente, su nombre.", validation: { isRequired: true } }),
        enPortada: fields.checkbox({ label: "Mostrar en la portada", description: "La portada muestra hasta cinco personas.", defaultValue: true }),
      },
    }),
  },
});
