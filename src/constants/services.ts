import type { ImageMetadata } from "astro";
import revisiones from "@/img/up/tratamiento-revision.webp";
import estetica from "@/img/UP-Gallery/Box1.jpg";
import blanqueamiento from "@/img/up/philips-zoom.webp";
import limpieza from "@/img/up/tratamiento-higiene.webp";
import general from "@/img/up/tratamiento-pantalla.webp";
import pediatria from "@/img/up/nino-maqueta.webp";
import ortodoncia from "@/img/up/itero.webp";
import cirugia from "@/img/up/cirugia.webp";
import implantes from "@/img/up/tratamiento-detalle.webp";
import endodoncia from "@/img/up/radiografia-digital.webp";
import periodoncia from "@/img/up/tratamiento-ortodoncia.webp";

interface ServiceMeta {
    slug: string;
    title: string;
    shortDescription: string;
    image: ImageMetadata;
    imageAlt: string;
    badge?: string;
}

const services: ServiceMeta[] = [
    {
        slug: "revisiones-dentales",
        title: "Revisiones dentales",
        shortDescription: "Revisión, radiografías y presupuesto por escrito, sin coste.",
        image: revisiones,
        imageAlt: "Doctora revisando la boca de una paciente en el gabinete",
        badge: "Sin coste",
    },
    {
        slug: "medicina-estetica",
        title: "Medicina estética",
        shortDescription: "Rejuvenecimiento facial, tratamiento de arrugas y aumento de labios.",
        image: estetica,
        imageAlt: "Gabinete de medicina estética con camilla",
    },
    {
        slug: "blanqueamiento-dental",
        title: "Blanqueamiento dental",
        shortDescription: "Sistema Philips Zoom con gel profesional. Sesión de 45 a 60 minutos.",
        image: blanqueamiento,
        imageAlt: "Sesión de blanqueamiento con la lámpara Philips Zoom",
    },
    {
        slug: "limpieza-bucal",
        title: "Limpieza bucal",
        shortDescription: "Ultrasonidos y pulido para eliminar el sarro y la placa.",
        image: limpieza,
        imageAlt: "Higienista realizando una limpieza a un paciente",
    },
];

const defaultServiceSlug = services[0].slug;

/** Especialidades que anuncia la clínica (web oficial). Las que tienen ficha propia enlazan a ella. */
interface Specialty {
    title: string;
    line: string;
    image: ImageMetadata;
    imageAlt: string;
    href: string;
}

const specialties: Specialty[] = [
    { title: "Odontología general", line: "Revisiones, empastes y prevención", image: general, imageAlt: "Doctora atendiendo a una paciente frente a la pantalla del gabinete", href: "/services?servicio=revisiones-dentales#detalle" },
    { title: "Odontopediatría", line: "Dentista para los peques", image: pediatria, imageAlt: "Niño aprendiendo a cepillarse con una maqueta de dientes", href: "/member/cristina" },
    { title: "Ortodoncia e Invisalign", line: "Escaneo digital iTero", image: ortodoncia, imageAlt: "Escáner iTero para planificar la ortodoncia invisible", href: "/member/cristina" },
    { title: "Cirugía bucal", line: "Más de 30 años de experiencia", image: cirugia, imageAlt: "Cirujano y asistente durante una intervención", href: "/member/rafael" },
    { title: "Implantes y prótesis", line: "Implantoprótesis dental", image: implantes, imageAlt: "Detalle de un tratamiento dental con instrumental", href: "/member/isabel" },
    { title: "Endodoncia", line: "Diagnóstico con radiografía digital", image: endodoncia, imageAlt: "Doctora explicando una radiografía panorámica en pantalla", href: "/contact" },
    { title: "Periodoncia", line: "Salud de las encías", image: periodoncia, imageAlt: "Tratamiento de encías a una paciente", href: "/member/nilyam" },
    { title: "Blanqueamiento Philips Zoom", line: "Sesión de 45 a 60 minutos", image: blanqueamiento, imageAlt: "Sesión de blanqueamiento con la lámpara Philips Zoom", href: "/services?servicio=blanqueamiento-dental#detalle" },
    { title: "Medicina estética facial", line: "Arrugas, labios y rejuvenecimiento", image: estetica, imageAlt: "Gabinete de medicina estética con camilla", href: "/services?servicio=medicina-estetica#detalle" },
];

export type { ServiceMeta, Specialty };
export { services, defaultServiceSlug, specialties };
