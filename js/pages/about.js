/**
 * Страница "About"
 * @module pages/about
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

/**
 * Создает содержимое страницы "Story" (бывшая About)
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createStoryPage(container) {
  // Лоадер уже показан роутером, не нужно показывать его повторно
  // showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('section-container');
  aboutContainer.classList.add('about-container');
  
  // Создаем содержимое секции
  const content = `
    <div class="about-backdrop"></div> <!-- Для фона -->
    <div class="section-content about-content">
      <h1 class="section-title fade-in" data-animation-delay="0.1">
        The <span class="highlight">BTCLE</span> Story
      </h1>
      
     
      
      <div class="section-description story-blocks">
        <div class="section-subtitle fade-in" data-animation-delay="0.3">
            <h2>A New Standard for a Decentralized Future</h2>
        </div>

        <div class="story-block fade-in-up" data-animation-delay="0.5">
          <p>Ever wish you could rewind time, not to relive the past, but to act on what you now know?</p>
          <p>Maybe it was Bitcoin back in its early days. Maybe it was Ethereum before the ICO wave. Maybe it was that quiet voice telling you, this might be something, and the noise that drowned it out.</p>
          <p>We've all felt that moment. That pause in time where possibility stood just out of reach.</p>
          </div>
          
        <div class="story-block fade-in-up" data-animation-delay="0.6">
          <p>But here's the truth: the past is gone. What matters now is what we choose to do with the lessons it left behind.</p>
          <p>Bitcoin Limited Edition (BTCLE) is not an attempt to rewrite history. It's a chance to respond to it. To finally act with intention, not regret.</p>
          </div>
          
        <div class="story-block fade-in-up" data-animation-delay="0.7">
          <p>We didn't create BTCLE to chase a trend. We built it to reignite what crypto was meant to be. Somewhere between the memes, the scams, and the overnight millionaires, the soul of the space was lost.</p>
          <p>BTCLE is a return to authenticity and purpose.</p>
          <p>A scarce, fixed-supply token, 210,000 total, just like the original Bitcoin vision. No inflation. No manipulation. No shortcuts.</p>
          <p>A community launch built to block bots, limit snipers, and eliminate pre-mined advantage.</p>
          <p>A structure that honors time, trust, and real decentralization.</p> 
          </div>
          
        <div class="story-block fade-in-up" data-animation-delay="0.8">
          <p>This isn't just about code or tokenomics. It's about people. It's about building a system that respects the ones who show up early, not to dump, but to believe. We've seen what hype can do. Now we're here to see what honesty can build.</p>
          <p>BTCLE was made for those who missed their first chance, and for those who never stopped believing in decentralized money.</p>
          <p>It's a token, yes. But it's also a signal. A quiet reminder that something better is still possible.</p>
          </div>
          
        <div class="story-block fade-in-up" data-animation-delay="0.9">
          <p>And we're not just protecting the token, we're protecting the ecosystem.</p>
          <p>No bots. No rugs. No manipulation. BTCLE is guarded from the beginning with fairness-first smart contracts and protective mechanics that give this launch meaning. We're here to build something that lasts.</p>
          </div>
          
        <div class="story-block fade-in-up" data-animation-delay="1.0">
          <p>One more thing, because it matters.</p>
          <p>The BTCLE founding team has chosen to remain unknown, not for secrecy, but to keep the focus where it belongs: on the mission. Every element of BTCLE, from smart contracts to tokenomics, has been built with full transparency, fairness, and security at its core.</p>
          </div>
          
        <div class="story-block fade-in-up" data-animation-delay="1.1">
          <p>This is BTCLE.</p>
          <p>Rare by Design. Secured by Structure. Driven by Collective Belief.</p>
          <p>Your second chance is here.</p>
        </div>
        
        <div class="story-block fade-in-up" data-animation-delay="1.2">
          <p>Clean. Fair. Purpose-built.</p>
          <p>Welcome to the Future of Sound Money.</p>
        </div>
        
      </div>
    </div>
  `;
  
  aboutContainer.innerHTML = content;
  
  // Добавляем кнопку возврата на главную
  const homeButton = createHomeButton();
  aboutContainer.appendChild(homeButton);
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(aboutContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Добавляем стили
  loadStyles();
  
  // --- Элементы для анимации появления ---
  const sectionContent = aboutContainer.querySelector('.section-content');
  const sectionTitle = aboutContainer.querySelector('.section-title');
  const sectionSubtitle = aboutContainer.querySelector('.section-subtitle');
  // --------------------------------------

  // Скрываем лоадер и ПОТОМ показываем контент
  // Используем requestAnimationFrame для большей надежности отрисовки
  requestAnimationFrame(() => {
    hideGlobalLoader();

    // Небольшая задержка перед показом контента для плавности
    setTimeout(() => {
      // Делаем видимым основной контейнер и заголовки
      if (sectionContent) {
        sectionContent.classList.add('visible');
      }
      if (sectionTitle) {
        sectionTitle.classList.add('visible');
      }
      if (sectionSubtitle) {
        sectionSubtitle.classList.add('visible');
      }
      
      // Показываем кнопку домой
      homeButton.classList.add('visible');
      
      // Инициализируем скролл-анимации для блоков
      initScrollAnimations(aboutContainer); 

    }, 50); // Минимальная задержка 50ms
  });

  return container;
}

/**
 * Инициализирует скролл-анимации для элементов страницы
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
function initScrollAnimations(parentElement) {
  // Выбираем все элементы, которые нужно анимировать при скролле
  const elementsToAnimate = parentElement.querySelectorAll('.story-block, .quote-block, .highlight-box');
  
  if (!elementsToAnimate.length) return; // Выходим, если нет элементов
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Используем класс 'visible', так как он уже используется в CSS для анимации fade-in-up
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Отключаем наблюдение после анимации
      }
    });
  }, {
    threshold: 0.15, // Процент видимости элемента для запуска анимации
    rootMargin: '0px 0px -50px 0px' // Смещаем область проверки немного вверх
  });
  
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  // Проверяем, загружены ли уже стили
  if (!document.getElementById('about-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'about-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/about.css';
    document.head.appendChild(linkElement);
  }
}

/**
 * Создает кнопку возврата на главную страницу
 * @returns {HTMLElement} Кнопка возврата
 */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.classList.add('home-button');
  button.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`;
  button.title = 'Back to Home';
  
  // Обработчик клика
  button.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Анимация перед переходом
    document.body.classList.add('page-exit');
    
    // Переход после анимации
    setTimeout(() => {
      window.location.href = '/';
    }, 300);
  });
  
  return button;
}

// Экспорт функции по умолчанию для совместимости
export default createStoryPage; 