/**
 * Модуль для работы с видео-фоном
 */

// SVG иконки
const icons = {
  play: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8z"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="text-white/50"><path d="m6 9 6 6 6-6"/></svg>`,
  soundOn: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  soundOff: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4zM23 9l-6 6M17 9l6 6"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>`,
  name: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zM1 4v8h13V4z"/><path d="M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg>`,
  symbol: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3 6.035a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/></svg>`,
  supply: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>`,
  contract: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/><path d="M4.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V5h1a.5.5 0 0 0 0-1zm-6 4a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm-6 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/></svg>`
};

// Флаги для координации анимации
let isLoaderHidden = false;
let isVideoTimerElapsed = false;

// Ссылки на элементы, которые будем анимировать (заполнятся в createVideoBackground)
let elementToAnimate = {
  overlay: null,
  contentContainer: null // Добавим сюда основной контент для возможной анимации
};

/**
 * Попытка запустить анимацию появления контента.
 * Вызывается после того, как лоадер скрылся ИЛИ таймер видео истек.
 */
function tryRevealContent() {
  console.log(`Attempting reveal: Loader hidden? ${isLoaderHidden}, Video timer elapsed? ${isVideoTimerElapsed}`);
  if (isLoaderHidden && isVideoTimerElapsed) {
    console.log('Both conditions met. Revealing content.');
    
    // Можно анимировать overlay или основной контент, если нужно
    // elementToAnimate.overlay?.classList.add('overlay-active');
    // elementToAnimate.contentContainer?.classList.add('reveal-content'); // Пример
    
    // Можно добавить удаление слушателя 'loaderHidden', если он больше не нужен
    // document.removeEventListener('loaderHidden', handleLoaderHidden); // Но он и так {once: true}
  }
}

/**
 * Обработчик события скрытия лоадера.
 */
function handleLoaderHidden() {
  console.log('Received loaderHidden event.');
  isLoaderHidden = true;
  tryRevealContent();
}

// Слушаем кастомное событие от лоадера ОДИН РАЗ
document.addEventListener('loaderHidden', handleLoaderHidden, { once: true });

/**
 * Создание компонента видео-фона
 * @param {Object} options - Параметры компонента
 * @param {HTMLElement} options.container - Контейнер для вставки видео
 * @param {string} options.src - URL видео
 * @param {boolean} [options.autoplay=true] - Автоматическое воспроизведение
 * @param {boolean} [options.loop=true] - Зацикливание видео
 * @param {boolean} [options.muted=true] - Без звука (по умолчанию теперь со звуком)
 * @param {boolean} [options.controls=false] - Отображение элементов управления
 * @param {string} [options.poster] - URL постера
 * @param {Function} [options.onReady] - Колбэк при готовности видео
 * @param {Function} [options.onLoaded] - Колбэк при полной загрузке видео
 * @param {HTMLElement|string} [options.content] - Содержимое поверх видео (HTML или элемент)
 */
export function createVideoBackground(options) {
  const {
    container,
    src,
    autoplay = true,
    loop = true,
    muted = true,
    controls = false,
    poster,
    onReady,
    onLoaded,
    content
  } = options;
  
  const isMobile = window.innerWidth <= 768;
  const videoSrc = isMobile ? 'images/Header-video-mobile.mp4' : src;

  // HTML для видео-фона (БЕЗ деталей и дисклеймера)
  const videoHtml = `
    <div class="video-background">
      <video
        class="video-element loading"
        id="video-bg-element"
        autoplay
        ${muted ? 'muted' : ''}
        playsinline
        ${poster ? `poster="${poster}"` : ''}
        ${loop ? 'loop' : ''}
        ${controls ? 'controls' : ''}
      >
        <source src="${videoSrc}" type="video/mp4">
        Ваш браузер не поддерживает видео.
      </video>
      
      <div class="video-overlay"></div>
      
      <div class="sound-toggle-button">
        ${muted ? icons.soundOff : icons.soundOn}
      </div>
      
      <!-- Контейнер для основного контента (заголовок, кнопки) -->
      <div class="video-content" id="video-content"></div>
      
      <!-- Контейнер для индикатора скролла -->
      <div class="scroll-indicator-container"></div>
    </div>
  `;
  
  container.innerHTML = videoHtml;
  
  const videoBackground = container.querySelector('.video-background');
  const contentContainer = container.querySelector('#video-content');
  const scrollIndicatorContainer = container.querySelector('.scroll-indicator-container');

  // --- Заполняем ссылки на анимируемые элементы ---
  elementToAnimate.overlay = container.querySelector('.video-overlay');
  elementToAnimate.contentContainer = contentContainer; // Ссылка на контейнер контента
  // -------------------------------------------------
  
  // Добавление основного содержимого (заголовок, кнопки) в video-content
  if (contentContainer && content) {
    if (typeof content === 'string') {
      contentContainer.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      contentContainer.appendChild(content);
    }
  }
  
  // Добавление индикатора скролла
  if (scrollIndicatorContainer) {
      scrollIndicatorContainer.innerHTML = createScrollIndicator();
  }
  
  // Инициализация видео (передаем videoBackground как контекст для поиска элементов)
  const videoInstance = initVideo(videoBackground, onReady, onLoaded);

  // Инициализация анимаций (ищем элементы внутри videoBackground)
  initScrollAnimations(videoBackground);
  
  return {
    videoElement: container.querySelector('#video-bg-element'),
    contentElement: contentContainer,
    toggleSound: videoInstance.toggleSound
  };
}

/**
 * Инициализация видео и обработчиков событий
 * @param {HTMLElement} container - Контейнер с видео
 * @param {Function} [onReady] - Колбэк при готовности видео
 * @param {Function} [onLoaded] - Колбэк при полной загрузке видео
 */
function initVideo(container, onReady, onLoaded) {
  const videoElement = container.querySelector('#video-bg-element');
  const soundToggleButton = container.querySelector('.sound-toggle-button');
  // Убрали поиск элементов отсюда, т.к. они теперь не используются в этом модуле
  
  if (!videoElement) {
    console.error('Элемент видео не найден');
    return { toggleSound: () => {} };
  }
  
  /* 1. Гарантируем mute ещё до первой попытки play() */
  videoElement.muted = true;          // свойство
  videoElement.setAttribute('muted',''); // атрибут (нужно для iOS)

  // Функция для переключения звука
  const toggleSound = () => {
    videoElement.muted = !videoElement.muted;
    soundToggleButton.innerHTML = videoElement.muted ? icons.soundOff : icons.soundOn;
  };
  
  // Обработчик кнопки звука
  if (soundToggleButton) {
    soundToggleButton.addEventListener('click', toggleSound);
  }

  /* 2. Перестраховка: если autoplay всё‑таки заблокировали,
         пробуем запустить ещё раз после canplay и при возвращении на вкладку */
  const tryPlay = () => {
      console.log('Attempting to play video. Paused:', videoElement.paused); // Лог
      // Проверяем, что видео все еще на паузе перед попыткой
      if (videoElement.paused) {
          videoElement.play().then(() => {
              console.log('Video play() successful.'); // Лог успеха
          }).catch(err => {
               console.error('Video play() failed:', err); // Лог ошибки
          });
      }
  }
  
  // Обработчик загрузки видео для отображения (canplay)
  videoElement.addEventListener('canplay', () => {
    console.log('Видео может начать воспроизведение (canplay)');
    tryPlay(); // Пытаемся запустить здесь
    if (typeof onReady === 'function') {
      onReady(videoElement);
    }
  });

  /* 3. Возвращаемся на вкладку – тоже пробуем */
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && videoElement.paused) {
        console.log('Tab became visible, trying to play paused video.');
        tryPlay();
    }
  });
  
  /* 4. Пробуем запустить после первого взаимодействия пользователя */
  const playOnFirstInteraction = () => {
    if (videoElement.paused) {
      console.log('First user interaction detected, trying to play paused video.');
      tryPlay(); // Используем ту же функцию tryPlay с логами
    }
    // Удаляем обработчик после первого срабатывания
    document.removeEventListener('touchstart', playOnFirstInteraction);
    document.removeEventListener('click', playOnFirstInteraction); // Добавим и click для десктопа/мыши
  };
  document.addEventListener('touchstart', playOnFirstInteraction, { once: true });
  document.addEventListener('click', playOnFirstInteraction, { once: true });
  
  // Обработчик полной загрузки видео
  videoElement.addEventListener('loadeddata', () => {
    console.log('Видео полностью загружено');
    videoElement.classList.remove('loading');
    videoElement.classList.add('loaded');
    
    if (typeof onLoaded === 'function') {
      onLoaded(videoElement);
    }
  });

  // Обработчик события play - запускается один раз при старте видео
  videoElement.addEventListener('play', () => {
    console.log('Video playback started. Starting timer.');

    // Запускаем таймер 
    setTimeout(() => {
      console.log('Video timer finished.');
      isVideoTimerElapsed = true;
      tryRevealContent(); // Пытаемся показать контент (теперь без деталей токена)

    }, 4000); // Таймер остался, влияет на tryRevealContent

  }, { once: true }); // Сработает только один раз
  
  // --- Добавляем слушатель события ended ---
  videoElement.addEventListener('ended', () => {
    console.log('Video ended. Initializing last frame parallax.');
    // Добавляем класс к контейнеру
    container.classList.add('video-ended');
    // Устанавливаем плавный переход для transform
    videoElement.style.transition = 'transform 0.2s ease-out';
    // Инициализируем параллакс
    initLastFrameParallax(container, videoElement);
  });
  // -----------------------------------------
  
  return { toggleSound };
}

/**
 * Создание содержимого для главной страницы (теперь без деталей и дисклеймера)
 * @returns {string} HTML-код содержимого
 */
export function createHomePageContent() {
  return `
    <div class="home-video-content">
      <h1 class="home-video-title animate-fade-in delay-500">
        <span>Bitcoin <span style="color: var(--color-primary);">Limited Edition</span></span>
      </h1>
      
      <p class="home-video-subtitle animate-fade-in delay-700">
        Rare by Design. Secured by Structure. Driven by Collective Belief.
      </p>
      
      <div class="home-video-buttons animate-fade-in delay-1000">
        <a 
          href="?page=story" 
          class="btn-primary hover-lift"
          data-navigate
        >
          ${icons.play}
          Story
        </a>
        
        <a 
          href="?page=whitepaper" 
          class="btn-outline hover-lift"
          data-navigate
        >
          Whitepaper
        </a>
      </div>
    </div>
    <!-- Индикатор скролла теперь генерируется отдельно -->
  `;
}

/**
 * Создание HTML для индикатора скролла
 * @returns {string}
 */
function createScrollIndicator() {
    return `
    <div class="scroll-indicator animate-fade-in delay-1000">
      <div class="bounce">
        ${icons.chevronDown}
      </div>
    </div>
    `;
}

/**
 * Инициализирует копирование в буфер обмена
 * @param {HTMLElement} parentElement Контейнер для поиска кнопки
 */
function initClipboard(parentElement) {
  // Эта функция ищет '.copy-button'. Если такая кнопка была только в удаленном
  // блоке с деталями, то эта функция теперь ничего не найдет и не сделает.
  // Оставляем ее на случай, если кнопка копирования появится где-то еще.
  const copyButton = parentElement.querySelector('.copy-button');
  if (copyButton) {
    const tooltip = copyButton.querySelector('.copy-tooltip');
    copyButton.addEventListener('click', () => {
      const textToCopy = copyButton.getAttribute('data-clipboard-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        tooltip.textContent = 'Copied!';
        copyButton.classList.add('copied');
        setTimeout(() => {
          tooltip.textContent = 'Copy';
          copyButton.classList.remove('copied');
        }, 1500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        tooltip.textContent = 'Error!';
        setTimeout(() => {
          tooltip.textContent = 'Copy';
        }, 1500);
      });
    });
  }
}

/**
 * Инициализирует скролл-анимации для элементов страницы
 * @param {HTMLElement} parentElement Контейнер для поиска элементов
 */
function initScrollAnimations(parentElement) {
  // Находим все анимируемые элементы ВНУТРИ parentElement
  const elementsToAnimate = parentElement.querySelectorAll('.animate-fade-in, .animate-fadeInUp'); 
  console.log('Found elements to animate:', elementsToAnimate);
  
  if (!elementsToAnimate.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.animationDelay || '0';
        entry.target.style.animationDelay = `${delay}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); // Убрал rootMargin, т.к. он может быть специфичен для about

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Инициализация параллакс-эффекта для последнего кадра видео.
 * @param {HTMLElement} container - Контейнер .video-background
 * @param {HTMLElement} videoElement - Элемент <video>
 */
function initLastFrameParallax(container, videoElement) {
  const intensity = 25; // Сила эффекта (в пикселях)
  const smoothing = 0.2; // Плавность перехода (в секундах, совпадает с transition выше)
  
  videoElement.style.transition = `transform ${smoothing}s ease-out`;

  const handleMouseMove = (event) => {
    const rect = container.getBoundingClientRect();
    // Координаты курсора относительно центра контейнера (от -0.5 до 0.5)
    const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (event.clientY - rect.top) / rect.height - 0.5;

    // Расчет смещения (умножаем на -1 для обратного движения)
    const translateX = -mouseX * intensity;
    const translateY = -mouseY * intensity;
    
    // Применяем трансформацию с небольшой задержкой для плавности
    videoElement.style.transform = `scale(1.05) translate(${translateX}px, ${translateY}px)`;
  };

  const handleMouseLeave = () => {
    // Возвращаем видео в исходное положение (с учетом небольшого масштаба)
    videoElement.style.transform = 'scale(1.05) translate(0, 0)';
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);
  
  // Начальное небольшое увеличение, чтобы края не были видны
  videoElement.style.transform = 'scale(1.05)';
} 