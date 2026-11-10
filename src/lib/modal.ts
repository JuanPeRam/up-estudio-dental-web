/**
 * Deja una capa modal (menú móvil, visor de fotos) como lo único usable de la página:
 * marca `inert` todo lo demás, así Tab no se escapa al contenido de detrás ni el lector de
 * pantalla lo recorre. Es lo mismo que hace <dialog>.showModal(), sin cambiar el marcado.
 *
 * Devuelve la función que lo deshace. Llámala antes de devolver el foco al botón que abrió.
 */
export function isolate(layer: HTMLElement): () => void {
  const touched: HTMLElement[] = [];
  for (let node: HTMLElement | null = layer; node && node !== document.body; node = node.parentElement) {
    for (const sibling of Array.from(node.parentElement?.children ?? [])) {
      if (sibling === node || !(sibling instanceof HTMLElement) || sibling.inert) continue;
      if (sibling.tagName === "SCRIPT" || sibling.tagName === "STYLE") continue;
      sibling.inert = true;
      touched.push(sibling);
    }
  }
  return () => touched.forEach((el) => (el.inert = false));
}
