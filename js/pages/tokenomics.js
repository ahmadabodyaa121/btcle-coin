/**
 * Страница "Tokenomics"
 * @module pages/tokenomics
 */
import { createLayout } from '../components/layout.js';
import { hideGlobalLoader } from '../components/loader.js';

// SVG иконки
const ICONS = {
  creditCard: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zM1 4v8h13V4z"></path><path d="M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></path></svg>`,
  trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3 6.035a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"></path></svg>`,
  barChart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path></svg>`,
  lineChart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path></svg>`,
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>`,
  calendar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>`,
  chevronDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>`,
  clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>`,
  landmark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <rect width="18" height="7" x="3" y="11" rx="2" />
    <path d="m12 7-3-2-3 2v4h18V7l-3-2-3 2" />
  </svg>`,
  copy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>`,
  check: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>`,
  home: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>`,
  info: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>`,
  lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>`
};

// Данные для страницы
const contractAddress = '0x9d2144328e1d618F54Cd38540F5eE50671f6A208';

const tokenCardData = [
  {
    title: 'NAME',
    value: 'Bitcoin Limited Edition',
    icon: ICONS.creditCard,
  },
  {
    title: 'TICKER',
    value: 'BTCLE',
    icon: ICONS.trendingUp,
  },
  {
    title: 'MAX SUPPLY',
    value: '210,000',
    icon: ICONS.barChart,
    highlight: true,
  },
  {
    title: 'ITD SUPPLY',
    value: '21,000',
    icon: ICONS.lineChart,
  },
//   {
//     title: 'CONTRACT',
//     isContract: true,
//     icon: ICONS.shield,
//     value: contractAddress,
//   }
];

const distributionData = [
  { name: 'ITD Supply (Trading)', value: 10, color: '#585757' },
  { name: 'Locked (10-Year Vesting)', value: 90, color: '#000' },
];

const monthlyBreakdown2026 = [
  { month: 'January', released: 3800, cumulative: 3800 },
  { month: 'February', released: 3700, cumulative: 7500 },
  { month: 'March', released: 3600, cumulative: 11100 },
  { month: 'April', released: 3500, cumulative: 14600 },
  { month: 'May', released: 3400, cumulative: 18000 },
  { month: 'June', released: 3300, cumulative: 21300 },
  { month: 'July', released: 3200, cumulative: 24500 },
  { month: 'August', released: 3100, cumulative: 27600 },
  { month: 'September', released: 3000, cumulative: 30600 },
  { month: 'October', released: 2900, cumulative: 33500 },
  { month: 'November', released: 2800, cumulative: 36300 },
  { month: 'December', released: 2700, cumulative: 39000 }
];

const annualVesting = [
  { year: '2026', monthRange: '3,800 → 2,700', annual: 39000, remaining: 150000 },
  { year: '2027', monthRange: '2,650 → 2,100', annual: 28500, remaining: 121500 },
  { year: '2028', monthRange: '2,075 → 1,800', annual: 23250, remaining: 98250 },
  { year: '2029', monthRange: '1,785 → 1,620', annual: 20430, remaining: 77820 },
  { year: '2030', monthRange: '1,610 → 1,500', annual: 18660, remaining: 59160 },
  { year: '2031', monthRange: '1,495 → 1,440', annual: 17610, remaining: 41550 },
  { year: '2032', monthRange: '1,420 → 1,200', annual: 15720, remaining: 25830 },
  { year: '2033', monthRange: '1,000 → 835', annual: 11010, remaining: 14820 },
  { year: '2034', monthRange: '700 → 645', annual: 8070, remaining: 6750 },
  { year: '2035', monthRange: '600 → 425', annual: 6750, remaining: 0 }
];

/**
 * Создает содержимое страницы "Tokenomics"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createTokenomicsPage(container) {
  // Лоадер уже показан роутером
  // showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const tokenomicsContainer = document.createElement('div');
  tokenomicsContainer.classList.add('section-container');
  tokenomicsContainer.classList.add('tokenomics-container');
  
  // Создаем содержимое заголовка секции
  const headerContent = `
    <div class="tokenomics-header fade-in">
      <h1 class="section-title">BTCLE Tokenomics</h1>
      <p class="section-subtitle">Fixed Supply. Transparent. Fair. Non-Inflationary.</p>
      
    </div>
  `;
  
  tokenomicsContainer.innerHTML = headerContent;
  
  // Добавляем блок с обзором максимального предложения
  const supplyOverviewSection = document.createElement('div');
  supplyOverviewSection.classList.add('overview-section', 'fade-in-up');
  supplyOverviewSection.innerHTML = `
    <div class="overview-content">
      <h2 class="overview-title">Max Supply Overview</h2>
      <div class="overview-text">
        <p>Bitcoin Limited Edition (BTCLE) is a <strong>fixed-supply crypto asset</strong> with a max supply of <span class="highlight-text">210,000 BTCLE</span>.</p> 
        <p>This non-inflationary model reinforces BTCLE's mission of sustainable growth, transparent governance, and alignment with long-term holders.</p>
        
        <p>At the time of the Initial Token Distribution (ITD), <strong>10% of the total supply</strong> (21,000 BTCLE) will be released to the public to support trading liquidity and early adoption.</p>
        
        <p>The remaining <strong>90%</strong> (189,000 BTCLE) is locked and allocated for a long-term vesting plan governed by a smart contract. BTCLE's vesting does not include a cliff unlock period, and does not follow a linear vesting model. Instead, it employs a <span class="highlight-text">monthly declining unlock mechanism</span>, where tokens are gradually released in decreasing amounts over a 10-year period, starting January 2026 and concluding December 2035.</p>
      </div>
    </div>
  `;
  
  tokenomicsContainer.appendChild(supplyOverviewSection);
  
  // Добавляем токен-карточки
  const tokensGrid = document.createElement('div');
  tokensGrid.classList.add('tokens-grid', 'fade-in-up');
  
  tokenCardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('token-card', 'fade-in-up');
    
    if (card.highlight) {
      cardElement.classList.add('highlighted');
    }
    
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('card-icon-container');
    iconContainer.innerHTML = card.icon;
    
    const titleElement = document.createElement('div');
    titleElement.classList.add('card-title');
    titleElement.textContent = card.title;
    
    const valueContainer = document.createElement('div');
    valueContainer.classList.add('card-value-container');
    
    if (card.isContract) {
      const addressCode = document.createElement('code');
      addressCode.classList.add('contract-address');
      addressCode.textContent = card.value;
      
      const copyButton = document.createElement('button');
      copyButton.classList.add('copy-button');
      copyButton.innerHTML = ICONS.copy;
      copyButton.title = 'Copy contract address';
      
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(card.value);
        copyButton.innerHTML = ICONS.check;
        setTimeout(() => {
          copyButton.innerHTML = ICONS.copy;
        }, 2000);
      });
      
      valueContainer.appendChild(addressCode);
      valueContainer.appendChild(copyButton);
    } else {
      const valueElement = document.createElement('div');
      valueElement.classList.add('card-value');
      valueElement.textContent = card.value;
      valueContainer.appendChild(valueElement);
    }
    
    cardElement.appendChild(iconContainer);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(valueContainer);
    
    tokensGrid.appendChild(cardElement);
  });
  
  tokenomicsContainer.appendChild(tokensGrid);
  
  // Создаем блок с целью распределения
  const purposeSection = document.createElement('div');
  purposeSection.classList.add('purpose-section', 'fade-in-up');
  purposeSection.innerHTML = `
    <h2 class="purpose-title">Purpose of Distribution</h2>
    <p class="purpose-text">To support responsible circulation, sustainable growth, and long-term value alignment, BTCLE's token distribution is structured as follows:</p>
    
    <div class="distribution-table-container">
      <h3 class="table-subtitle">Distribution Breakdown</h3> 
      <table class="distribution-table">
        <thead>
          <tr>
            <th>Allocation</th>
            <th>Amount (BTCLE)</th>
            <th>% of Total Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Initial Token Distribution (ITD)</td>
            <td class="amount-cell">21,000</td>
            <td class="percent-cell">10%</td>
          </tr>
          <tr>
            <td>Locked vesting allocation (10-Year Vesting)</td>
            <td class="amount-cell">189,000</td>
            <td class="percent-cell">90%</td>
          </tr>
          <tr class="total-row">
            <td>Max Supply</td>
            <td class="amount-cell">210,000</td>
            <td class="percent-cell">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <ul class="distribution-points">
      <li><span class="point-icon">●</span> <span class="point-text"><strong>10%</strong> of the total supply will be made available at launch to provide public access and trading liquidity.</span></li>
      <li><span class="point-icon">●</span> <span class="point-text"><strong>90%</strong> of the supply is locked and released via a long-term vesting mechanism that gradually introduces tokens into circulation over 10 years.</span></li>
    </ul>
  `;
  
  tokenomicsContainer.appendChild(purposeSection);
  
  // Создаем секцию распределения токенов
  const distributionSection = document.createElement('div');
  distributionSection.classList.add('distribution-section', 'fade-in-up');
  
  distributionSection.innerHTML = `
    <h2 class="distribution-title">BTCLE Distribution</h2>
    <div class="chart-container">
      <canvas id="distribution-chart"></canvas>
    </div>
    
    <div class="vesting-mechanics">
      <h3 class="mechanics-title">Vesting Mechanics</h3>
      <ul class="mechanics-list">
        <li><span class="mechanics-label">Vesting Start:</span> <span class="mechanics-value">January 2026</span></li>
        <li><span class="mechanics-label">Vesting End:</span> <span class="mechanics-value">December 2035</span></li>
        <li><span class="mechanics-label">Mechanism:</span> <span class="mechanics-value">Monthly token release via smart contract, following a gradually decreasing emission schedule</span></li>
        <li><span class="mechanics-label">Governance:</span> <span class="mechanics-value">Fully transparent and on-chain</span></li>
      </ul>
      <p class="mechanics-summary">This structure is designed to reduce short-term sell pressure and reward holders with a progressively deflationary release curve.</p>
    </div>
    
    <div class="monthly-vesting-section">
      <button class="toggle-button" id="monthly-toggle">
        <span class="toggle-icon">${ICONS.calendar}</span>
        <span class="toggle-text">Monthly Vesting Breakdown (2026)</span>
        <span class="chevron">${ICONS.chevronDown}</span>
      </button>
      
      <div class="monthly-content" id="monthly-content" style="display: none;">
        <div class="table-container">
          <table class="vesting-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>BTCLE Released</th>
                <th>Cumulative Released</th>
              </tr>
            </thead>
            <tbody>
              ${monthlyBreakdown2026.map(month => `
                <tr>
                  <td>${month.month}</td>
                  <td class="value-cell">${month.released.toLocaleString()}</td>
                  <td class="cumulative-cell">${month.cumulative.toLocaleString()}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        <div class="remaining-box">
          <p>
            Remaining Locked Supply (as of December 2026): 
            <span class="remaining-value">150,000 BTCLE</span>
          </p>
        </div>
      </div>
    </div>
  `;
  
  tokenomicsContainer.appendChild(distributionSection);
  
  // Создаем секцию годового вестинга
  const vestingSection = document.createElement('div');
  vestingSection.classList.add('vesting-schedule', 'fade-in-up');
  
  vestingSection.innerHTML = `
    <button class="toggle-button vesting-toggle" id="vesting-toggle">
      <div class="toggle-left">
        <span class="toggle-icon">${ICONS.clock}</span>
        <span class="toggle-text">Vesting Schedule</span>
      </div>
      <span class="chevron">${ICONS.chevronDown}</span>
    </button>
    
    <div class="vesting-content" id="vesting-content" style="display: none;">
      <div class="annual-header">
        <span class="annual-icon">${ICONS.landmark}</span>
        <h3>Annual Vesting Schedule (2026–2035)</h3>
      </div>
      
      <div class="table-container">
        <table class="vesting-table annual-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Monthly Range (BTCLE)</th>
              <th>Annual Total</th>
              <th>Remaining Locked Supply</th>
            </tr>
          </thead>
          <tbody>
            ${annualVesting.map(year => `
              <tr>
                <td>${year.year}</td>
                <td>${year.monthRange}</td>
                <td class="annual-total">${year.annual.toLocaleString()}</td>
                <td>${year.remaining.toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
  
  tokenomicsContainer.appendChild(vestingSection);
  
  // Добавляем блок с принципами распределения
  const principlesSection = document.createElement('div');
  principlesSection.classList.add('principles-section', 'fade-in-up');
  principlesSection.innerHTML = `
    <h2 class="principles-title">Summary of Distribution Principles</h2>
    <ul class="principles-list">
      <li><span class="point-icon">●</span> Max Supply: <strong>210,000 BTCLE</strong> (non-inflationary).</li>
      <li><span class="point-icon">●</span> ITD Circulation: <strong>21,000 BTCLE</strong> (10% released for trading at launch).</li>
      <li><span class="point-icon">●</span> Locked: <strong>189,000 BTCLE</strong> (90% locked with a 10-year vesting period).</li>
      <li><span class="point-icon">●</span> Release Mechanism: Smart contract-based, with a deflationary model.</li>
    </ul>
    
    <div class="principles-goal" style="display:none;"> 
      <strong>Goal:</strong> Ensure sustainability, reduce volatility, reward long-term holders
    </div>
  `;
  
  tokenomicsContainer.appendChild(principlesSection);
  
  // Добавляем блок о прозрачности и управлении
  const transparencySection = document.createElement('div');
  transparencySection.classList.add('transparency-section', 'fade-in-up');
  transparencySection.innerHTML = `
    <h2 class="transparency-title">Transparency & Governance Commitment</h2>
    <div class="transparency-content">
      <p>BTCLE's token release mechanism is designed for full transparency, security, and long-term sustainability. It is:</p>
      <ul class="transparency-list">
        <li><span class="check-icon">●</span> Immutable and automated via audited smart contracts.</li>
        <li><span class="check-icon">●</span> Fully auditable, with all token movements visible on-chain in real time.</li>
      </ul>
      <p>The team reserves the right to propose adjustments to the vesting schedule in response to regulatory changes or community governance proposals. All modifications will be transparently disclosed and in accordance with BTCLE's long-term mission and ecosystem alignment.</p>
      <p>BTCLE follows a declining monthly issuance model, gradually reducing token release over time, supporting price stability and incentivizing long-term participation.</p>
    </div>
  `;
  
  tokenomicsContainer.appendChild(transparencySection);
  
  // Добавляем кнопку возврата на главную
  const homeButton = createHomeButton();
  tokenomicsContainer.appendChild(homeButton);
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(tokenomicsContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Добавляем стили
  loadStyles();
  
  // Загружаем Chart.js если еще не загружен
  loadChartJs(() => {
    initChart();
  });
  
  // Инициализируем обработчики событий
  initEventHandlers();
  
  // Скрываем лоадер
  setTimeout(() => {
    hideGlobalLoader();
    // Анимируем заголовок (оставляем как есть)
    const tokenomicsHeader = document.querySelector('.tokenomics-header');
    if (tokenomicsHeader) {
      tokenomicsHeader.classList.add('visible');
    }
    
    // Инициализируем новые скролл-анимации
    initScrollAnimations(tokenomicsContainer);
    
    // Показываем кнопку домой (можно тоже через IntersectionObserver, но пока так)
    homeButton.classList.add('visible');
  }, 100); // Уменьшаем задержку
  
  return container;
}

/**
 * Загружает Chart.js для создания диаграмм
 * @param {Function} callback - Функция, вызываемая после загрузки библиотеки
 */
function loadChartJs(callback) {
  if (window.Chart) {
    callback();
    return;
  }
  
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.onload = callback;
  document.head.appendChild(script);
}

/**
 * Инициализирует круговую диаграмму распределения токенов
 */
function initChart() {
  const ctx = document.getElementById('distribution-chart').getContext('2d');
  
  // --- Создаем градиенты ---
  const primaryColor = '#585757'; // Золотой
  const luxuryPurple = '#585757'; // Новый фиолетовый

  const gradient1 = ctx.createRadialGradient(150, 150, 50, 150, 150, 150); // Градиент для золотого
  gradient1.addColorStop(0, primaryColor);       
  gradient1.addColorStop(1, '#585757'); // Край золотого

  const gradient2 = ctx.createRadialGradient(150, 150, 50, 150, 150, 150); // Градиент для фиолетового
  gradient2.addColorStop(0, luxuryPurple);     // Центр фиолетового
  gradient2.addColorStop(1, '#000'); // Край фиолетового (темнее)
  // ------------------------
  
  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: distributionData.map(d => d.name),
      datasets: [{
        data: distributionData.map(d => d.value),
        backgroundColor: [gradient1, gradient2], // Используем новые градиенты
        borderColor: [primaryColor, luxuryPurple], // Цвета границ
        borderWidth: [2, 1],
        hoverBorderColor: ['#FFFFFF', '#E6D6F6'], // Цвет при наведении (для фиолетового - светлый)
        hoverBorderWidth: [4, 2],
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      layout: {
        padding: 10
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${context.raw}%`;
            }
          },
          backgroundColor: 'rgba(20, 20, 30, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: 'var(--color-gold)', // Можно оставить золотой или сделать динамическим
          borderWidth: 1,
          cornerRadius: 8,
          padding: 12,
          titleFont: {
            size: 16,
            weight: 'bold'
          },
          bodyFont: {
            size: 14,
            weight: 'normal'
          }
        }
      },
      animation: {
        animateRotate: true,
        animateScale: true
      }
    }
  });

  // Создаем кастомную легенду после инициализации Chart.js
  createCustomLegend();
  
  return chart;
}

/**
 * Создает кастомную легенду для диаграммы
 */
function createCustomLegend() {
  const chartContainer = document.querySelector('.chart-container');
  
  // Создаем контейнер для кастомной легенды
  const customLegend = document.createElement('div');
  customLegend.classList.add('custom-chart-legend');
  
  // Создаем элементы легенды на основе данных распределения
  const legendItems = distributionData.map(item => {
    return `
      <div class="legend-item">
        <span class="legend-color" style="background-color: ${item.color}"></span>
        <span class="legend-text">${item.name}: ${item.value}%</span>
      </div>
    `;
  }).join('');
  
  // Добавляем HTML элементов легенды в контейнер
  customLegend.innerHTML = legendItems;
  
  // Добавляем легенду рядом с графиком
  chartContainer.appendChild(customLegend);
}

/**
 * Инициализирует обработчики событий на странице
 */
function initEventHandlers() {
  // Обработчик для переключения отображения месячной разбивки
  const monthlyToggle = document.getElementById('monthly-toggle');
  const monthlyContent = document.getElementById('monthly-content');
  
  if (monthlyToggle && monthlyContent) {
    monthlyToggle.addEventListener('click', () => {
      const isHidden = monthlyContent.style.display === 'none';
      monthlyContent.style.display = isHidden ? 'block' : 'none';
      
      // Вращаем стрелку
      const chevron = monthlyToggle.querySelector('.chevron');
      if (chevron) {
        chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)';
      }
      
      // Анимация появления содержимого
      if (isHidden) {
        monthlyContent.classList.add('visible');
      } else {
        monthlyContent.classList.remove('visible');
      }
    });
  }
  
  // Обработчик для переключения отображения годового вестинга
  const vestingToggle = document.getElementById('vesting-toggle');
  const vestingContent = document.getElementById('vesting-content');
  
  if (vestingToggle && vestingContent) {
    vestingToggle.addEventListener('click', () => {
      const isHidden = vestingContent.style.display === 'none';
      vestingContent.style.display = isHidden ? 'block' : 'none';
      
      // Вращаем стрелку
      const chevron = vestingToggle.querySelector('.chevron');
      if (chevron) {
        chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)';
      }
      
      // Анимация появления содержимого
      if (isHidden) {
        vestingContent.classList.add('visible');
      } else {
        vestingContent.classList.remove('visible');
      }
    });
  }
}

/**
 * Загружает стили для страницы
 */
function loadStyles() {
  // Проверяем, загружены ли уже стили
  if (!document.getElementById('tokenomics-css')) {
    const linkElement = document.createElement('link');
    linkElement.id = 'tokenomics-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = '/css/tokenomics.css';
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
  button.innerHTML = ICONS.home;
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

/**
 * Инициализирует скролл-анимации для элементов страницы
 * @param {HTMLElement} parentElement - Родительский элемент для поиска
 */
function initScrollAnimations(parentElement) {
  // Выбираем все секции/элементы с классом fade-in-up
  const elementsToAnimate = parentElement.querySelectorAll('.fade-in-up');
  
  if (!elementsToAnimate.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
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

// Экспорт функции по умолчанию для совместимости
export default createTokenomicsPage; 