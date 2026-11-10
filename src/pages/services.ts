import type { APIRoute } from "astro";
import { treatmentPath } from "@/constants/pages";
import { getServicios } from "@/lib/contenido";

export const prerender = false;

/**
 * Ruta antigua: /services?servicio=<slug> → /tratamientos/<slug> (301).
 * Si el tratamiento ya no existe, a la lista de tratamientos en vez de a una 404.
 */
export const GET: APIRoute = async ({ url, redirect }) => {
  const slug = url.searchParams.get("servicio");
  const exists = slug ? (await getServicios()).some((s) => s.id === slug) : false;
  return redirect(exists && slug ? treatmentPath(slug) : "/tratamientos", 301);
};
