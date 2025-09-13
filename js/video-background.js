function tryRevealContent() {
  console.log(`Attempting reveal: Loader hidden? ${isLoaderHidden}, Video timer elapsed? ${isVideoTimerElapsed}`);
  if (isLoaderHidden && isVideoTimerElapsed) {
    console.log('Both conditions met. Revealing content.');
    
    elementToAnimate.overlay?.classList.add('overlay-active');
    // elementToAnimate.tokenDetails?.classList.add('reveal-content'); // Скрываем детали токена
    elementToAnimate.disclaimer?.classList.add('reveal-content');
    
    // Можно добавить удаление слушателя 'loaderHidden', если он больше не нужен
  }
} 