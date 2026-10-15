---
name: carp-design-review
description: "Use when reviewing, refining, or adjusting a web, graphic, or interface design with CARP/CRAP principles: contrast, alignment, repetition, and proximity. Also trigger for requests to improve visual hierarchy, consistency, spacing, or readability using these principles."
---

# Ajuste de diseño con CARP

Aplica los principios de Contraste, Alineación, Repetición y Proximidad para hacer que un diseño sea más claro, legible y coherente. CARP también se conoce como CRAP por sus siglas en inglés. Ajusta el diseño existente de forma incremental: conserva su propósito, contenido, comportamiento, identidad visual y convenciones, salvo que el usuario pida cambiarlos.

## Flujo de trabajo

1. **Identifica el alcance.** Localiza la pantalla, página o componente que se quiere ajustar y lee sus estilos, estructura y componentes cercanos. Determina qué contenido y acciones son prioritarios y qué patrones visuales ya existen.
2. **Diagnostica con CARP.** Señala los problemas observables antes de editar. Prioriza los que dificultan encontrar, entender o usar información; evita cambios cosméticos sin un efecto claro.
3. **Aplica el ajuste más pequeño que resuelva el problema.** Mantén los cambios en los archivos y componentes responsables. Reutiliza tokens, componentes, escalas tipográficas y espaciados existentes.
4. **Comprueba el resultado.** Ejecuta la validación disponible y revisa la pantalla en tamaños de escritorio y móvil. Comprueba también que las acciones, estados y contenido sigan funcionando.
5. **Resume el resultado.** Indica qué principios CARP abordaste y qué verificaciones realizaste; menciona cualquier limitación pendiente.

## Principios

### C — Contraste

- Crea diferencias visuales claras entre niveles de información: título y cuerpo, acción principal y secundaria, estado activo e inactivo.
- Usa tamaño, peso, color, espacio o forma con intención; no dependas solo del color para comunicar estados o significado.
- Mantén legibilidad y estados de foco perceptibles. Evita intensificar todos los elementos: el contraste debe establecer una jerarquía, no competir por atención.

### A — Alineación

- Alinea elementos relacionados con ejes, bordes o una cuadrícula compartida; elimina desplazamientos que parezcan accidentales.
- Mantén consistentes los márgenes, el inicio de textos y la posición de controles entre secciones equivalentes.
- En diseños adaptables, conserva una alineación deliberada al cambiar de columnas o apilar contenido.

### R — Repetición

- Reutiliza de forma coherente las decisiones visuales existentes: tipografía, color, espaciado, radios, bordes, iconos y estilos de controles.
- Repite patrones para elementos con la misma función y permite variaciones cuando expresen una diferencia real de estado o jerarquía.
- Prefiere los tokens y componentes compartidos a valores aislados que introduzcan inconsistencias.

### P — Proximidad

- Agrupa etiquetas con sus controles, títulos con su contenido y acciones con el contexto al que pertenecen.
- Usa el espaciado para distinguir grupos y relacionar elementos; los elementos de un mismo grupo deben quedar más cerca entre sí que de los grupos vecinos.
- Evita contenedores, separadores o tarjetas adicionales cuando el espaciado y la jerarquía existentes ya comuniquen la relación.

## Criterios de implementación

- Inspecciona primero las convenciones visuales del proyecto y adapta el cambio al sistema existente; no impongas una estética nueva por aplicar CARP.
- Conserva el contenido y los flujos de uso. No elimines controles ni cambies su significado para simplificar la composición.
- Mantén accesibilidad: estructura semántica, controles operables, foco visible, texto legible y contraste suficiente. No uses color como única señal.
- Revisa que el contenido no se solape ni se recorte en móvil y escritorio, y que los elementos interactivos mantengan dimensiones estables.
- Si el cambio requiere una decisión de estilo que no se puede deducir del diseño o del pedido, pregunta antes de alterar la identidad visual.
