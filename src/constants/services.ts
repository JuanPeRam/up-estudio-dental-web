import type { ImageMetadata } from "astro";
import revisiones from "@/img/UP-Gallery/Up-Machine.jpg";
import estetica from "@/img/UP-Gallery/Box1.jpg";
import blanqueamiento from "@/img/UP-Gallery/Box22.jpg";
import limpieza from "@/img/UP-Gallery/Box2.jpg";

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
        imageAlt: "Equipo de radiografía dental de la clínica",
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
        shortDescription: "Gel profesional supervisado. Sesión de 45 a 60 minutos.",
        image: blanqueamiento,
        imageAlt: "Gabinete dental con sillón y equipo de tratamiento",
    },
    {
        slug: "limpieza-bucal",
        title: "Limpieza bucal",
        shortDescription: "Ultrasonidos y pulido para eliminar el sarro y la placa.",
        image: limpieza,
        imageAlt: "Gabinete dental luminoso con sillón de tratamiento",
    },
];

const defaultServiceSlug = services[0].slug;

export type { ServiceMeta };
export { services, defaultServiceSlug };
