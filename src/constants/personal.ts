const phoneNumber = 649039327
const fixedNumber = 919931329

/** Agrupa un número de 9 cifras de tres en tres: 649 039 327 */
const formatPhone = (n: number | string) =>
    String(n).replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")

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
    address: "C. Andrómeda, 48, 28938 Móstoles, Madrid",
    mapsUrl: "https://g.co/kgs/uj6iDgM",
    googleReviewsUrl: "https://g.co/kgs/uj6iDgM",
    hours: [
        { days: "Lunes a viernes", time: "10:00–13:30" },
        { days: "", time: "16:00–20:30" },
        { days: "Sábados", time: "10:00–14:00" },
    ],
}

/** Enlace de WhatsApp con un mensaje prerredactado opcional */
const whatsappLink = (message?: string) =>
    `https://wa.me/34${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

export {
    phoneNumber, fixedNumber, formatPhone, contact, whatsappLink
}
