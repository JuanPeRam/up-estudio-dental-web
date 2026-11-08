import type { APIRoute } from "astro";

/**
 * 410 Gone para páginas de la web anterior (Wix) que no tienen equivalente:
 * la tienda de ejemplo, eventos y programa de referidos. Google las retira del índice
 * antes que con un 404.
 */
export const gone: APIRoute = () =>
  new Response("Esta página ya no existe.", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
  });
