import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// Иконки (оставляем те же)
const ICONS = {
  diamond: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.45 2.27a1.5 1.5 0 0 0-0.9 0L2.71 7.33a1.5 1.5 0 0 0-.71 1.3V15.4a1.5 1.5 0 0 0 .71 1.3l8.84 5.06a1.5 1.5 0 0 0 .9 0l8.84-5.06a1.5 1.5 0 0 0 .71-1.3V8.63a1.5 1.5 0 0 0-.71-1.3L12.45 2.27Z"></path><path d="m7.66 8.63 9.67 5.49m-9.77 0 9.67-5.49M12 2.27v20.46"></path></svg>`, // Для Scarcity
  shieldCheck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`, // Для Integrity
  banknote: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`, // Для Liquidity
  landmark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`, // Для Structure
  brainCircuit: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0-.34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.96.46 2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0-.34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5Z"/><path d="M16 11.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1Z"/><path d="M12 15.5v-2"/><path d="M10.5 10.5v-1a1.5 1.5 0 0 1 3 0v1"/><path d="M12 4.5v2"/><path d="M10.5 18.5v-2"/><path d="M13.5 18.5v-2"/></svg>`, // Для Next Era / AI
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
};

/**
 * Создает содержимое страницы "Why BTCLE?"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createWhyBtclePage(container) {
  const layout = createLayout();
  const whyBtcleContainer = document.createElement('div');
  // Убираем section-container, т.к. стили теперь применяются к why-btcle-container напрямую
  whyBtcleContainer.classList.add('why-btcle-container');

  const content = `
    <div class="why-btcle-hero fade-in">
      
      <h1 class="section-title">Why <span class="highlight">BTCLE</span>?</h1>
      <p class="why-btcle-subtitle">A New Paradigm: Scarce, Auditable, and Liquidity-Backed.</p>
    </div>

    <div class="why-btcle-intro fade-in-up" data-animation-delay="0.1">
      <p>In a digital asset landscape saturated with hype cycles, inflated promises, and unsustainable tokenomics, Bitcoin Limited Edition (BTCLE) introduces a new paradigm: a scarce, auditable, and liquidity-backed asset, engineered with the rigor of institutional finance and the ethos of decentralized trust.</p>
      <p>BTCLE isn't just another token. It's a precision-engineered financial instrument, combining structural discipline with crypto-native ideals like transparency, decentralization, and user sovereignty.</p>
    </div>

    <div class="why-btcle-points">

      <!-- Point 1 - Используем why-point вместо why-point-card -->
      <div class="why-point fade-in-up" data-animation-delay="0.2">
        <div class="point-icon-wrapper">${ICONS.diamond}</div>
        <div class="point-content">
          <h2>1. Ultra-Scarce by Design</h2>
          <h3>Built for Conviction, Not Hype.</h3>
          <p>With a hard-capped supply of 210,000 tokens, BTCLE enforces absolute scarcity, eliminating inflation risk while avoiding the typical pitfalls of cliff unlocks or sudden supply shocks. Its declining issuance curve, embedded directly into audited smart contracts, is designed to reward long-term participation and disciplined holding. This is value earned through time, not manufactured by marketing.</p>
        </div>
      </div>

      <!-- Point 2 -->
      <div class="why-point fade-in-up" data-animation-delay="0.3">
        <div class="point-icon-wrapper">${ICONS.shieldCheck}</div>
        <div class="point-content">
          <h2>2. On-Chain Integrity</h2>
          <h3>Immutable, Non-Custodial, and Self-Enforcing.</h3>
          <p>Every element of BTCLE's supply logic, from launch through vesting, is governed by autonomous smart contracts, fully auditable and tamper-proof. There are no manual overrides, no hidden reallocations, and no operational backdoors. Every token movement is transparently enforced on-chain, ensuring holders can trust the protocol by design, not by authority.</p>
        </div>
      </div>

      <!-- Point 3 -->
      <div class="why-point fade-in-up" data-animation-delay="0.4">
        <div class="point-icon-wrapper">${ICONS.banknote}</div>
        <div class="point-content">
          <h2>3. 100% Liquidity-Backed</h2>
          <h3>Not Synthetic. Not Illiquid. Not a Mirage.</h3>
          <p>Every BTCLE token in circulation is supported by real, verifiable capital, secured in public liquidity pools designed for access across both decentralized and centralized trading environments. This is not theoretical depth; it's tangible support designed to uphold price integrity, mitigate volatility, and instill confidence in long-term holders. Stability isn't aspirational, it's structural.</p>
        </div>
      </div>

      <!-- Point 4 -->
      <div class="why-point fade-in-up" data-animation-delay="0.5">
        <div class="point-icon-wrapper">${ICONS.landmark}</div>
        <div class="point-content">
          <h2>4. Legally Structured</h2>
          <h3>Real Entity. Real Accountability. Real Standards.</h3>
          <p>BTCLE is issued through a legally registered entity governed by a structured compliance framework and a clear operational charter. While the team maintains principled anonymity in line with decentralized ideals, the project itself operates with institutional-grade integrity, meeting the expectations of serious investors while preserving the foundational values of decentralization and user sovereignty.</p>
        </div>
      </div>

      <!-- Point 5 -->
      <div class="why-point fade-in-up" data-animation-delay="0.6">
        <div class="point-icon-wrapper">${ICONS.brainCircuit}</div>
        <div class="point-content">
          <h2>5. Built for the Next Era</h2>
          <h3>Intelligent, Adaptive, and Community-Led.</h3>
          <p>BTCLE is not a static asset. The ecosystem is expanding with next-generation utility layers, including BTCLE AI and the introduction of Proof of Adaptive Intelligence (PoAI), aimed at unlocking purposeful real-world use cases and enhancing token velocity and relevance across decentralized networks.</p>
        </div>
      </div>

    </div>

    <div class="why-btcle-conclusion fade-in-up" data-animation-delay="0.7">
      <p>BTCLE is Where Scarcity Meets Strategy, and Transparency Meets Trust.</p>
    </div>
  `;

  whyBtcleContainer.innerHTML = content;

  // Добавляем кнопку Домой
  const homeButton = createHomeButton();
  whyBtcleContainer.appendChild(homeButton);

  layout.mainContainer.appendChild(whyBtcleContainer);
  container.appendChild(layout.container);

  loadStyles();

  // Скрываем лоадер и анимируем контент
  requestAnimationFrame(() => {
    hideGlobalLoader();

    // Показываем кнопку домой
    homeButton.classList.add('visible');

    // Инициализируем скролл-анимации для дочерних элементов
    initScrollAnimations(whyBtcleContainer);
  });

  return container;
}

/** Генерирует HTML для частиц */
function generateParticles(count = 10) {
  let particlesHtml = '';
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 1; // Smaller particles
    const delay = Math.random() * 10; // Longer, varied delays
    const xDrift = (Math.random() - 0.5) * 40; // Horizontal drift
    const yDrift = (Math.random() - 0.5) * 40; // Vertical drift
    particlesHtml += `<div class="particle" style="
      width: ${size}px; 
      height: ${size}px; 
      left: ${Math.random() * 100}%; 
      top: ${Math.random() * 100}%; 
      animation-delay: ${delay}s;
      --x-drift: ${xDrift};
      --y-drift: ${yDrift};
    "></div>`;
  }
  return particlesHtml;
}

/** Загружает стили для страницы */
function loadStyles() {
  if (!document.getElementById('why-btcle-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'why-btcle-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/pages/why-btcle.css';
    document.head.appendChild(linkElement);
  }
}

/** Инициализирует скролл-анимации */
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
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/** Создает кнопку возврата на главную страницу */
function createHomeButton() {
  const button = document.createElement('a');
  button.href = '/';
  button.setAttribute('data-navigate', '');
  button.classList.add('home-button');
  button.innerHTML = ICONS.home;
  button.title = 'Back to Home';
  return button;
}

export default createWhyBtclePage; 