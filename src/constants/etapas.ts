/**
 * Etapas de la portada: la línea de la sonrisa pasa por cada una.
 * Los tratamientos se enlazan por su slug (nombre del fichero en src/content/servicios); si uno se
 * borra en Keystatic, desaparece de su etapa sin romper la página. Los textos solo usan hechos
 * confirmados (PRODUCT.md y docs/marca/investigacion-redes.md).
 */
import type { ImageMetadata } from "astro";
// Fotos de Instagram, de las presentaciones de Canva y de la sesión profesional de la clínica,
// distintas de las del resto de la portada para no repetir imágenes.
import recepcion from "@/img/up/recepcion-logo.webp";
import ninoSonrisa from "@/img/up/nino-sonrisa.webp";
import alineadores from "@/img/up/alineadores-invisalign.webp";
import tratamiento from "@/img/up/tratamiento-sonrisa.webp";
import instrumental from "@/img/up/instrumental.webp";

export type Etapa = {
  id: string;
  /** Edad o momento, en versalitas junto al punto de la línea. */
  edad: string;
  titulo: string;
  texto: string;
  /** Datos cortos y verificables de la etapa. */
  puntos: string[];
  servicios: string[];
  imagen: ImageMetadata;
  imagenAlt: string;
  /** Foto vertical: en escritorio se muestra en 4:5 en lugar de 4:3. */
  vertical?: boolean;
  /** Punto de la foto que se conserva al recortarla (object-position). */
  foco?: string;
  mensaje: string;
};

export const etapas: Etapa[] = [
  {
    id: "primer-diente",
    edad: "Con el primer diente",
    titulo: "La primera visita, sin miedo",
    texto:
      "Os recomendamos venir cuando sale el primer diente o, como tarde, hacia el año. Son visitas cortas para que el peque conozca la consulta y vuelva tranquilo.",
    puntos: ["Zona de juegos en la sala de espera", "Los padres pueden entrar al gabinete", "Revisión cada 6 meses"],
    servicios: ["odontopediatria", "revisiones-dentales"],
    imagen: recepcion,
    imagenAlt: "Recepción de Up Estudio Dental, con el logotipo en la pared y una planta",
    vertical: true,
    foco: "50% 30%",
    mensaje: "la primera visita de mi peque",
  },
  {
    id: "denticion-mixta",
    edad: "De 6 a 12 años",
    titulo: "Cuando conviven dientes de leche y definitivos",
    texto:
      "Es la edad de vigilar cómo crece la boca. Detectamos a tiempo la mordida cruzada, trabajamos la función de la mordida con Rehabilitación Neuro-Oclusal y, si hace falta, empezamos la ortodoncia con Invisalign First.",
    puntos: ["Primera revisión de ortodoncia hacia los 7 años", "Selladores y flúor en las muelas", "Dra. Cristina Umérez: más de 25 años con niños"],
    servicios: ["odontopediatria", "ortodoncia-invisalign"],
    imagen: ninoSonrisa,
    imagenAlt: "Un niño sonríe enseñando una maqueta de dientes",
    mensaje: "una revisión de mi hijo o hija (dentición mixta)",
  },
  {
    id: "adolescencia",
    edad: "Adolescencia",
    titulo: "Ortodoncia que apenas se nota",
    texto:
      "Brackets o alineadores transparentes Invisalign. Escaneamos la boca en 3D con el iTero en pocos minutos, sin moldes de pasta, y te enseñamos el plan en pantalla.",
    puntos: ["Escáner intraoral iTero", "Plan y presupuesto por escrito", "Seguimiento periódico"],
    servicios: ["ortodoncia-invisalign"],
    imagen: alineadores,
    imagenAlt: "Una profesional de la clínica enseña unos alineadores transparentes Invisalign",
    mensaje: "la primera revisión gratuita (ortodoncia)",
  },
  {
    id: "adultos",
    edad: "Adultos",
    titulo: "Revisiones, limpieza y una sonrisa más blanca",
    texto:
      "Las revisiones son gratuitas. Hacemos limpiezas, blanqueamiento Philips Zoom en una sesión de una hora, endodoncias diagnosticadas con radiografía digital y cuidamos tus encías con periodoncia.",
    puntos: ["Radiografía digital en la propia clínica", "Blanqueamiento en consulta, supervisado", "Dra. Nilyam: periodoncia"],
    servicios: ["revisiones-dentales", "limpieza-bucal", "blanqueamiento-dental", "endodoncia", "periodoncia"],
    imagen: tratamiento,
    imagenAlt: "Una higienista de la clínica atiende a un paciente en el gabinete",
    vertical: true,
    foco: "50% 45%",
    mensaje: "una revisión para mí",
  },
  {
    id: "mas-adelante",
    edad: "Más adelante",
    titulo: "Implantes y cirugía, en las mismas manos",
    texto:
      "El Dr. Rafael Sosa, cirujano bucal e implantólogo con más de 30 años de experiencia, coloca los implantes y se ocupa de las extracciones complejas y las muelas del juicio. La Dra. Isabel Sosa, con máster en Implantoprótesis, diseña la prótesis.",
    puntos: ["Estudio previo y presupuesto por escrito", "Muelas del juicio y extracciones complejas", "Prótesis sobre implantes"],
    servicios: ["implantes-dentales", "cirugia-bucal"],
    imagen: instrumental,
    imagenAlt: "Instrumental rotatorio del gabinete, en primer plano",
    mensaje: "la primera revisión gratuita (implantes)",
  },
];
