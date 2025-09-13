/**
 * Страница "Vision"
 * @module pages/vision
 */
import { createLayout } from '../components/layout.js';
import { showGlobalLoader, hideGlobalLoader } from '../components/loader.js';

/**
 * Создает содержимое страницы "Vision"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createVisionPage(container) {
  // Показываем лоадер
  showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const visionContainer = document.createElement('div');
  visionContainer.classList.add('section-container');
  visionContainer.classList.add('vision-container');
  
  // Данные для графика цен
  const priceData = [
    { quarter: 'Q2 2025', price: 100 },
    { quarter: 'Q3 2025', price: 250 },
    { quarter: 'Q4 2025', price: 500 },
    { quarter: 'Q1 2026', price: 850 },
    { quarter: 'Q2 2026', price: 1200 },
    { quarter: 'Q3 2026', price: 1600 },
    { quarter: 'Q4 2026', price: 2000 }
  ];

  // Визионеры
  const visionaries = [
    {
      name: 'Satoshi Nakamoto',
      quote: "If you don't believe it or don't get it, I don't have the time to try to convince you, sorry.",
      role: "Creator of Bitcoin",
      icon: 'bitcoin'
    },
    {
      name: 'Andreas M. Antonopoulos',
      quote: "The root problem with conventional currency is all the trust that's required to make it work.",
      role: "Bitcoin Educator",
      icon: 'shield'
    },
    {
      name: 'Vitalik Buterin',
      quote: "Blockchain and cryptocurrency will become the platform that most people use for everyday interactions.",
      role: "Ethereum Co-founder",
      icon: 'layers'
    }
  ];

  // Миссии
  const missions = [
    {
      title: "Scarcity",
      icon: "target",
      description: "With a fixed supply of 210,000 tokens, BTCLE is designed to be truly scarce.",
      color: "bg-amber-gradient"
    },
    {
      title: "Security",
      icon: "shield",
      description: "Advanced smart contract protections against common vulnerabilities.",
      color: "bg-blue-gradient"
    },
    {
      title: "Fairness",
      icon: "trophy",
      description: "Distribution mechanisms designed to prevent concentration of ownership.",
      color: "bg-green-gradient"
    }
  ];
  
  // Создаем содержимое секции
  const content = `
    <div class="hero-section">
      <div class="hero-content fade-in-up">
        <div class="icon-sparkles"></div>
        <h1 class="page-title">Vision</h1>
        <p class="page-subtitle">A glimpse into the future of Bitcoin Limited Edition</p>
        
        
      </div>
    </div>
    
    <div class="container">
      <div class="card mission-card fade-in-up">
        <div class="card-header">
          <div class="icon-container">
            <i class="icon icon-target"></i>
          </div>
          <h2 class="card-title">Our Mission</h2>
        </div>
        
        <p class="card-text">
          Bitcoin Limited Edition aims to create a truly scarce digital asset that honors the original 
          vision of Bitcoin while incorporating modern features and protections. We envision BTCLE as 
          a store of value that combines scarcity, security, and community-driven governance.
        </p>
        
        <div class="missions-grid">
          ${missions.map((mission, index) => `
            <div class="mission-item ${mission.color} fade-in-up" data-index="${index}">
              <div class="icon-container">
                <i class="icon icon-${mission.icon}"></i>
              </div>
              <h3 class="mission-title">${mission.title}</h3>
              <p class="mission-description">${mission.description}</p>
            </div>
          `).join('')}
        </div>
        
        <p class="card-text">
          We believe that by adhering to these principles, BTCLE can become a significant player 
          in the cryptocurrency ecosystem, offering holders a truly limited digital asset with real 
          long-term value potential.
        </p>
      </div>
      
      <div class="card price-projection-card fade-in-up">
        <div class="card-header">
          <div class="icon-container">
            <i class="icon icon-bar-chart"></i>
          </div>
          <h2 class="card-title">Target Price Projection</h2>
        </div>
        
        <p class="card-text">
          Based on our tokenomics model, market analysis, and scarcity factors, we project the 
          following price trajectory for BTCLE. These projections are based on conservative 
          assumptions about market adoption and demand.
        </p>
        
        <div class="price-chart-container" id="price-chart">
          <table class="price-table">
            <thead>
              <tr>
                <th>Quarter</th>
                <th>Projected Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              ${priceData.map(item => `
                <tr>
                  <td>${item.quarter}</td>
                  <td>$${item.price.toLocaleString()}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div class="price-bars">
            ${priceData.map(item => `
              <div class="price-bar-container">
                <div class="price-bar" style="height: ${item.price / 20}px;" data-value="$${item.price}"></div>
                <div class="quarter-label">${item.quarter}</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="disclaimer-box">
          <p class="disclaimer-text">
            <strong>Note:</strong> These projections are speculative and based on our economic model. Cryptocurrency
            markets are highly volatile, and actual values may differ significantly. This is not financial advice.
          </p>
        </div>
      </div>
      
      <div class="section-header">
        <h2 class="section-title">
          <span class="icon-quote"></span>
          Inspired by Visionaries
          <span class="icon-quote rotate-180"></span>
        </h2>
        <div class="section-divider"></div>
      </div>
      
      <div class="visionaries-grid">
        ${visionaries.map((visionary, index) => `
          <div class="visionary-card fade-in-up" data-index="${index}">
            <div class="icon-container">
              <i class="icon icon-${visionary.icon}"></i>
            </div>
            <h3 class="visionary-name">${visionary.name}</h3>
            <p class="visionary-quote">
              <span class="quote-mark">"</span>
              ${visionary.quote}
              <span class="quote-mark">"</span>
            </p>
            <p class="visionary-role">${visionary.role}</p>
          </div>
        `).join('')}
      </div>
      
      <div class="join-banner">
        <i class="icon icon-rocket"></i>
        <p class="join-text">Join us as we build the future of sound money</p>
      </div>
    </div>
  `;
  
  visionContainer.innerHTML = content;
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(visionContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Новый вызов с задержкой
  setTimeout(() => {
    hideGlobalLoader();
    // Инициализируем скролл-анимации и анимацию price-bar
    initVisionAnimations(visionContainer);
  }, 300); // Задержка 300ms
  
  return container;
}

/**
 * Инициализирует анимации для элементов страницы Vision
 * (Заменяем старую функцию initAnimations)
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
function initVisionAnimations(parentElement) {
  // Анимируем элементы fade-in-up при прокрутке
  const fadeElements = parentElement.querySelectorAll('.fade-in-up');
  
  if (fadeElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }

  // Отдельно анимируем ценовые столбцы (scaleY), т.к. у них другая анимация
  // Можно использовать тот же IntersectionObserver или отдельный
  const priceBars = parentElement.querySelectorAll('.price-bar');
  if (priceBars.length) {
      const barObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Добавляем класс visible с задержкой для эффекта "роста"
                  priceBars.forEach((bar, index) => {
                      setTimeout(() => {
                          bar.classList.add('visible');
                      }, 100 * index);
                  });
                  // Отписываемся от контейнера столбцов (или от каждого столбца, если наблюдали их)
                  barObserver.unobserve(parentElement.querySelector('.price-bars')); 
              }
          });
      }, {
          threshold: 0.2, // Чуть больший порог для графика
          rootMargin: '0px 0px -100px 0px'
      });
      // Наблюдаем за контейнером столбцов
      const priceBarsContainer = parentElement.querySelector('.price-bars');
      if (priceBarsContainer) {
          barObserver.observe(priceBarsContainer);
      } 
  }
}

// Экспорт по умолчанию для совместимости
export default createVisionPage; 