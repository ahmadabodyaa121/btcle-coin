/**
 * Страница "Outreach"
 * @module pages/outreach
 */
import { createLayout } from '../components/layout.js';
import { showGlobalLoader, hideGlobalLoader } from '../components/loader.js';

// Иконка Home
const ICONS = {
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
  // Добавь сюда другие иконки для этой страницы, если они нужны
};

/**
 * Создает содержимое страницы "Outreach"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createOutreachPage(container) {
  // Показываем лоадер
  showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const outreachContainer = document.createElement('div');
  outreachContainer.classList.add('section-container');
  outreachContainer.classList.add('outreach-container');
  
  // Маркетинговые каналы
  const marketingChannels = [
    {
      title: 'Social Media',
      description: 'Strategic presence across Twitter, Telegram, Discord, and emerging crypto-focused platforms',
      icon: 'smartphone',
      bgColor: 'bg-blue-gradient'
    },
    {
      title: 'Influencer Partnerships',
      description: 'Collaborations with trusted voices in the crypto space who align with our values',
      icon: 'speaker',
      bgColor: 'bg-purple-gradient'
    },
    {
      title: 'Community AMAs',
      description: 'Regular Ask-Me-Anything sessions to maintain transparency and connection with holders',
      icon: 'message-square',
      bgColor: 'bg-green-gradient'
    },
    {
      title: 'Educational Content',
      description: 'In-depth articles, guides, and videos explaining the BTCLE vision and technology',
      icon: 'book-open',
      bgColor: 'bg-amber-gradient'
    },
    {
      title: 'Industry Events',
      description: 'Presence at major blockchain conferences and crypto events worldwide',
      icon: 'globe',
      bgColor: 'bg-indigo-gradient'
    },
    {
      title: 'Strategic Listings',
      description: 'Careful selection of exchange partners that share our commitment to security and fairness',
      icon: 'trending-up',
      bgColor: 'bg-red-gradient'
    }
  ];

  // Принципы
  const principles = [
    {
      title: 'Authenticity',
      description: 'No false promises or misleading claims. We only communicate what we can deliver.',
      icon: 'shield'
    },
    {
      title: 'Education',
      description: 'Empowering our community with knowledge about BTCLE and the wider crypto landscape.',
      icon: 'lightbulb'
    },
    {
      title: 'Transparency',
      description: 'Open communication about developments, challenges, and future plans.',
      icon: 'zap'
    }
  ];
  
  // Создаем содержимое секции
  const content = `
    <div class="hero-section">
      <div class="hero-content fade-in-up">
        <h1 class="page-title">Outreach</h1>
        <p class="page-subtitle">Our strategic approach to building an authentic global community</p>
        
        
      </div>
    </div>
    
    <div class="container">
      <div class="marketing-philosophy-section fade-in-up">
        <div class="card-header">
          <div class="icon-container">
            <i class="icon icon-target"></i>
          </div>
          <h2 class="card-title">Marketing Philosophy</h2>
        </div>
        
        <p class="card-text">
          Unlike projects that rely on hype and short-term price manipulation, BTCLE is focused on 
          building sustainable long-term value through authentic community engagement, educational content, 
          and transparent communication. We believe that the strongest marketing comes from delivering a 
          product that genuinely meets a need in the market.
        </p>
        
        <div class="quote-box fade-in-up">
          <p class="quote-text">
            "We're not here to create artificial hype, but rather to build real value and lasting impact. 
            Our outreach strategy reflects this - prioritizing education, transparency, and ethical practices."
          </p>
        </div>
        
        <p class="card-text">
          Our approach to building awareness focuses on connecting with like-minded individuals who share 
          our vision for fair, transparent and decentralized finance. Rather than chasing short-term gains, 
          we're building a community that understands and believes in the long-term potential of Bitcoin Limited Edition.
        </p>
      </div>
      
      <div class="section-header">
        <div class="divider"></div>
        <div class="icon-container">
          <i class="icon icon-users"></i>
        </div>
        <h2 class="section-title">Marketing Channels</h2>
        <div class="divider"></div>
      </div>
      
      <div class="channels-grid">
        ${marketingChannels.map((channel, index) => `
          <div class="channel-card ${channel.bgColor} fade-in-up" data-index="${index}">
            <div class="card-overlay"></div>
            <div class="icon-container">
              <i class="icon icon-${channel.icon}"></i>
            </div>
            <h3 class="channel-title">${channel.title}</h3>
            <p class="channel-description">${channel.description}</p>
          </div>
        `).join('')}
      </div>
      
      <div class="principles-section fade-in-up">
        <div class="card-header">
          <div class="icon-container">
            <i class="icon icon-award"></i>
          </div>
          <h2 class="card-title">Core Principles</h2>
        </div>
        
        <div class="principles-grid">
          ${principles.map((principle, index) => `
            <div class="principle-card fade-in-up" data-index="${index}">
              <div class="icon-container">
                <i class="icon icon-${principle.icon}"></i>
              </div>
              <h3 class="principle-title">${principle.title}</h3>
              <p class="principle-description">${principle.description}</p>
            </div>
          `).join('')}
        </div>
        
        <div class="summary-box fade-in-up">
          <p class="summary-text">
            By adhering to these principles, we aim to build a marketing approach that reflects the core values 
            of Bitcoin Limited Edition - integrity, sustainability, and genuine value creation.
          </p>
        </div>
      </div>
    </div>
  `;
  
  outreachContainer.innerHTML = content;
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(outreachContainer);
  
  // Добавляем кнопку возврата на главную
  const homeButton = createHomeButton();
  outreachContainer.appendChild(homeButton);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Новый вызов с задержкой
  setTimeout(() => {
    hideGlobalLoader();
    // Инициализируем скролл-анимации
    initScrollAnimations(outreachContainer);
    // Показываем кнопку домой
    homeButton.classList.add('visible');
  }, 300); // Задержка 300ms
  
  return container;
}

/**
 * Инициализирует скролл-анимации для элементов страницы
 * (Заменяем старую функцию initAnimations)
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
function initScrollAnimations(parentElement) {
  // Выбираем все элементы с классом fade-in-up
  const elementsToAnimate = parentElement.querySelectorAll('.fade-in-up');
  
  if (!elementsToAnimate.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Отключаем наблюдение после анимации
      }
    });
  }, {
    threshold: 0.15, // Порог видимости
    rootMargin: '0px 0px -50px 0px' // Небольшое смещение вверх
  });
  
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
  button.classList.add('home-button');
  button.innerHTML = ICONS.home; // Используем иконку
  button.title = 'Back to Home';

  // Обработчик клика
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Простой переход
    window.location.href = '/';
  });

  return button;
}

// Экспорт по умолчанию для совместимости
export default createOutreachPage; 