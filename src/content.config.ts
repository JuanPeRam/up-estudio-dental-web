import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Esquema de los datos que se editan desde el panel /keystatic (ver keystatic.config.ts).
 * Los bloques opcionales aceptan vacío: Keystatic guarda los objetos aunque no tengan elementos,
 * y la web oculta cualquier bloque sin elementos.
 */
const texto = z.string().nullish().transform((v) => v ?? "");
const lista = <T extends z.ZodTypeAny>(item: T) => z.array(item).nullish().transform((v) => v ?? []);
const tituloYTexto = z.object({ titulo: texto, texto: texto });

const servicios = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/servicios" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      orden: z.number().default(10),
      resumen: z.string(),
      etiqueta: texto,
      imagen: image(),
      imagenAlt: z.string(),
      entradilla: z.string(),
      datos: lista(z.object({ icono: z.enum(["euro", "clock", "repeat", "calendar"]).default("euro"), etiqueta: texto, valor: texto })),
      pasos: z.object({ titulo: texto, items: lista(tituloYTexto) }).nullish(),
      incluye: z.object({ titulo: texto, items: lista(z.string()), boton: texto }).nullish(),
      tarjetas: z.object({ titulo: texto, items: lista(tituloYTexto) }).nullish(),
      beneficios: z.object({ antetitulo: texto, titulo: texto, texto: texto, items: lista(z.string()) }).nullish(),
      tratamientos: lista(z.object({ titulo: z.string(), texto: texto, imagen: image(), imagenAlt: z.string(), puntos: lista(z.string()) })),
      preguntas: z.object({ titulo: texto, items: lista(z.object({ pregunta: z.string(), respuesta: z.string() })) }).nullish(),
      avisoCancelacion: z.boolean().default(false),
      cierre: z.object({ antetitulo: texto, titulo: z.string(), texto: texto, mensajeWhatsapp: texto }),
    }),
});

const especialidades = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/especialidades" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      orden: z.number().default(10),
      linea: z.string(),
      imagen: image(),
      imagenAlt: z.string(),
      enlace: z.string().default("/contact"),
    }),
});

const equipo = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/equipo" }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      orden: z.number().default(10),
      especialidades: lista(z.string()),
      biografia: z.string(),
      retrato: image(),
      retratoAlt: z.string(),
      enPortada: z.boolean().default(true),
    }),
});

export const collections = { servicios, especialidades, equipo };
