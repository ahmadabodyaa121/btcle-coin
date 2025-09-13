/**
 * Главная страница сайта BTC Limited Edition
 * @module pages/home
 */
import { createLayout } from '../components/layout.js';
import { createVideoBackground, createHomePageContent } from '../components/video-background.js';
import { hideGlobalLoader } from '../components/loader.js';

/**
 * Создает содержимое главной страницы
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createHomePage(container) {
  // Лоадер уже показан роутером
  // showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Добавляем контейнер для видео-фона
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container', 'fullscreen-video');
  
  // Создаем видео-фон
  const videoBackground = createVideoBackground({
    container: videoContainer,
    src: '/images/Header-video.mp4', // Путь от корня сайта
    autoplay: true,
    loop: true,
    muted: false,
    content: createHomePageContent(),
    onReady: () => {
      console.log('Видео готово к воспроизведению');
    },
    onLoaded: () => {
      console.log('Видео полностью загружено');
      
      // Скрываем лоадер после загрузки видео
      setTimeout(() => {
        hideGlobalLoader();
      }, 500);
    }
  });
  
  // Добавляем видео в layout
  layout.mainContainer.appendChild(videoContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Настройка обработчиков для плавной прокрутки
  setupSmoothScrolling();
  
  // Инициализация анимаций для маркетингового плана
  setupMarketingAnimations();
}

/**
 * Настраивает плавную прокрутку для навигации
 */
function setupSmoothScrolling() {
  // Обработка кликов по навигационным ссылкам
  document.querySelectorAll('a[data-navigate]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Настройка скролла для индикатора прокрутки вниз
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * Настраивает анимации для маркетингового плана при прокрутке
 */
function setupMarketingAnimations() {
  // Ждем полной загрузки DOM
  window.addEventListener('DOMContentLoaded', () => {
    // Настраиваем IntersectionObserver для анимации элементов при прокрутке
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Прекращаем наблюдение после активации
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.2, // Активируем, когда 20% элемента видно
      rootMargin: '0px 0px -100px 0px' // Смещение порога
    });
    
    // Наблюдаем за всеми элементами стратегии
    document.querySelectorAll('.strategy-item[data-animation="true"]').forEach(item => {
      observer.observe(item);
    });
    
    // Наблюдаем за элементами с классом animate-fadeInUp
    document.querySelectorAll('.animate-fadeInUp').forEach(item => {
      observer.observe(item);
    });
  });
}

// Экспорт функции по умолчанию для совместимости
export default createHomePage; 