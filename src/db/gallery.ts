import type { ImageMetadata } from "astro";
import fachada from "@/img/UP-Gallery/Up-Entry.jpg";
import recepcion from "@/img/UP-Gallery/Up-Board.jpg";
import recepcion2 from "@/img/UP-Gallery/Entry2.jpg";
import recepcion3 from "@/img/UP-Gallery/Entry3.jpg";
import zonaInfantil from "@/img/UP-Gallery/Rest-room.jpg";
import gabinete from "@/img/UP-Gallery/Box2.jpg";
import gabinete2 from "@/img/UP-Gallery/Box22.jpg";
import gabinete3 from "@/img/UP-Gallery/Box23.jpg";
import radiografia from "@/img/UP-Gallery/Up-Machine.jpg";
import pasillo from "@/img/UP-Gallery/Boxes.jpg";
import despacho from "@/img/UP-Gallery/Office2.jpg";
import aseo from "@/img/UP-Gallery/Bathroom.jpg";
import aseo2 from "@/img/UP-Gallery/Bathroom3.jpg";

type Span = "big" | "wide" | "tall" | "normal";

interface GalleryItem {
    src: ImageMetadata;
    alt: string;
    span: Span;
}

// Orden y tamaños elegidos a mano: la recepción vertical ocupa celdas altas
// y las mejores panorámicas, las grandes. Sin cocinas ni duplicados.
const gallery: GalleryItem[] = [
    { src: recepcion2, alt: "Recepción con el logotipo iluminado y pasillo al fondo", span: "big" },
    { src: recepcion, alt: "Mostrador de recepción con flores", span: "tall" },
    { src: fachada, alt: "Fachada de Up Estudio Dental en la calle Andrómeda", span: "normal" },
    { src: zonaInfantil, alt: "Sala de espera con zona de juegos infantil", span: "wide" },
    { src: gabinete, alt: "Gabinete dental con sillón y pantalla para el paciente", span: "wide" },
    { src: radiografia, alt: "Equipo de radiografía panorámica", span: "normal" },
    { src: gabinete2, alt: "Gabinete dental con sillón de tratamiento", span: "big" },
    { src: recepcion3, alt: "Recepción y sala de espera vistas desde la entrada", span: "wide" },
    { src: gabinete3, alt: "Rincón de espera dentro del gabinete", span: "normal" },
    { src: despacho, alt: "Despacho de consulta con mesa de cristal", span: "wide" },
    { src: pasillo, alt: "Pasillo de acceso a los gabinetes", span: "normal" },
    { src: aseo, alt: "Aseo de pacientes con espejo iluminado", span: "normal" },
    { src: aseo2, alt: "Detalle del aseo con papel pintado vegetal", span: "normal" },
];

export type { GalleryItem };
export default gallery;
