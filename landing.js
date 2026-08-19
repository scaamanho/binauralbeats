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
    homeLabel: 'Binaural Beats Pro — inicio', mainNavigation: 'Navegación principal', howItWorks: 'Cómo funciona', benefits: 'Beneficios', advice: 'Consejos', install: 'Instalar', openAppShort: 'Abrir app →',
    eyebrow: 'Generador de ondas cerebrales · PWA', heroHeadingStart: 'Crea sesiones binaurales para', focus: 'foco', calm: 'calma', heroHeadingAnd: 'y', rest: 'descanso',
    heroText: 'Crea sesiones binaurales personalizadas para concentrarte, relajarte o preparar el descanso. Elige una presintonía, ajusta la frecuencia base y escucha con auriculares.',
    openApplication: 'Abrir la aplicación', installAsApp: 'Instalar como app', noAccount: 'Funciona sin cuenta', savedLocally: 'Guarda programas localmente', mobileAndDesktop: 'Diseñada para móvil y PC', livePreview: 'Vista previa en vivo · la PWA se instala desde aquí',
    howHeadingStart: 'Dos tonos cercanos crean una', thirdRhythm: 'tercera percepción rítmica', howLead: 'La app envía una frecuencia ligeramente distinta a cada oído. Tu cerebro integra ambas y percibe un ritmo a la frecuencia de la diferencia.',
    stepOneTitle: 'Elige una intención', stepOneText: 'Presets orientados a foco, calma, meditación, energía, siesta o sueño profundo.', stepTwoTitle: 'Usa auriculares', stepTwoText: 'La app envía una frecuencia a cada oído. La diferencia entre ambas es el ritmo binaural percibido.', stepThreeTitle: 'Ajusta tu sesión', stepThreeText: 'Controla volumen y frecuencia base, o crea programas personalizados con cambios en el tiempo.',
    benefitsHeadingStart: 'Una herramienta sencilla para', mentalRoutines: 'acompañar rutinas mentales', focusTitle: 'Foco sostenido', focusText: 'Presets beta y gamma para sesiones de estudio, lectura o trabajo profundo.', relaxationTitle: 'Relajación guiada', relaxationText: 'Frecuencias alpha y theta para crear un entorno auditivo más calmado.', restTitle: 'Descanso preparado', restText: 'Opciones delta para acompañar rutinas nocturnas o pausas breves.', programsTitle: 'Programas propios', programsText: 'Editor visual para diseñar curvas de frecuencia y guardarlas en el dispositivo.',
    adviceKicker: 'Consejos de uso', adviceHeading: 'Escucha con intención y volumen cómodo.', adviceOne: 'Empieza con sesiones cortas de 10 a 20 minutos y observa cómo te sientes.', adviceTwo: 'Mantén el volumen bajo o medio; no hace falta que los tonos dominen el ambiente.', adviceThree: 'Evita usarla mientras conduces o realizas tareas que requieran atención externa constante.', adviceFour: 'Si tienes condiciones neurológicas, auditivas o médicas, consulta con un profesional antes de usar ritmos binaurales.',
    installHeading: 'Instálala como PWA en móvil o escritorio.', installLead: 'La instalación se realiza desde la aplicación. Ábrela y usa el aviso de instalación o el menú del navegador para elegir “Instalar aplicación” o “Añadir a pantalla de inicio”.', openToInstall: 'Abrir app para instalar', openWithoutInstalling: 'Abrir sin instalar', installNote: 'La PWA corresponde a la aplicación, no a esta landing.', addToHome: 'Añadir a pantalla de inicio', offlineNote: 'Funciona sin conexión tras la primera carga · sin cuenta · sin anuncios.', goToApp: 'Ir a la aplicación →'
  },
  en: {
    pageTitle: 'Binaural Beats Pro · Binaural rhythms for focus, calm and rest',
    metaDescription: 'Binaural Beats Pro — A brainwave generator for focus, calm and rest. Installable PWA with no account required.',
    homeLabel: 'Binaural Beats Pro — home', mainNavigation: 'Main navigation', howItWorks: 'How it works', benefits: 'Benefits', advice: 'Advice', install: 'Install', openAppShort: 'Open app →',
    eyebrow: 'Brainwave generator · PWA', heroHeadingStart: 'Create binaural sessions for', focus: 'focus', calm: 'calm', heroHeadingAnd: 'and', rest: 'rest',
    heroText: 'Create custom binaural sessions to focus, relax or prepare for rest. Choose a preset, adjust the base frequency and listen with headphones.',
    openApplication: 'Open the app', installAsApp: 'Install as app', noAccount: 'No account needed', savedLocally: 'Programs saved locally', mobileAndDesktop: 'Built for mobile and desktop', livePreview: 'Live preview · install the PWA from here',
    howHeadingStart: 'Two nearby tones create a', thirdRhythm: 'third rhythmic perception', howLead: 'The app sends a slightly different frequency to each ear. Your brain combines them and perceives a rhythm at their difference frequency.',
    stepOneTitle: 'Choose an intention', stepOneText: 'Presets for focus, calm, meditation, energy, naps and deep sleep.', stepTwoTitle: 'Use headphones', stepTwoText: 'The app sends one frequency to each ear. The difference between them is the perceived binaural rhythm.', stepThreeTitle: 'Tune your session', stepThreeText: 'Control the volume and base frequency, or build custom programs that change over time.',
    benefitsHeadingStart: 'A simple tool to', mentalRoutines: 'support mental routines', focusTitle: 'Sustained focus', focusText: 'Beta and gamma presets for study, reading or deep work sessions.', relaxationTitle: 'Guided relaxation', relaxationText: 'Alpha and theta frequencies to create a calmer listening environment.', restTitle: 'Ready for rest', restText: 'Delta options to support bedtime routines or short breaks.', programsTitle: 'Your own programs', programsText: 'A visual editor to design frequency curves and save them on your device.',
    adviceKicker: 'Usage advice', adviceHeading: 'Listen intentionally at a comfortable volume.', adviceOne: 'Start with short 10 to 20 minute sessions and notice how you feel.', adviceTwo: 'Keep the volume low or moderate; the tones do not need to dominate the room.', adviceThree: 'Avoid using it while driving or doing tasks that require constant external attention.', adviceFour: 'If you have neurological, hearing or medical conditions, consult a professional before using binaural beats.',
    installHeading: 'Install it as a PWA on mobile or desktop.', installLead: 'Installation happens from the app. Open it and use the install prompt or your browser menu to choose “Install app” or “Add to Home Screen”.', openToInstall: 'Open app to install', openWithoutInstalling: 'Open without installing', installNote: 'The PWA is the application, not this landing page.', addToHome: 'Add to Home Screen', offlineNote: 'Works offline after the first load · no account · no ads.', goToApp: 'Go to the app →'
  }
};

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