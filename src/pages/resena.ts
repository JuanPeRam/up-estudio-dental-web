import type { APIRoute } from "astro";
import { contact } from "@/constants/personal";

export const prerender = false;

/**
 * Dirección corta para el QR y la pegatina NFC de la clínica: abre directamente el formulario
 * de reseña de Google. Redirección temporal (302) para poder cambiar el destino sin reimprimir.
 */
export const GET: APIRoute = ({ redirect }) => redirect(contact.writeReviewUrl, 302);
