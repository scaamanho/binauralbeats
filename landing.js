if('serviceWorker' in navigator){
  window.addEventListener('load',async()=>{
    const rootScope=new URL('./',location.href).href;
    const legacyAppScope=new URL('./.vscode/app/',location.href).href;
    const registrations=await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.filter(registration=>registration.scope===rootScope||registration.scope===legacyAppScope).map(registration=>registration.unregister()));
  });
}