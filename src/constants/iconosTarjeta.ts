/**
 * Iconos que se pueden elegir en Keystatic para las tarjetas informativas de un tratamiento
 * (señales, qué tratamos, cuándo consultar). Los SVG están en src/icons/; si añades uno aquí,
 * añade también su fichero. Los usan keystatic.config.ts y src/content.config.ts.
 */
export const iconosTarjeta = [
  { value: "tooth", label: "Diente" },
  { value: "zap", label: "Dolor (rayo)" },
  { value: "thermometer", label: "Frío o calor (termómetro)" },
  { value: "flame", label: "Inflamación (llama)" },
  { value: "droplet", label: "Sangrado (gota)" },
  { value: "wind", label: "Aliento (aire)" },
  { value: "eye", label: "Se ve a simple vista (ojo)" },
  { value: "move-vertical", label: "Encía que se retrae (flechas verticales)" },
  { value: "move-horizontal", label: "Diente que se mueve (flechas horizontales)" },
  { value: "spacing", label: "Espacio entre dientes" },
  { value: "puzzle", label: "Mordida que no encaja (puzle)" },
  { value: "scan-face", label: "Cara y mordida" },
  { value: "scan-search", label: "Revisión o diagnóstico (lupa)" },
  { value: "shield-check", label: "Prevención (escudo)" },
  { value: "bandage", label: "Cuidado tras la intervención (tirita)" },
  { value: "plus", label: "Reponer (más)" },
  { value: "smile", label: "Niños (sonrisa)" },
  { value: "user-round", label: "Adultos (persona)" },
  { value: "users", label: "Familia" },
  { value: "clock", label: "Tiempo" },
  { value: "check-circle", label: "Genérico (círculo con marca)" },
] as const;

export type IconoTarjeta = (typeof iconosTarjeta)[number]["value"];
export const iconoTarjetaPorDefecto: IconoTarjeta = "check-circle";
