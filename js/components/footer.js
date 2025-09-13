/**
 * Модуль подвала сайта
 */

// SVG иконки
const icons = {
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`
};

/**
 * Загрузка подвала
 * @param {HTMLElement} element - DOM-элемент для вставки подвала
 */
export async function loadFooter(element) {
  const currentYear = new Date().getFullYear();
  
  // HTML подвала
  const footerHtml = `
    <div class="footer">
      <!-- Панель социальных сетей -->
      <div class="social-bar">
        <div class="container">
          <div class="social-links">
            <a href="#" class="social-link" title="Facebook">
              ${icons.facebook}
            </a>
            <a href="#" class="social-link" title="Twitter">
              ${icons.twitter}
            </a>
            <a href="#" class="social-link" title="Instagram">
              ${icons.instagram}
            </a>
            <a href="#" class="social-link" title="YouTube">
              ${icons.youtube}
            </a>
            <a href="#" class="social-link" title="Telegram">
              ${icons.send}
            </a>
            <a href="#" class="social-link" title="Share">
              ${icons.share}
            </a>
            <a href="#" class="social-link" title="LinkedIn">
              ${icons.linkedin}
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-container">
        <div class="footer-grid">
          <!-- Информация о проекте -->
          <div class="footer-info">
            <div class="footer-logo">
              <span class="footer-logo-gold">B</span>itcoin
              <span class="footer-logo-gold"> L</span>imited
              <span class="footer-logo-gold"> E</span>dition
            </div>
            <div class="footer-token">BTCLE 210,000</div>
            
            <p class="footer-description">
              Bitcoin Limited Edition (BTCLE) is a next-generation cryptocurrency with a fixed supply of 210,000 tokens, 
              designed for sustainable growth, fairness, and true decentralization.
            </p>
            
            <!-- Форма подписки на рассылку -->
            <div class="newsletter">
              <h3 class="newsletter-title">Stay Updated</h3>
              <div class="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  class="newsletter-input"
                />
                <button class="newsletter-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <!-- Навигация по сайту -->
          <div class="footer-nav">
            <div class="footer-nav-column">
              <h3 class="footer-nav-title">Site Map</h3>
              <ul class="footer-nav-list">
                <li><a href="?page=about" class="footer-nav-link" data-navigate>About</a></li>
                <li><a href="?page=tokenomics" class="footer-nav-link" data-navigate>Tokenomics</a></li>
                <li><a href="?page=roadmap" class="footer-nav-link" data-navigate>Roadmap</a></li>
                <li><a href="?page=whitepaper" class="footer-nav-link" data-navigate>Whitepaper</a></li>
                <li><a href="?page=outreach" class="footer-nav-link" data-navigate>Outreach</a></li>
                <li><a href="?page=vision" class="footer-nav-link" data-navigate>Vision</a></li>
              </ul>
            </div>
            
            <div class="footer-nav-column">
              <h3 class="footer-nav-title">Connect</h3>
              <ul class="footer-nav-list">
                <li><a href="mailto:contact@btcle.io" class="footer-nav-link">Email Us</a></li>
                <li><a href="https://t.me/btcle" class="footer-nav-link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="https://x.com/btcle" class="footer-nav-link" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                <li><a href="#" class="footer-nav-link">Discord</a></li>
                <li><a href="#" class="footer-nav-link">Medium</a></li>
              </ul>
            </div>
            
            <div class="footer-nav-column">
              <h3 class="footer-nav-title">Legal</h3>
              <ul class="footer-nav-list">
                <li><a href="#" class="footer-nav-link">Terms of Service</a></li>
                <li><a href="#" class="footer-nav-link">Privacy Policy</a></li>
                <li><a href="#" class="footer-nav-link">Risk Disclosure</a></li>
                <li><a href="#" class="footer-nav-link">Cookies Policy</a></li>
                <li><a href="#" class="footer-nav-link">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Нижняя часть подвала -->
        <div class="footer-bottom">
          <div class="footer-disclaimer">
            <p class="footer-disclaimer-text">
              DISCLAIMER: Cryptocurrency investments involve high market risk. 
              Bitcoin Limited Edition is not responsible for your trading losses. 
              The opinions expressed on this website do not constitute financial advice. 
              Always do your own research before investing.
            </p>
            
            <p class="footer-copyright">
              &copy; ${currentYear} Bitcoin Limited Edition. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Вставка HTML
  element.innerHTML = footerHtml;
  
  // Инициализация обработчиков событий
  initFooterEvents();
}

/**
 * Инициализация обработчиков событий для подвала
 */
function initFooterEvents() {
  // Обработчик для формы подписки
  const newsletterForm = document.querySelector('.newsletter-form');
  const newsletterInput = document.querySelector('.newsletter-input');
  const newsletterButton = document.querySelector('.newsletter-button');
  
  if (newsletterForm) {
    newsletterButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Проверка email
      const email = newsletterInput.value.trim();
      
      if (email && validateEmail(email)) {
        // Здесь будет логика отправки формы
        alert(`Подписка на рассылку для ${email} успешно оформлена!`);
        newsletterInput.value = '';
      } else {
        // Показываем ошибку
        alert('Пожалуйста, введите корректный email адрес.');
      }
    });
  }
}

/**
 * Валидация email
 * @param {string} email - Email для проверки
 * @returns {boolean} - Результат валидации
 */
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
} 