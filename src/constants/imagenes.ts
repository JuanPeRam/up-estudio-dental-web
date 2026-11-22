/**
 * Opciones del retrato de TeamCard. Las comparten la tarjeta y su precarga (PreloadImage en OurTeam):
 * si no coinciden, el navegador descarga la foto dos veces.
 */
export const retratoTarjeta = {
  widths: [300, 600, 900],
  sizes: "(min-width: 1000px) 380px, (min-width: 640px) 45vw, 90vw",
  quality: 80,
};
