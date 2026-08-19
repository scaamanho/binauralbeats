// Limpieza de service workers legacy
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    const rootScope = new URL('./', location.href).href;
    const legacyAppScope = new URL('./.vscode/app/', location.href).href;
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(
      registrations
        .filter(r => r.scope === rootScope || r.scope === legacyAppScope)
        .map(r => r.unregister())
    );
  });
}

// Header con estado "scrolled"
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const translations = {
  es: {
    pageTitle: 'Binaural Beats Pro · Ritmos binaurales para foco, calma y descanso',
    metaDescription: 'Binaural Beats Pro — Generador de ondas cerebrales para foco, calma y descanso. PWA instalable, funciona sin cuenta.',
    homeLabel: 'Binaural Beats Pro — inicio', mainNavigation: 'Navegación principal', howItWorks: 'Cómo funciona', benefits: 'Beneficios', guide: 'Guía', advice: 'Consejos', install: 'Instalar', openAppShort: 'Instalar app →',
    eyebrow: 'Generador de ondas cerebrales · PWA', heroHeadingStart: 'Crea sesiones binaurales para', focus: 'foco', calm: 'calma', heroHeadingAnd: 'y', rest: 'descanso',
    heroText: 'Crea sesiones binaurales personalizadas para concentrarte, relajarte o preparar el descanso. Elige una presintonía, ajusta la frecuencia base y escucha con auriculares.',
    openApplication: 'Abrir la aplicación', installAsApp: 'Instalar como app', noAccount: 'Funciona sin cuenta', savedLocally: 'Guarda programas localmente', mobileAndDesktop: 'Diseñada para móvil y PC', livePreview: 'Vista previa en vivo · la PWA se instala desde aquí',
    howHeadingStart: 'Dos tonos cercanos crean una', thirdRhythm: 'tercera percepción rítmica', howLead: 'La app envía una frecuencia ligeramente distinta a cada oído. Tu cerebro integra ambas y percibe un ritmo a la frecuencia de la diferencia.',
    stepOneTitle: 'Elige una intención', stepOneText: 'Presets orientados a foco, calma, meditación, energía, siesta o sueño profundo.', stepTwoTitle: 'Usa auriculares', stepTwoText: 'La app envía una frecuencia a cada oído. La diferencia entre ambas es el ritmo binaural percibido.', stepThreeTitle: 'Ajusta tu sesión', stepThreeText: 'Controla volumen y frecuencia base, o crea programas personalizados con cambios en el tiempo.',
    benefitsHeadingStart: 'Una herramienta sencilla para', mentalRoutines: 'acompañar rutinas mentales', focusTitle: 'Foco sostenido', focusText: 'Presets beta y gamma para sesiones de estudio, lectura o trabajo profundo.', relaxationTitle: 'Relajación guiada', relaxationText: 'Frecuencias alpha y theta para crear un entorno auditivo más calmado.', restTitle: 'Descanso preparado', restText: 'Opciones delta para acompañar rutinas nocturnas o pausas breves.', programsTitle: 'Programas propios', programsText: 'Editor visual para diseñar curvas de frecuencia y guardarlas en el dispositivo.',
    guideKicker: 'Guía de escucha', guideHeading: 'Qué son los ritmos binaurales y cómo interpretar sus frecuencias.', guideLead: 'Los ritmos binaurales se perciben al escuchar dos tonos cercanos, uno por cada oído. La diferencia entre ambos tonos es la frecuencia de batido; por eso se recomiendan auriculares estéreo.', guideMechanism: 'La diferencia entre los tonos no es un tercer sonido físico en los auriculares: el sistema auditivo la integra como un pulso percibido. El cerebro muestra actividad eléctrica en distintas bandas durante el sueño, la vigilia, la atención o la relajación; el audio no mide ni controla esa actividad, sino que ofrece una señal sonora para acompañar una rutina.', guideEvidence: 'Se estudia si el cerebro puede sincronizar parcialmente su actividad con la frecuencia del pulso percibido, un fenómeno conocido como respuesta de seguimiento de frecuencia. Aún no hay consenso sobre cómo se traduciría eso en atención, estado de ánimo o memoria: los estudios muestran resultados mixtos y no reemplazan tratamiento ni consejo profesional.', deltaGuideTitle: 'Delta', deltaGuideText: 'Predomina habitualmente durante el sueño profundo. Se usa como fondo para rutinas nocturnas o pausas de descanso.', thetaGuideTitle: 'Theta', thetaGuideText: 'Se observa en somnolencia, imaginación y prácticas contemplativas. Puede acompañar meditación o respiración pausada.', alphaGuideTitle: 'Alpha', alphaGuideText: 'Se asocia con relajación despierta y atención tranquila. Suele elegirse para bajar el ritmo sin buscar dormir.', betaGuideTitle: 'Beta', betaGuideText: 'Se vincula con atención y actividad mental. Puede encajar en bloques breves de lectura, estudio o trabajo.', gammaGuideTitle: 'Gamma', gammaGuideText: 'Se estudia en relación con procesamiento intenso de información. Úsala con volumen cómodo y en sesiones cortas.', guideSessionTitle: 'Cómo transcurre una sesión', guideSessionText: 'La aplicación reproduce una frecuencia base en un oído y una segunda frecuencia ligeramente distinta en el otro. Por ejemplo, 200 Hz y 210 Hz producen una diferencia de 10 Hz. La frecuencia base define el tono que oyes; la diferencia define el batido binaural percibido.', guideBodyTitle: 'Qué puede sentirse en el cuerpo', guideBodyText: 'Al escuchar un tono repetitivo en un entorno tranquilo, algunas personas describen cambios de atención, respiración más pausada o una sensación de relajación. Estas respuestas también dependen del volumen, el cansancio, el contexto y las expectativas; no son un efecto asegurado de una frecuencia concreta.', guideChoiceTitle: 'Cómo elegir una frecuencia', guideChoiceText: 'Para lectura o trabajo, prueba una sesión beta breve. Para una pausa o meditación, comienza con alpha o theta. Para descansar, usa delta sólo cuando no necesites mantenerte alerta. Cambia una variable por vez y anota cómo te resulta.', guideNote: 'Empieza con 10 a 20 minutos a volumen bajo o medio y prueba una sola frecuencia por sesión. Si el audio resulta irritante, distrae o empeora tu concentración, detén la sesión. No la uses al conducir ni la dejes sonando toda la noche. Si tienes una condición neurológica, auditiva o médica, consulta antes con un profesional.', adviceKicker: 'Consejos de uso', adviceHeading: 'Escucha con intención y volumen cómodo.', adviceOne: 'Empieza con sesiones cortas de 10 a 20 minutos y observa cómo te sientes.', adviceTwo: 'Mantén el volumen bajo o medio; no hace falta que los tonos dominen el ambiente.', adviceThree: 'Evita usarla mientras conduces o realizas tareas que requieran atención externa constante.', adviceFour: 'Si tienes condiciones neurológicas, auditivas o médicas, consulta con un profesional antes de usar ritmos binaurales.',
    installHeading: 'Instálala como PWA en móvil o escritorio.', installLead: 'La instalación se realiza desde la aplicación. Ábrela y usa el aviso de instalación o el menú del navegador para elegir “Instalar aplicación” o “Añadir a pantalla de inicio”.', openToInstall: 'Abrir app para instalar', openWithoutInstalling: 'Abrir sin instalar', installNote: 'La PWA corresponde a la aplicación, no a esta landing.', addToHome: 'Añadir a pantalla de inicio', offlineNote: 'Funciona sin conexión tras la primera carga · sin cuenta · sin anuncios.', goToApp: 'Ir a la aplicación →'
  },
  en: {
    pageTitle: 'Binaural Beats Pro · Binaural rhythms for focus, calm and rest',
    metaDescription: 'Binaural Beats Pro — A brainwave generator for focus, calm and rest. Installable PWA with no account required.',
    homeLabel: 'Binaural Beats Pro — home', mainNavigation: 'Main navigation', howItWorks: 'How it works', benefits: 'Benefits', guide: 'Guide', advice: 'Advice', install: 'Install', openAppShort: 'Install app →',
    eyebrow: 'Brainwave generator · PWA', heroHeadingStart: 'Create binaural sessions for', focus: 'focus', calm: 'calm', heroHeadingAnd: 'and', rest: 'rest',
    heroText: 'Create custom binaural sessions to focus, relax or prepare for rest. Choose a preset, adjust the base frequency and listen with headphones.',
    openApplication: 'Open the app', installAsApp: 'Install as app', noAccount: 'No account needed', savedLocally: 'Programs saved locally', mobileAndDesktop: 'Built for mobile and desktop', livePreview: 'Live preview · install the PWA from here',
    howHeadingStart: 'Two nearby tones create a', thirdRhythm: 'third rhythmic perception', howLead: 'The app sends a slightly different frequency to each ear. Your brain combines them and perceives a rhythm at their difference frequency.',
    stepOneTitle: 'Choose an intention', stepOneText: 'Presets for focus, calm, meditation, energy, naps and deep sleep.', stepTwoTitle: 'Use headphones', stepTwoText: 'The app sends one frequency to each ear. The difference between them is the perceived binaural rhythm.', stepThreeTitle: 'Tune your session', stepThreeText: 'Control the volume and base frequency, or build custom programs that change over time.',
    benefitsHeadingStart: 'A simple tool to', mentalRoutines: 'support mental routines', focusTitle: 'Sustained focus', focusText: 'Beta and gamma presets for study, reading or deep work sessions.', relaxationTitle: 'Guided relaxation', relaxationText: 'Alpha and theta frequencies to create a calmer listening environment.', restTitle: 'Ready for rest', restText: 'Delta options to support bedtime routines or short breaks.', programsTitle: 'Your own programs', programsText: 'A visual editor to design frequency curves and save them on your device.',
    guideKicker: 'Listening guide', guideHeading: 'What binaural beats are and how to interpret their frequencies.', guideLead: 'Binaural beats are perceived when you listen to two nearby tones, one in each ear. The difference between the tones is the beat frequency, which is why stereo headphones are recommended.', guideMechanism: 'The difference between the tones is not a physical third sound in the headphones: the auditory system integrates it as a perceived pulse. The brain shows electrical activity in different bands during sleep, wakefulness, attention and relaxation; the audio does not measure or control that activity, but offers a sound signal to accompany a routine.', guideEvidence: 'Researchers are studying whether the brain can partly synchronize its activity with the perceived pulse frequency, a phenomenon known as the frequency-following response. There is still no consensus on how this might translate into attention, mood or memory: studies show mixed results and do not replace treatment or professional advice.', deltaGuideTitle: 'Delta', deltaGuideText: 'It is commonly prominent during deep sleep. It can be used as a backdrop for nighttime routines or rest breaks.', thetaGuideTitle: 'Theta', thetaGuideText: 'It is observed during drowsiness, imagination and contemplative practice. It may accompany meditation or slow breathing.', alphaGuideTitle: 'Alpha', alphaGuideText: 'It is associated with relaxed wakefulness and calm attention. It is often chosen to slow down without aiming to sleep.', betaGuideTitle: 'Beta', betaGuideText: 'It is linked with attention and mental activity. It may fit short reading, study or work blocks.', gammaGuideTitle: 'Gamma', gammaGuideText: 'It is studied in relation to intensive information processing. Use it at a comfortable volume and in short sessions.', guideSessionTitle: 'How a session works', guideSessionText: 'The app plays a base frequency in one ear and a slightly different second frequency in the other. For example, 200 Hz and 210 Hz create a 10 Hz difference. The base frequency defines the tone you hear; the difference defines the perceived binaural beat.', guideBodyTitle: 'What you may feel in the body', guideBodyText: 'When listening to a repetitive tone in a quiet setting, some people describe changes in attention, slower breathing or a sense of relaxation. These responses also depend on volume, fatigue, context and expectations; they are not a guaranteed effect of a specific frequency.', guideChoiceTitle: 'How to choose a frequency', guideChoiceText: 'For reading or work, try a short beta session. For a break or meditation, start with alpha or theta. For rest, use delta only when you do not need to stay alert. Change one variable at a time and note how it works for you.', guideNote: 'Start with 10 to 20 minutes at a low or moderate volume and try one frequency per session. If the audio feels irritating, distracting or worsens your concentration, stop the session. Do not use it while driving or leave it playing all night. If you have a neurological, hearing or medical condition, consult a professional first.', adviceKicker: 'Usage advice', adviceHeading: 'Listen intentionally at a comfortable volume.', adviceOne: 'Start with short 10 to 20 minute sessions and notice how you feel.', adviceTwo: 'Keep the volume low or moderate; the tones do not need to dominate the room.', adviceThree: 'Avoid using it while driving or doing tasks that require constant external attention.', adviceFour: 'If you have neurological, hearing or medical conditions, consult a professional before using binaural beats.',
    installHeading: 'Install it as a PWA on mobile or desktop.', installLead: 'Installation happens from the app. Open it and use the install prompt or your browser menu to choose “Install app” or “Add to Home Screen”.', openToInstall: 'Open app to install', openWithoutInstalling: 'Open without installing', installNote: 'The PWA is the application, not this landing page.', addToHome: 'Add to Home Screen', offlineNote: 'Works offline after the first load · no account · no ads.', goToApp: 'Go to the app →'
  }
};

Object.assign(translations.es, {
  deltaGuideText: 'Predomina habitualmente durante el sueño profundo. Se asocia con descanso y puede acompañar una rutina nocturna o una pausa de meditación; no se ha demostrado que produzca curación, alivio del dolor ni efectos hormonales.',
  thetaGuideText: 'Se observa en somnolencia, imaginación y prácticas contemplativas. Puede acompañar meditación, relajación profunda, respiración pausada o exploración creativa.',
  alphaGuideText: 'Se asocia con relajación despierta y atención tranquila. Suele elegirse para bajar el ritmo, mantener un foco sereno o empezar una tarea sin buscar dormir.',
  betaGuideText: 'Se vincula con atención focalizada, pensamiento analítico y actividad mental. Puede encajar en bloques breves de lectura, estudio, resolución de problemas o trabajo.',
  gammaGuideText: 'Se estudia en relación con atención intensa, procesamiento de información y detalle. Sus efectos sobre memoria o creatividad no están establecidos; úsala con volumen cómodo y en sesiones cortas.'
});

Object.assign(translations.en, {
  deltaGuideText: 'It is commonly prominent during deep sleep. It is associated with rest and may accompany a nighttime routine or meditation break; it has not been shown to cause healing, pain relief or hormonal effects.',
  thetaGuideText: 'It is observed during drowsiness, imagination and contemplative practice. It may accompany meditation, deep relaxation, slow breathing or creative exploration.',
  alphaGuideText: 'It is associated with relaxed wakefulness and calm attention. It is often chosen to slow down, maintain gentle focus or begin a task without aiming to sleep.',
  betaGuideText: 'It is linked with focused attention, analytical thinking and mental activity. It may fit short reading, study, problem-solving or work blocks.',
  gammaGuideText: 'It is studied in relation to intense attention, information processing and detail. Its effects on memory or creativity are not established; use it at a comfortable volume and in short sessions.'
});

Object.assign(translations.es, {
  frequencyReferenceTitle: 'Mapa práctico de frecuencias', frequencyReferenceText: 'Usa esta tabla para elegir un punto de partida. Las etiquetas describen contextos de uso habituales, no efectos garantizados de una frecuencia concreta.', frequencyTableRange: 'Rango', frequencyTableBand: 'Banda', frequencyTableUse: 'Uso habitual',
  frequencyDeltaOne: 'Rutina de sueño profundo y descanso muy tranquilo', frequencyDeltaTwo: 'Preparación para descanso reparador', frequencyDeltaThree: 'Desconexión, pausa nocturna o meditación lenta', frequencyThetaOne: 'Meditación profunda y atención interior', frequencyThetaTwo: 'Relajación profunda y exploración creativa', frequencyThetaThree: 'Visualización, transición al descanso e ideas libres', frequencyAlphaOne: 'Calma consciente y reducción del ritmo', frequencyAlphaTwo: 'Relajación alerta, visualización o foco sereno', frequencyBetaOne: 'Atención focalizada para tareas sostenidas', frequencyBetaTwo: 'Pensamiento activo y resolución de problemas', frequencyBetaThree: 'Concentración intensa en bloques breves', frequencyBetaFour: 'Activación alta; prueba sesiones cortas', frequencyGamma: 'Atención intensa y procesamiento de detalle',
  goalSleep: 'Descansar', goalSleepText: '1–3 Hz · 30–60 min antes de dormir', goalMeditate: 'Meditar', goalMeditateText: '4–7 Hz · 15–30 min', goalRelax: 'Relajarse', goalRelaxText: '8–12 Hz · 15–45 min', goalStudy: 'Estudiar', goalStudyText: '14–20 Hz · 25–50 min', frequencyExamplesTitle: 'Valores concretos para explorar:', frequencyExamplesText: '1,05 · 2,5 · 3,6 · 5,5 · 7,83 · 9,6 · 10 · 12 · 14 · 15 · 18 · 20 · 30 · 40 Hz.'
});
Object.assign(translations.en, {
  frequencyReferenceTitle: 'Practical frequency map', frequencyReferenceText: 'Use this table to choose a starting point. Labels describe common use contexts, not guaranteed effects of a specific frequency.', frequencyTableRange: 'Range', frequencyTableBand: 'Band', frequencyTableUse: 'Common use',
  frequencyDeltaOne: 'Deep-sleep routine and very quiet rest', frequencyDeltaTwo: 'Preparation for restorative rest', frequencyDeltaThree: 'Unwinding, nighttime break or slow meditation', frequencyThetaOne: 'Deep meditation and inward attention', frequencyThetaTwo: 'Deep relaxation and creative exploration', frequencyThetaThree: 'Visualization, transition to rest and free ideas', frequencyAlphaOne: 'Conscious calm and slowing down', frequencyAlphaTwo: 'Relaxed alertness, visualization or gentle focus', frequencyBetaOne: 'Focused attention for sustained tasks', frequencyBetaTwo: 'Active thinking and problem-solving', frequencyBetaThree: 'Intense concentration in short blocks', frequencyBetaFour: 'High activation; try short sessions', frequencyGamma: 'Intense attention and detail processing',
  goalSleep: 'Rest', goalSleepText: '1–3 Hz · 30–60 min before sleep', goalMeditate: 'Meditate', goalMeditateText: '4–7 Hz · 15–30 min', goalRelax: 'Relax', goalRelaxText: '8–12 Hz · 15–45 min', goalStudy: 'Study', goalStudyText: '14–20 Hz · 25–50 min', frequencyExamplesTitle: 'Specific values to explore:', frequencyExamplesText: '1.05 · 2.5 · 3.6 · 5.5 · 7.83 · 9.6 · 10 · 12 · 14 · 15 · 18 · 20 · 30 · 40 Hz.'
});

const languageButtons = document.querySelectorAll('[data-language]');
const setLanguage = (language) => {
  const dictionary = translations[language];
  if (!dictionary) return;

  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value) element.setAttribute('content', value);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute('aria-label', value);
  });
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  localStorage.setItem('landing-language', language);
};

const savedLanguage = localStorage.getItem('landing-language');
const browserLanguage = navigator.language?.startsWith('es') ? 'es' : 'en';
setLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : browserLanguage);
languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));