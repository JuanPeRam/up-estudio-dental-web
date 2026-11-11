import type { ImageMetadata } from "astro";
import fachada from "@/img/UP-Gallery/Up-Entry.jpg";
import recepcion from "@/img/UP-Gallery/Entry2.jpg";
import recepcionVertical from "@/img/UP-Gallery/Up-Board.jpg";
import salaEspera from "@/img/UP-Gallery/Rest-room.jpg";
import salaDesdeRecepcion from "@/img/UP-Gallery/Entry3.jpg";
import gabinete from "@/img/UP-Gallery/Box22.jpg";
import gabinete2 from "@/img/UP-Gallery/Box2.jpg";
import gabineteAcompanante from "@/img/UP-Gallery/Box23.jpg";
import pasillo from "@/img/UP-Gallery/Boxes.jpg";
import radiografia from "@/img/UP-Gallery/Up-Machine.jpg";
import despacho from "@/img/UP-Gallery/Office2.jpg";
import despacho2 from "@/img/UP-Gallery/Office.jpg";
import aseo from "@/img/UP-Gallery/Bathroom.jpg";
import aseo2 from "@/img/UP-Gallery/Bathroom3.jpg";

export interface TourPhoto {
    src: ImageMetadata;
    alt: string;
}

export interface TourStop {
    id: string;
    /** Nombre corto para el índice de la visita. */
    label: string;
    title: string;
    text: string;
    details: string[];
    /** La primera foto es la principal; el resto van debajo, más pequeñas. */
    photos: TourPhoto[];
}

// Recorrido en el orden en que lo haría un paciente: de la calle al gabinete.
const tour: TourStop[] = [
    {
        id: "entrada",
        label: "Entrada",
        title: "Llegas a la calle Andrómeda",
        text: "La clínica está en la calle Andrómeda, 48, en Móstoles, en planta baja y con la entrada directa desde la calle. Busca el cartel de Up Estudio Dental sobre la puerta.",
        details: ["Planta baja, a pie de calle", "C. Andrómeda, 48, 28938 Móstoles"],
        photos: [{ src: fachada, alt: "Fachada de Up Estudio Dental con el cartel sobre la puerta de entrada" }],
    },
    {
        id: "recepcion",
        label: "Recepción",
        title: "Te recibimos en recepción",
        text: "Nada más entrar está el mostrador, con el logotipo de Up iluminado. Aquí te damos la bienvenida, confirmamos tu cita y resolvemos tus dudas antes de pasar.",
        details: ["Confirmación de cita y datos", "Dudas sobre tratamientos y presupuestos"],
        photos: [
            { src: recepcion, alt: "Mostrador de recepción con el logotipo iluminado y el pasillo al fondo" },
            { src: recepcionVertical, alt: "Mostrador de recepción con flores, visto de cerca" },
        ],
    },
    {
        id: "sala-de-espera",
        label: "Sala de espera",
        title: "Esperas en una sala pensada para familias",
        text: "Junto a recepción está la sala de espera, con luz natural y música tranquila. Los peques tienen su propio rincón con tipi, cuentos, juguetes y mesas a su altura, para que la visita empiece jugando.",
        details: ["Zona de juegos infantil", "Butacas cómodas y luz natural"],
        photos: [
            { src: salaEspera, alt: "Sala de espera con tipi, mesas infantiles y butacas junto a la ventana" },
            { src: salaDesdeRecepcion, alt: "Recepción y sala de espera vistas desde la entrada" },
        ],
    },
    {
        id: "gabinetes",
        label: "Gabinetes",
        title: "Pasas a tu gabinete",
        text: "Los gabinetes están a lo largo del pasillo. Cada uno tiene su sillón y una pantalla donde te enseñamos tus radiografías mientras te explicamos el tratamiento. Hay una butaca para que quien te acompañe pueda quedarse contigo, y la radiografía panorámica se hace aquí mismo.",
        details: ["Pantalla para ver tus pruebas", "Butaca para el acompañante", "Radiografía panorámica en la clínica"],
        photos: [
            { src: gabinete, alt: "Gabinete dental con sillón de tratamiento y ventana" },
            { src: gabinete2, alt: "Gabinete dental con sillón y pantalla en la pared para el paciente" },
            { src: gabineteAcompanante, alt: "Butaca para el acompañante dentro del gabinete" },
            { src: pasillo, alt: "Pasillo de acceso a los gabinetes" },
            { src: radiografia, alt: "Equipo de radiografía panorámica" },
        ],
    },
    {
        id: "despacho",
        label: "Despacho",
        title: "Hablamos de tu plan en el despacho",
        text: "Antes de empezar cualquier tratamiento nos sentamos contigo, sin prisas, para explicarte el diagnóstico, las opciones que tienes y entregarte el presupuesto por escrito.",
        details: ["Diagnóstico explicado con calma", "Presupuesto por escrito y sin compromiso"],
        photos: [
            { src: despacho, alt: "Despacho de consulta con mesa de cristal redonda y pared vegetal" },
            { src: despacho2, alt: "Despacho de consulta con mesa redonda y pantalla en la pared" },
        ],
    },
    {
        id: "aseos",
        label: "Aseos",
        title: "Y si lo necesitas, el aseo",
        text: "Para antes o después de la cita, un aseo para pacientes, con espejo iluminado y papel pintado de hojas.",
        details: ["Aseo para pacientes"],
        photos: [
            { src: aseo, alt: "Aseo de pacientes con lavabo y espejo redondo iluminado" },
            { src: aseo2, alt: "Detalle del aseo con mueble de madera y papel pintado vegetal" },
        ],
    },
];

export default tour;
