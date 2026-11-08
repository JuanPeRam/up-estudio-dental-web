import type { APIRoute } from "astro";
import { treatmentPath } from "@/constants/pages";

export const prerender = false;

/** Ruta antigua: /services?servicio=<slug> → /tratamientos/<slug> (301). */
export const GET: APIRoute = ({ url, redirect }) => {
  const slug = url.searchParams.get("servicio")?.replace(/[^a-z0-9-]/g, "");
  return redirect(slug ? treatmentPath(slug) : "/tratamientos", 301);
};
