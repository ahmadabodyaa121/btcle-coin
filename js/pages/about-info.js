/**
 * Страница "About Info"
 * @module pages/about-info
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// Иконки (упрощенные SVG)
const ICONS = {
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>`,
  name: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zM1 4v8h13V4z"/><path d="M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg>`,
  symbol: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3 6.035a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/></svg>`,
  supply: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/></svg>`,
  contract: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/><path d="M4.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0V5h1a.5.5 0 0 0 0-1zm-6 4a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zm-6 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-.5h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5z"/></svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` // Добавим иконку домой
};

/**
 * Создает содержимое страницы "About Info"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createAboutInfoPage(container) {
  const layout = createLayout();
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-info-container', 'section-container');

  const contractAddress = '0x9d2144328e1d618F54Cd38540F5eE50671f6A208';

  const content = `
    <div class="about-info-backdrop"></div> <!-- Элемент для сложного фона -->
    <div class="section-content about-info-content">
      <h1 class="section-title about-info-title fade-in" data-animation-delay="0.1">About <span class="highlight">BTCLE</span></h1>

       <div class="info-section description-section fade-in-up" data-animation-delay="0.7">
        <p class="description-text">Bitcoin Limited Edition (BTCLE) is a scarce, high-integrity digital asset created for those who 
        value purpose over hype. With a strictly limited supply and uncompromising transparency, 
        BTCLE embodies the original ethos of Bitcoin, decentralized, secure, and built to last. In a 
        market saturated with speculation and noise, BTCLE is a deliberate, long-term asset for those 
        who move with conviction and think beyond the trend cycle, because true value is never 
        mass-produced.</p>
      </div>
      
      <div class="info-section token-details-section fade-in-up" data-animation-delay="0.2">
        <div class="detail-item fade-in-up" data-animation-delay="0.2">
          <div class="detail-icon">${ICONS.name}</div>
          <div class="detail-text">
            <span class="detail-label">Name</span>
            <span class="detail-value">Bitcoin Limited Edition</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.3">
          <div class="detail-icon">${ICONS.symbol}</div>
          <div class="detail-text">
            <span class="detail-label">Ticker</span>
            <span class="detail-value">BTCLE</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.4">
          <div class="detail-icon">${ICONS.supply}</div>
          <div class="detail-text">
            <span class="detail-label">Max Supply</span>
            <span class="detail-value">210,000</span>
          </div>
        </div>
        <div class="detail-item fade-in-up" data-animation-delay="0.5">
          <div class="detail-icon">${ICONS.supply}</div> <!-- Та же иконка? Или другая нужна? -->
          <div class="detail-text">
            <span class="detail-label">Total Supply</span>
            <span class="detail-value">21,000</span>
          </div>
        </div>
        
      </div>

     
    </div>
  `;

  aboutContainer.innerHTML = content;

  // Кнопка Домой (логика та же)
  const homeButton = createHomeButton();
  aboutContainer.appendChild(homeButton);

  layout.mainContainer.appendChild(aboutContainer);
  container.appendChild(layout.container);

  loadStyles();
  initClipboard(aboutContainer);
  // initScrollAnimations(aboutContainer); // Вызовем позже

  // --- Элементы для анимации появления ---
  const sectionContent = aboutContainer.querySelector('.about-info-content');
  // --------------------------------------

  // Скрываем лоадер и ПОТОМ показываем контент
  requestAnimationFrame(() => {
    hideGlobalLoader();

    // Небольшая задержка перед показом контента для плавности
    setTimeout(() => {
      // Делаем видимым основной контейнер
      if (sectionContent) {
        sectionContent.classList.add('visible'); 
        // Если CSS для .about-info-content.visible не задает opacity: 1,
        // можно добавить и sectionContent.style.opacity = '1';
      }

      // Показываем кнопку домой
      homeButton.classList.add('visible');

      // Инициализируем скролл-анимации для дочерних элементов
      // Это запустит анимации fade-in-up для блоков внутри
      initScrollAnimations(aboutContainer);

      // Устанавливаем overflow: hidden для body ТОЛЬКО на десктопных экранах
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        console.log('[about-info.js] Setting body overflow to hidden for desktop');
        document.body.style.overflow = 'hidden';
      } else {
        console.log('[about-info.js] Ensuring body overflow allows scrolling for mobile');
        // На мобильных экранах router.js уже должен был установить overflow: 'auto' (или '')
        // Можно дополнительно здесь установить 'auto', чтобы быть уверенным, но обычно это не требуется,
        // если router.js отрабатывает корректно ДО этого момента.
        // document.body.style.overflow = 'auto'; 
      }

    }, 50); // Минимальная задержка 50ms
  });

  return container;
}

/**
 * Инициализирует копирование в буфер обмена
 * @param {HTMLElement} parentElement
 */
function initClipboard(parentElement) {
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
 * Загружает стили для страницы
 */
function loadStyles() {
  if (!document.getElementById('about-info-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'about-info-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/about-info.css';
    document.head.appendChild(linkElement);
  }
}

/**
 * Инициализирует скролл-анимации для элементов страницы
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
function initScrollAnimations(parentElement) {
  const elementsToAnimate = parentElement.querySelectorAll('.fade-in, .fade-in-up');
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
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Создает кнопку возврата на главную страницу
 * @returns {HTMLElement} Кнопка возврата
 */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.setAttribute('data-navigate', '');
  button.classList.add('home-button'); // Стили применяются из CSS
  button.innerHTML = ICONS.home; // Используем иконку из констант
  button.title = 'Back to Home';
  return button;
}

export default createAboutInfoPage; 