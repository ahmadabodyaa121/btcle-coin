/**
 * Модуль шапки сайта
 */

// SVG иконки
const icons = {
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h16M4 6h16M4 18h16"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="chevron"><path d="m6 9 6 6 6-6"/></svg>`,
  bitcoin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.767 19.089c4.924.868 9.401-2.764 9.401-7.8 0-5.425-4.656-9.588-10-9.176A9.132 9.132 0 0 0 5.255 5.24c-3.088 3.713-2.447 9.058 1.511 12.038M15 8.5a2.5 2.5 0 0 1-1.926 4H9V8.5h4.074c.922 0 1.703.4 1.926 1M12 16h3m-1.5-7.5v7.5"/></svg>`
};

/**
 * Загрузка шапки
 * @param {HTMLElement} element - DOM-элемент для вставки шапки
 */
export async function loadHeader(element) {
  // HTML шапки
  const headerHtml = `
    <div class="header header-transparent" id="main-header">
      <div class="header-container">
        <div class="header-content">
          
          <!-- Навигация для десктопа -->
          <nav class="desktop-nav">
            <a href="?page=about" class="nav-link" data-navigate>About</a>
            <a href="?page=story" class="nav-link" data-navigate>Story</a>
            <a href="?page=tokenomics" class="nav-link" data-navigate>Tokenomics</a>
            <a href="?page=whitepaper" class="nav-link" data-navigate>Whitepaper</a>
            
            <!-- Выпадающее меню Explore -->
            <div class="dropdown">
              <button class="nav-link dropdown-toggle">
                Explore ${icons.chevronDown}
              </button>
              <div class="dropdown-menu">
                <a href="?page=why-btcle" class="dropdown-item" data-navigate>Why BTCLE?</a>
                <a href="?page=roadmap" class="dropdown-item" data-navigate>Roadmap</a>
              </div>
            </div>
            
            <!-- Выпадающее меню Connect -->
            <div class="dropdown">
              <button class="nav-link dropdown-toggle">
                Connect ${icons.chevronDown}
              </button>
              <div class="dropdown-menu">
                <a href="mailto:info@bitcoin-limitededition.com" class="dropdown-item">Email</a>
                <a href="https://t.me/bitcoinlimitededition" class="dropdown-item" target="_blank" rel="noopener noreferrer">Telegram</a>
                <a href="https://x.com/bitcoinbtcle" class="dropdown-item" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              </div>
            </div>
          </nav>
          
          <!-- Кнопка мобильного меню -->
          <button id="mobile-menu-toggle" class="mobile-menu-toggle">
            ${icons.menu}
          </button>

          <!-- Кнопка "Домой" для мобильного хедера -->
          <a href="?" class="mobile-header-home-logo" data-navigate>
            <img src="/images/logo-main.png" alt="Home" class="logo-image">
          </a>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div id="mobile-menu" class="mobile-menu">
        <nav class="mobile-nav">
          <a href="?page=about" class="mobile-nav-item" data-navigate>About</a>
          <a href="?page=story" class="mobile-nav-item" data-navigate>Story</a>
          <a href="?page=tokenomics" class="mobile-nav-item" data-navigate>Tokenomics</a>
          <a href="?page=whitepaper" class="mobile-nav-item" data-navigate>Whitepaper</a>
          
          <!-- Мобильное выпадающее меню Explore -->
          <button id="mobile-explore-toggle" class="mobile-nav-item mobile-dropdown-toggle">
            <span>Explore</span>
            ${icons.chevronDown}
          </button>
          <div id="mobile-explore-menu" class="mobile-dropdown-menu">
            <a href="?page=why-btcle" class="mobile-nav-item" data-navigate>Why BTCLE?</a>
            <a href="?page=roadmap" class="mobile-nav-item" data-navigate>Roadmap</a>
          </div>
          
          <!-- Мобильное выпадающее меню Connect -->
          <button id="mobile-connect-toggle" class="mobile-nav-item mobile-dropdown-toggle">
            <span>Connect</span>
            ${icons.chevronDown}
          </button>
          <div id="mobile-connect-menu" class="mobile-dropdown-menu">
            <a href="mailto:info@bitcoin-limitededition.com" class="mobile-nav-item">Email</a>
            <a href="https://t.me/bitcoinlimitededition" class="mobile-nav-item" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://x.com/bitcoinbtcle" class="mobile-nav-item" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          </div>
        </nav>
      </div>
    </div>
  `;
  
  // Вставка HTML
  element.innerHTML = headerHtml;
  
  // Инициализация обработчиков событий
  initHeaderEvents();
}

/**
 * Инициализация обработчиков событий шапки
 */
function initHeaderEvents() {
  // DOM-элементы
  const header = document.getElementById('main-header');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const exploreToggle = document.getElementById('mobile-explore-toggle');
  const exploreMenu = document.getElementById('mobile-explore-menu');
  const connectToggle = document.getElementById('mobile-connect-toggle');
  const connectMenu = document.getElementById('mobile-connect-menu');
  
  // Обработка скролла страницы
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.remove('header-transparent');
      header.classList.add('header-scrolled');
    } else {
      header.classList.add('header-transparent');
      header.classList.remove('header-scrolled');
    }
  });
  
  // Проверка начального скролла
  if (window.scrollY > 10) {
    header.classList.remove('header-transparent');
    header.classList.add('header-scrolled');
  }
  
  // Переключение мобильного меню
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
      menuToggle.innerHTML = icons.close;
    } else {
      menuToggle.innerHTML = icons.menu;
    }
  });
  
  // Мобильное выпадающее меню Explore
  exploreToggle.addEventListener('click', () => {
    exploreToggle.classList.toggle('active');
    exploreMenu.classList.toggle('active');
  });
  
  // Мобильное выпадающее меню Connect
  connectToggle.addEventListener('click', () => {
    connectToggle.classList.toggle('active');
    connectMenu.classList.toggle('active');
  });
  
  // Закрытие мобильного меню при клике по ссылке
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-item[data-navigate]');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.innerHTML = icons.menu;
    });
  });
} 