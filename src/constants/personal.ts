const phoneNumber = 649039327
const fixedNumber = 919931329

/** Agrupa un número de 9 cifras de tres en tres: 649 039 327 */
const formatPhone = (n: number | string) =>
    String(n).replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")

/**
 * Datos de la clínica (nombre, dirección, teléfonos). Son la única fuente para la web, los textos
 * legales y los datos estructurados de Google: deben coincidir con la ficha de Google Business Profile.
 */
const clinic = {
    name: "Up Estudio Dental y Estética",
    legalName: "Up Estudio Dental y Estética, S.L.",
    nif: "B10552917",
    /** Igual que en la ficha de Google Business Profile. */
    streetAddress: "C. Andrómeda, 48, Local 7",
    postalCode: "28938",
    locality: "Móstoles",
    region: "Madrid",
    country: "ES",
    geo: { latitude: 40.312004675050765, longitude: -3.8613156547374 },
    /** Identificador de la ficha de Google: reseñas, enlaces a Maps y datos estructurados. */
    googlePlaceId: "ChIJF6cQ9iiNQQ0RLAo-T1JCwfQ",
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

/** Horario: se muestra en la web y se envía a Google en los datos estructurados. */
const openingHours = [
    { label: "Lunes a viernes", days: weekdays, opens: "10:00", closes: "13:30" },
    { label: "", days: weekdays, opens: "16:00", closes: "20:30" },
    { label: "Sábados", days: ["Saturday"], opens: "10:00", closes: "14:00" },
]

/**
 * Aviso de urgencias que aparece en la portada, el horario, el pie y contacto.
 * Déjalo en null si la clínica deja de atender urgencias las 24 horas: desaparece de toda la web.
 * `line` es el teléfono que las atiende fuera de horario (confirmado: el móvil); la web lo enlaza.
 */
const emergencies: { short: string; long: string; line: "mobile" | "landline" } | null = {
    short: "Urgencias 24 h",
    long: "Urgencias odontológicas 24 h",
    line: "mobile",
}

const contact = {
    mobile: {
        display: formatPhone(phoneNumber),
        href: `tel:+34${phoneNumber}`,
    },
    landline: {
        display: formatPhone(fixedNumber),
        href: `tel:+34${fixedNumber}`,
    },
    email: "info@upestudiodental.com",
    /** Contacto del Delegado de Protección de Datos (DPO) */
    dpoEmail: "proteccion.datos@ceer.es",
    address: `${clinic.streetAddress}, ${clinic.postalCode} ${clinic.locality}, ${clinic.region}`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=Up+Estudio+Dental&query_place_id=${clinic.googlePlaceId}`,
    googleReviewsUrl: `https://search.google.com/local/reviews?placeid=${clinic.googlePlaceId}`,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${clinic.googlePlaceId}`,
    /** Horario agrupado por días: una franja sin etiqueta se suma a la anterior (mañana y tarde). */
    hours: openingHours.reduce<{ days: string; times: string[] }[]>((groups, h) => {
        const time = `${h.opens}–${h.closes}`;
        const last = groups.at(-1);
        if (!h.label && last) last.times.push(time);
        else groups.push({ days: h.label, times: [time] });
        return groups;
    }, []),
}

/** Teléfono de urgencias (o null si no se atienden): el que marca el aviso «Urgencias 24 h». */
const emergencyPhone = emergencies ? contact[emergencies.line] : null

/** Enlace de WhatsApp con un mensaje prerredactado opcional */
const whatsappLink = (message?: string) =>
    `https://wa.me/34${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

export {
    phoneNumber, fixedNumber, formatPhone, clinic, openingHours, emergencies, emergencyPhone, contact, whatsappLink
}
