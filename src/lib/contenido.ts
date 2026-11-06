import { getCollection } from "astro:content";

/** Lecturas de las colecciones editables, ordenadas por el campo «orden» y, a igualdad, por nombre. */
export async function getServicios() {
  const all = await getCollection("servicios");
  return all.sort((a, b) => a.data.orden - b.data.orden || a.data.titulo.localeCompare(b.data.titulo, "es"));
}

export async function getEspecialidades() {
  const all = await getCollection("especialidades");
  return all.sort((a, b) => a.data.orden - b.data.orden || a.data.titulo.localeCompare(b.data.titulo, "es"));
}

export async function getEquipo() {
  const all = await getCollection("equipo");
  return all.sort((a, b) => a.data.orden - b.data.orden || a.data.nombre.localeCompare(b.data.nombre, "es"));
}
