# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Familias de Móstoles y alrededores (madres y padres) que buscan un dentista de confianza para sus hijos y para ellos mismos: la revisión de los peques, una limpieza, una urgencia o, más adelante, un tratamiento mayor (ortodoncia, implantes, blanqueamiento). Open decision: no hay datos de analítica sobre cómo llegan (móvil o escritorio, Google o redes); el diseño actual asume uso mayoritario en móvil.

Audiencias secundarias confirmadas en el contenido: adultos que buscan un tratamiento concreto y comparan clínicas, y pacientes con una urgencia.

## Product Purpose

Web oficial de Up Estudio Dental y Estética S.L., clínica dental familiar en Móstoles desde 2022. Existe para que una familia del barrio conozca la clínica, confíe en su equipo y pida cita.

El éxito es que el visitante **escriba por WhatsApp** (móvil 649 039 327) para pedir cita. Llamar al fijo (919 931 329) y el formulario de contacto son alternativas, no el objetivo principal.

## Positioning

Una sola clínica de barrio donde toda la familia se trata con el mismo equipo de especialistas: odontopediatría, ortodoncia e Invisalign, implantes, cirugía, periodoncia y estética, con una zona de juegos infantil y un trato cercano. La primera visita es gratuita e incluye revisión, radiografías y presupuesto por escrito.

## Operating Context

- El paciente contacta por WhatsApp, teléfono o el formulario (que llega por correo a la clínica vía Resend); la cita se gestiona fuera de la web.
- La clínica edita servicios, especialidades de la portada y equipo desde el panel Keystatic (`/keystatic`); el número de entradas cambia sin pasar por desarrollo.
- Las reseñas y la nota media de Google se leen en vivo de la ficha de Google Business; no se guardan en la web.
- Datos de la clínica (NIF, dirección, teléfonos, horario, urgencias) centralizados en `src/constants/personal.ts`; de ahí salen la web, los textos legales y los datos estructurados.
- Despliegue en Vercel; dominio `www.upestudiodental.es`. Migración desde una web anterior en Wix con redirecciones 301.

## Capabilities and Constraints

- **Fuente de la información:** los datos de la clínica (servicios, duraciones, horarios, teléfonos, dirección, datos legales, equipo y sus títulos) se toman de la web oficial actual, `https://www.upestudiodental.es` (Wix). El diseño, la estructura y los textos de interfaz son los de esta web y no se copian de la oficial. Excepciones decididas por el usuario (noviembre de 2026): el correo es `info@upestudiodental.com` (la oficial usa `upestudiodental@gmail.com`), la cita se pide por WhatsApp (la oficial usa «Reservar ahora» con el calendario de Wix), no se publican precios (la oficial muestra limpieza 50 € y blanqueamiento 500 €), no hay ficha de higienista dental, y se mantienen datos que la oficial no menciona (sesiones de endodoncia, efecto del blanqueamiento, primera visita infantil, frecuencias, escáner iTero y radiografía digital). Ante una diferencia nueva, consultar al usuario antes de decidir.

- Tratamientos con ficha propia e indexable: revisiones dentales (sin coste), limpieza bucal, blanqueamiento Philips Zoom, implantes, ortodoncia e Invisalign, odontopediatría, endodoncia, periodoncia y cirugía bucal.
- Tecnología en clínica: escáner intraoral iTero, radiografía digital propia, blanqueamiento Philips Zoom.
- **Urgencias 24 h**: confirmado; se mantiene. Si dejara de ofrecerse, se apaga con `emergencies = null` en `src/constants/personal.ts`.
- **Primera revisión gratis** (revisión, radiografías y presupuesto por escrito, sin compromiso): confirmado; se mantiene.
- **Precios**: no se publican como dato en la web («presupuesto tras el estudio»). Podrán tratarse más adelante a través de un chatbot, no como cifras en las páginas. Open decision: el enlace de la portada «Ver tratamientos y precios» promete precios que la web no muestra.
- Horario: lunes a viernes 10:00–13:30 y 16:00–20:30; sábados 10:00–14:00.
- Sin cookies propias; formulario con consentimiento de privacidad obligatorio.
- Open decisions (en `TODO.md`): apellido de la Dra. Nilyam (Iturniza/Iturriza), correo `info@upestudiodental.com` frente al dominio `.es`, criterio de las etiquetas del equipo, revisión legal de las políticas de privacidad y cookies, formación y nº de colegiado de cada profesional.

## Brand Commitments

- Nombre: Up Estudio Dental y Estética («Up»). Logotipo en `src/img/up-logo*.png` (falta versión vectorial SVG).
- Voz: cercana, en tuteo, sencilla y sin tecnicismos innecesarios («los peques», «te explicamos», «sin sorpresas»). Explica el tratamiento paso a paso y lo que incluye.
- Pertenencia al barrio confirmada: descuento con el **Carné Joven Madrid**, empresa asociada a **Móstoles Empresa** y reconocimiento en **«Lo mejor del barrio» de Móstoles**.

## Evidence on Hand

- Fotos reales de la clínica, el equipo, la zona infantil y la tecnología: `src/img/up/`, `src/img/UP-Gallery/`, `src/assets/cms/`.
- Retratos y biografías del equipo: `src/content/equipo/*.yaml` (Dra. Cristina Umérez, más de 25 años en odontopediatría y ortodoncia; Dr. Rafael Sosa, cirujano e implantólogo con más de 30 años; Dra. Isabel Sosa, implantoprótesis; Dra. Nilyam, periodoncia).
- Reseñas de Google en vivo (hasta 5 de Google; se muestran 3 de 4 estrellas o más). No hay testimonios guardados en la web: no inventarlos ni copiarlos de forma permanente.
- No hay precios, casos clínicos con antes/después ni cifras de pacientes publicadas: no fabricarlos.

## Product Principles

1. Cercanía antes que espectáculo: la familia tiene que sentir que entra en una clínica de barrio con trato humano.
2. Todo camino lleva a WhatsApp: pedir cita debe estar siempre a un toque, sobre todo en el móvil.
3. Transparencia sin cifras: explicar qué incluye cada tratamiento y cómo es, paso a paso; el precio se da tras el estudio, nunca como promesa en la página.
4. Solo hechos verificables: reseñas reales, equipo real, fotos reales. Nada de testimonios, premios o datos inventados.
5. La clínica edita su contenido: los diseños deben aguantar que cambie el número de tratamientos, especialidades o personas desde Keystatic.

## Accessibility & Inclusion

Objetivo WCAG 2.1 AA, con contraste comprobado en claro (la web solo tiene tema claro), navegación por teclado, lector de pantalla y respeto a `prefers-reduced-motion`. Sin requisitos específicos más allá de AA confirmados con la clínica.
