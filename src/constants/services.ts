import type { ImageMetadata } from "astro";
import maquina from "@/img/UP-Gallery/Up-Machine.jpg";
import cabina from "@/img/UP-Gallery/Box1.jpg";
import gabinete22 from "@/img/UP-Gallery/Box22.jpg";
import gabinete2 from "@/img/UP-Gallery/Box2.jpg";
import gabinete23 from "@/img/UP-Gallery/Box23.jpg";
import cabina12 from "@/img/UP-Gallery/Box12.jpg";
import despacho from "@/img/UP-Gallery/Office2.jpg";
import pasillo from "@/img/UP-Gallery/Boxes.jpg";

interface Row {
    name: string;
    text: string;
    value?: string;
}

interface ServiceMeta {
    slug: string;
    title: string;
    /** Una línea con un dato, para la lista de la portada */
    line: string;
    /** Valor a la derecha de la fila: precio o duración */
    value: string;
    /** Línea corta para la tarjeta del menú */
    menuLine: string;
    image: ImageMetadata;
    imageAlt: string;
    detail: {
        h1: string;
        lead: string;
        facts: { label: string; value: string }[];
        process: { h2: string; line: string; rows: Row[]; image: ImageMetadata; imageAlt: string };
        questions: { h2: string; line: string; items: { q: string; a: string }[] };
        service: string;
    };
}

const services: ServiceMeta[] = [
    {
        slug: "revisiones-dentales",
        title: "Revisión dental",
        line: "Exploración, radiografías y presupuesto por escrito.",
        value: "Gratis",
        menuLine: "Gratis, unos 15 minutos",
        image: maquina,
        imageAlt: "Equipo de radiografía panorámica de la clínica",
        detail: {
            h1: "Revisión dental gratis en Móstoles",
            lead: "Revisión, estudio radiográfico, diagnóstico y presupuesto sin coste. Una visita periódica detecta a tiempo caries, desgastes o problemas de encías, cuando todavía son fáciles de tratar.",
            facts: [
                { label: "Precio", value: "Gratis" },
                { label: "Duración", value: "15 min aprox." },
                { label: "Frecuencia", value: "1 o 2 veces al año" },
            ],
            process: {
                h2: "Tu revisión en cuatro pasos",
                line: "Sales con el diagnóstico y, si hace falta tratamiento, con el presupuesto por escrito.",
                rows: [
                    { name: "Historial", text: "Repasamos tu historial médico y el motivo de tu visita." },
                    { name: "Exploración", text: "Esmalte, caries, encías y mordida, diente a diente." },
                    { name: "Radiografías", text: "Las necesarias para ver raíces, hueso y caries entre dientes." },
                    { name: "Diagnóstico", text: "Te explicamos las opciones y te damos el presupuesto cerrado." },
                ],
                image: gabinete23,
                imageAlt: "Gabinete dental con sillón y rincón de espera",
            },
            questions: {
                h2: "Qué incluye la revisión",
                line: "Todo lo que necesitas para decidir, sin compromiso.",
                items: [
                    { q: "¿Cuánto cuesta?", a: "Nada. La revisión, las radiografías necesarias y el presupuesto por escrito son gratis." },
                    { q: "¿Qué me llevo de la visita?", a: "Un plan de tratamiento personalizado, el presupuesto cerrado y consejos de higiene para tu caso." },
                    { q: "¿Cada cuánto debo venir?", a: "Una o dos veces al año. Si tienes tendencia a acumular sarro, cada seis meses." },
                    { q: "¿Necesito radiografías?", a: "Solo las necesarias para ver lo que no se aprecia a simple vista: raíces, hueso, muelas del juicio y caries entre dientes." },
                    { q: "¿Cómo cambio o anulo la cita?", a: "Llama a recepción con antelación al 919 931 329 o escribe por WhatsApp al 649 039 327." },
                ],
            },
            service: "una revisión dental",
        },
    },
    {
        slug: "limpieza-bucal",
        title: "Limpieza bucal",
        line: "Ultrasonidos y pulido para quitar el sarro y la placa.",
        value: "30–45 min",
        menuLine: "Una sesión de 30 a 45 minutos",
        image: gabinete2,
        imageAlt: "Gabinete dental luminoso con sillón de tratamiento",
        detail: {
            h1: "Limpieza bucal profesional en Móstoles",
            lead: "Retiramos con ultrasonidos el sarro y la placa de donde el cepillo no llega y pulimos el esmalte para que tarde más en volver. Una sesión de 30 a 45 minutos, sin dolor.",
            facts: [
                { label: "Precio", value: "Según valoración" },
                { label: "Duración", value: "30–45 min" },
                { label: "Frecuencia", value: "Al menos una vez al año" },
            ],
            process: {
                h2: "Cómo es la limpieza",
                line: "Si tienes los dientes sensibles, ajustamos la potencia del equipo.",
                rows: [
                    { name: "Ultrasonidos", text: "Retiran el sarro de la superficie y bajo la línea de la encía." },
                    { name: "Pulido", text: "Una pasta profiláctica deja el esmalte liso y retrasa la placa." },
                    { name: "Gel desensibilizante", text: "Lo aplicamos si notas sensibilidad durante o después." },
                ],
                image: pasillo,
                imageAlt: "Pasillo de acceso a los gabinetes",
            },
            questions: {
                h2: "Señales de que ya te toca",
                line: "Si notas alguna, pide cita: una limpieza al año mantiene a raya el sarro.",
                items: [
                    { q: "¿Duele la limpieza?", a: "No. Si tienes los dientes sensibles, ajustamos la potencia del equipo y aplicamos un gel desensibilizante." },
                    { q: "¿Te sangran las encías al cepillarte?", a: "Es la primera señal de gingivitis. Una encía sana no sangra, por mucho que la cepilles." },
                    { q: "¿Tienes mal aliento persistente?", a: "La placa entre el diente y la encía libera compuestos que el cepillado no llega a arrastrar." },
                    { q: "¿Ves manchas o sarro?", a: "El sarro es una banda amarillenta en la base del diente que ya no se quita en casa." },
                    { q: "¿Notas la encía inflamada?", a: "Rojas, hinchadas o retraídas, dejando el diente más largo de lo habitual." },
                ],
            },
            service: "una limpieza bucal",
        },
    },
    {
        slug: "blanqueamiento-dental",
        title: "Blanqueamiento dental",
        line: "Gel profesional supervisado, con resultado natural.",
        value: "45–60 min",
        menuLine: "Sesión de 45 a 60 minutos",
        image: gabinete22,
        imageAlt: "Gabinete dental con sillón y equipo de tratamiento",
        detail: {
            h1: "Blanqueamiento de dientes en Móstoles",
            lead: "Aclaramos el tono del diente con un gel de uso profesional, siempre después de valorar tus encías y tu esmalte para adaptarlo a tu caso y reducir la sensibilidad.",
            facts: [
                { label: "Precio", value: "Según valoración" },
                { label: "Sesión", value: "45–60 min" },
                { label: "Efecto", value: "De 1 a 3 años" },
            ],
            process: {
                h2: "Las tres fases del blanqueamiento",
                line: "Controlamos el tono en cada tanda para que el blanco sea natural.",
                rows: [
                    { name: "Valoración previa", text: "Revisamos encías y esmalte y descartamos caries activas." },
                    { name: "Sesión", text: "Protegemos la encía y aplicamos el gel por tandas." },
                    { name: "Mantenimiento", text: "Pautas para 48 horas y, si hace falta, férulas para casa." },
                ],
                image: despacho,
                imageAlt: "Despacho de consulta con mesa de cristal",
            },
            questions: {
                h2: "Preguntas sobre el blanqueamiento",
                line: "Lo que más nos preguntan en consulta.",
                items: [
                    { q: "¿Cómo empieza el tratamiento?", a: "Con la valoración: revisamos encías y esmalte y, si hace falta, hacemos antes una limpieza para que el gel actúe igual en todo el diente." },
                    { q: "¿Daña el esmalte?", a: "No. El gel actúa sobre los pigmentos del diente, no desgasta el esmalte, siempre que lo aplique un profesional." },
                    { q: "¿Voy a tener sensibilidad?", a: "Es lo más habitual y pasa en 24 a 48 horas. Ajustamos el tratamiento para reducirla." },
                    { q: "¿Funciona sobre fundas o empastes?", a: "No: esos materiales no cambian de color. Lo valoramos antes para que el tono case." },
                    { q: "¿Cuánto dura el resultado?", a: "De uno a tres años. Café, té, vino tinto y tabaco aceleran la vuelta al tono original." },
                ],
            },
            service: "un blanqueamiento dental",
        },
    },
    {
        slug: "medicina-estetica",
        title: "Medicina estética facial",
        line: "Arrugas, rejuvenecimiento y labios con productos reabsorbibles.",
        value: "Según valoración",
        menuLine: "Con consulta previa",
        image: cabina,
        imageAlt: "Gabinete de medicina estética con camilla",
        detail: {
            h1: "Medicina estética facial en Móstoles",
            lead: "Tratamientos faciales con productos reabsorbibles y un criterio prudente: que se te vea descansado o descansada, no que se note el tratamiento. Todo empieza por una consulta.",
            facts: [
                { label: "Primera visita", value: "Consulta de valoración" },
                { label: "Sesión", value: "20–45 min" },
                { label: "Productos", value: "Reabsorbibles" },
            ],
            process: {
                h2: "Tratamientos de medicina estética",
                line: "Vuelves a tu rutina el mismo día en todos ellos.",
                rows: [
                    { name: "Rejuvenecimiento facial", text: "Relleno dérmico que suaviza pliegues y estimula el colágeno.", value: "30–45 min" },
                    { name: "Tratamiento de arrugas", text: "Frente, entrecejo y contorno de ojos. Efecto en 3 a 7 días.", value: "20 min" },
                    { name: "Aumento de labios", text: "Volumen y forma con ácido hialurónico, resultado inmediato.", value: "30 min" },
                ],
                image: cabina12,
                imageAlt: "Camilla de estética junto a la ventana",
            },
            questions: {
                h2: "Antes de tu tratamiento",
                line: "Decidimos juntos qué merece la pena hacer y qué no.",
                items: [
                    { q: "¿Hace falta una consulta previa?", a: "Sí. Valoramos tu rostro y te explicamos qué podemos hacer antes de proponerte nada." },
                    { q: "¿Puedo volver a mi rutina el mismo día?", a: "Sí. Son tratamientos ambulatorios y vuelves a tu rutina el mismo día." },
                    { q: "¿Se va a notar?", a: "Buscamos un resultado natural: que se te vea descansado o descansada, no tratado." },
                    { q: "¿Cuánto dura el efecto de las arrugas?", a: "Entre cuatro y seis meses. El efecto aparece a los 3 a 7 días." },
                    { q: "¿Los productos son seguros?", a: "Usamos productos reabsorbibles, como el ácido hialurónico, que el propio organismo genera." },
                ],
            },
            service: "un tratamiento de medicina estética",
        },
    },
];

const defaultServiceSlug = services[0].slug;

export type { ServiceMeta };
export { services, defaultServiceSlug };
