/**
 * Компонент HeroSection с 3D моделью Bitcoin
 * @module components/hero-section
 */

import { createBitcoinModel } from './bitcoin-model.js';

// SVG иконки
const icons = {
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>`
};

/**
 * Создает секцию Hero с 3D моделью Bitcoin
 * @param {HTMLElement} container - DOM элемент для размещения hero секции
 * @param {Object} options - Настройки hero секции
 * @param {string} options.title - Заголовок секции
 * @param {string} options.subtitle - Подзаголовок секции
 * @param {string} options.ctaText - Текст кнопки призыва к действию
 * @param {Function} options.onCtaClick - Обработчик клика по кнопке
 */
export function createHeroSection(container, options = {}) {
  const {
    title = 'BTC Limited Edition',
    subtitle = 'Эксклюзивная коллекция Bitcoin-артефактов',
    ctaText = 'Узнать больше',
    onCtaClick = () => {}
  } = options;

  // Создаем основной контейнер hero-секции
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  
  // Создаем левую часть с текстом
  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  
  // Добавляем заголовок
  const heroTitle = document.createElement('h1');
  heroTitle.classList.add('hero-title');
  heroTitle.textContent = title;
  
  // Добавляем подзаголовок
  const heroSubtitle = document.createElement('p');
  heroSubtitle.classList.add('hero-subtitle');
  heroSubtitle.textContent = subtitle;
  
  // Добавляем кнопку призыва к действию
  const ctaButton = document.createElement('button');
  ctaButton.classList.add('cta-button');
  ctaButton.textContent = ctaText;
  ctaButton.addEventListener('click', onCtaClick);
  
  // Собираем левую часть
  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroSubtitle);
  heroContent.appendChild(ctaButton);
  
  // Создаем правую часть с 3D моделью
  const heroModelContainer = document.createElement('div');
  heroModelContainer.classList.add('hero-model-container');
  
  // Создаем контейнер для 3D модели
  const bitcoinModelContainer = document.createElement('div');
  bitcoinModelContainer.classList.add('bitcoin-model');
  heroModelContainer.appendChild(bitcoinModelContainer);
  
  // Добавляем обе части в hero-секцию
  heroSection.appendChild(heroContent);
  heroSection.appendChild(heroModelContainer);
  
  // Добавляем hero-секцию в контейнер
  container.appendChild(heroSection);
  
  // Инициализируем 3D модель Bitcoin
  setTimeout(() => {
    createBitcoinModel(bitcoinModelContainer);
  }, 100);
  
  // Добавляем эффекты при прокрутке
  setupScrollEffects(heroSection);
  
  return heroSection;
}

/**
 * Настраивает эффекты при прокрутке для hero-секции
 * @param {HTMLElement} heroSection - DOM элемент hero-секции
 */
function setupScrollEffects(heroSection) {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Применяем параллакс-эффект к заголовку
    const heroTitle = heroSection.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
    
    // Применяем эффект прозрачности к hero-секции
    const opacity = Math.max(0, 1 - scrollY / 500);
    heroSection.style.opacity = opacity.toString();
  };
  
  // Добавляем обработчик события прокрутки
  window.addEventListener('scroll', handleScroll);
}

/**
 * Создает анимированный градиент для фона
 * @param {HTMLElement} container - DOM элемент для размещения фона
 */
function createAnimatedBackground(container) {
  const background = document.createElement('div');
  background.classList.add('animated-background');
  
  // Добавляем плавающие элементы
  for (let i = 0; i < 5; i++) {
    const floatingElement = document.createElement('div');
    floatingElement.classList.add('floating-element');
    
    // Случайное положение и размер
    const size = 50 + Math.random() * 150;
    floatingElement.style.width = `${size}px`;
    floatingElement.style.height = `${size}px`;
    floatingElement.style.left = `${Math.random() * 100}%`;
    floatingElement.style.top = `${Math.random() * 100}%`;
    
    // Случайная анимация
    const animationDuration = 15 + Math.random() * 30;
    floatingElement.style.animationDuration = `${animationDuration}s`;
    floatingElement.style.animationDelay = `${Math.random() * 5}s`;
    
    background.appendChild(floatingElement);
  }
  
  container.appendChild(background);
}

/**
 * Создает анимированные частицы для фона героического раздела
 * @param {HTMLElement} container - DOM элемент, в который будут добавлены частицы
 * @param {number} count - Количество частиц
 */
function createParticles(container, count = 15) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    
    // Рандомный размер
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Рандомная позиция
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Рандомная скорость анимации
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Рандомная задержка анимации
    const delay = Math.random() * 5;
    particle.style.animationDelay = `${delay}s`;
    
    // Рандомная прозрачность
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    container.appendChild(particle);
  }
}

/**
 * Обработчик прокрутки для анимации героического раздела
 */
function handleScroll() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;
  
  const scrollPosition = window.scrollY;
  const heroHeight = heroSection.offsetHeight;
  
  // Эффект параллакса при прокрутке
  if (scrollPosition <= heroHeight) {
    const opacity = 1 - (scrollPosition / heroHeight);
    heroSection.style.opacity = Math.max(opacity, 0.3);
    
    const heroTitle = heroSection.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
    
    const heroSubtitle = heroSection.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      heroSubtitle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
  }
}

// Инициализация обработчика прокрутки
window.addEventListener('scroll', handleScroll);

/**
 * Создает плавающие частицы для фона
 * @param {HTMLElement} container - Контейнер для вставки частиц
 * @param {number} count - Количество частиц (по умолчанию 20)
 */
function createFloatingParticles(container, count = 20) {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container absolute inset-0 z-0 overflow-hidden';

  // Создаем указанное количество частиц
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    
    // Случайный размер частицы
    const size = Math.random() * 30 + 5; // от 5px до 35px
    
    // Стилизуем частицу
    particle.className = 'particle absolute rounded-full';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Задаем случайную начальную позицию
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Добавляем анимацию
    particle.style.animationDuration = `${Math.random() * 10 + 15}s`; // от 15 до 25 секунд
    particle.style.animationDelay = `${Math.random() * 5}s`; // задержка до 5 секунд
    particle.classList.add('animate-float');
    
    // Случайный цвет (золотой или светло-желтый)
    const opacity = Math.random() * 0.5 + 0.1; // от 0.1 до 0.6
    if (Math.random() > 0.5) {
      particle.style.backgroundColor = `rgba(255, 215, 0, ${opacity})`;
    } else {
      particle.style.backgroundColor = `rgba(255, 235, 153, ${opacity})`;
    }
    
    // Добавляем частицу в контейнер
    particlesContainer.appendChild(particle);
  }
  
  // Добавляем контейнер с частицами
  container.appendChild(particlesContainer);
}

/**
 * Инициализация обработчиков событий
 * @param {HTMLElement} container - Контейнер с HeroSection
 * @param {string} contractAddress - Адрес контракта
 */
function initHeroEvents(container, contractAddress) {
  // Обработчик копирования адреса контракта
  const copyButton = container.querySelector('#copy-contract-btn');
  
  if (copyButton) {
    copyButton.addEventListener('click', () => {
      // Копируем текст в буфер обмена
      navigator.clipboard.writeText(contractAddress)
        .then(() => {
          // Меняем иконку на галочку
          copyButton.innerHTML = icons.check;
          
          // Возвращаем исходную иконку через 2 секунды
          setTimeout(() => {
            copyButton.innerHTML = icons.copy;
          }, 2000);
        })
        .catch(err => {
          console.error('Не удалось скопировать текст: ', err);
        });
    });
  }
  
  // Анимация кнопки с иконкой
  const buyNowBtn = container.querySelector('.btn-glow');
  if (buyNowBtn) {
    const chevron = buyNowBtn.querySelector('svg');
    
    buyNowBtn.addEventListener('mouseenter', () => {
      chevron.style.transform = 'translateX(4px)';
      chevron.style.transition = 'transform 0.3s ease';
    });
    
    buyNowBtn.addEventListener('mouseleave', () => {
      chevron.style.transform = 'translateX(0)';
    });
  }
} 