/**
 * Страница "FAQ"
 * @module pages/faq
 */
import { createLayout } from '../components/layout.js';
import { showGlobalLoader, hideGlobalLoader } from '../components/loader.js';

/**
 * Создает содержимое страницы "FAQ"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createFaqPage(container) {
  // Показываем лоадер
  showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const faqContainer = document.createElement('div');
  faqContainer.classList.add('section-container');
  faqContainer.classList.add('faq-container');
  
  // Создаем содержимое секции
  const content = `
    <div class="section-content fade-in-up">
      <h1 class="section-title">Frequently Asked Questions</h1>
      
      <div class="section-description">
        <p>Find answers to common questions about BTC Limited Edition, our technology, and collectibles.</p>
      </div>
      
      <div class="faq-categories">
        <button class="faq-category-btn active" data-category="general">General</button>
        <button class="faq-category-btn" data-category="technology">Technology</button>
        <button class="faq-category-btn" data-category="collectibles">Collectibles</button>
        <button class="faq-category-btn" data-category="wallet">Wallet & Security</button>
      </div>
      
      <div class="faq-items">
        <!-- General FAQ Items -->
        <div class="faq-category active" data-category="general">
          <div class="faq-item">
            <div class="faq-question">
              <h3>What is BTC Limited Edition?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTC Limited Edition (BTCLE) is a platform for creating and collecting scarce digital collectibles secured by Bitcoin's blockchain. Our collectibles combine artistic excellence with the unparalleled security and provenance tracking offered by Bitcoin.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>How is BTCLE different from other NFT projects?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Unlike most NFT projects that rely on other blockchains, BTCLE collectibles are secured by Bitcoin - the most secure and established blockchain network. We leverage advanced Bitcoin technologies to create truly scarce digital assets with provable authenticity and ownership, while maintaining the security guarantees of Bitcoin.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>How can I get started with BTCLE?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>To get started with BTCLE, you'll need:</p>
              <ol>
                <li>A Bitcoin wallet that supports the necessary protocols</li>
                <li>Bitcoin to purchase collectibles</li>
                <li>Create an account on our platform</li>
              </ol>
              <p>Detailed instructions can be found in our <a href="#">Getting Started Guide</a>.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>When is the official launch?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Our platform is scheduled for launch in Q2 2024. Join our newsletter and follow our social media channels for the latest updates and announcements.</p>
            </div>
          </div>
        </div>
        
        <!-- Technology FAQ Items -->
        <div class="faq-category" data-category="technology">
          <div class="faq-item">
            <div class="faq-question">
              <h3>How does BTCLE work on Bitcoin?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTCLE utilizes a combination of cutting-edge Bitcoin technologies including:</p>
              <ul>
                <li><strong>Ordinals Protocol</strong> - for inscribing unique data directly onto individual satoshis</li>
                <li><strong>RGB Protocol</strong> - for complex asset issuance and management</li>
                <li><strong>Lightning Network</strong> - for scaling transactions</li>
                <li><strong>Taproot</strong> - for enhanced privacy and efficiency</li>
              </ul>
              <p>This technology stack allows us to create provably scarce and unique digital collectibles while maintaining Bitcoin's security model.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>Are BTCLE collectibles compatible with existing Bitcoin wallets?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTCLE collectibles require wallets that support the specific protocols we use. We maintain a list of compatible wallets on our website, and we're also developing our own dedicated wallet solution for the best user experience.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>What about environmental concerns?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTCLE leverages Bitcoin's existing security infrastructure without significantly increasing its energy consumption. By utilizing existing Bitcoin infrastructure, our platform adds value to the network without proportionally increasing environmental impact. Additionally, we're committed to supporting renewable energy initiatives within the Bitcoin mining ecosystem.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>How are transactions processed and verified?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Transactions on BTCLE are processed and verified using Bitcoin's blockchain. Every transfer of ownership is recorded on the Bitcoin blockchain, providing an immutable record of provenance. For smaller transactions, we utilize Layer 2 solutions like Lightning Network to reduce fees and improve speed, while still anchoring to Bitcoin's security.</p>
            </div>
          </div>
        </div>
        
        <!-- Collectibles FAQ Items -->
        <div class="faq-category" data-category="collectibles">
          <div class="faq-item">
            <div class="faq-question">
              <h3>What kinds of collectibles are available on BTCLE?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTCLE offers a curated selection of high-quality digital collectibles, including:</p>
              <ul>
                <li>Digital artwork from renowned and emerging artists</li>
                <li>Limited edition collectible series</li>
                <li>Interactive digital assets</li>
                <li>Collaborative collections with brands and creators</li>
              </ul>
              <p>Each collectible is meticulously crafted and verified for authenticity.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>How is scarcity enforced for collectibles?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Scarcity is enforced at the protocol level. Each collectible has a predetermined supply limit that is programmatically enforced and cannot be altered once established. This creates true digital scarcity that can be verified by anyone through the blockchain.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>Can I trade or sell my collectibles?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Yes, BTCLE collectibles are fully transferable. You can trade them on our native marketplace or on compatible third-party platforms. Since ownership is recorded on the Bitcoin blockchain, transfers are secure, transparent, and verifiable.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>How do royalties work for creators?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>We've implemented a robust royalty system that ensures creators receive compensation for secondary sales of their work. Royalties are encoded at the protocol level and automatically distributed with each transaction, providing ongoing revenue for artists and creators.</p>
            </div>
          </div>
        </div>
        
        <!-- Wallet & Security FAQ Items -->
        <div class="faq-category" data-category="wallet">
          <div class="faq-item">
            <div class="faq-question">
              <h3>How secure are BTCLE collectibles?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTCLE collectibles inherit Bitcoin's unparalleled security. Your ownership is secured by the same cryptographic principles and network effects that secure billions of dollars in Bitcoin value. As long as you follow proper security practices for your private keys, your collectibles remain secure.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>What happens if I lose access to my wallet?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>As with any cryptocurrency wallet, if you lose access to your private keys or recovery phrase, you will lose access to your collectibles. We strongly recommend:</p>
              <ul>
                <li>Backing up your recovery phrase in multiple secure locations</li>
                <li>Using hardware wallets for enhanced security</li>
                <li>Considering multisig solutions for valuable collections</li>
              </ul>
              <p>Our platform cannot recover lost keys or collectibles, as this would compromise the security and decentralization of the system.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>Can I view my collectibles outside the BTCLE platform?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Yes, BTCLE collectibles can be viewed in any compatible wallet or explorer. We're also working with partners to ensure broader ecosystem support for displaying and interacting with your collectibles across various platforms.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <h3>How are my personal details protected?</h3>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>BTCLE prioritizes user privacy and data security. Our platform only collects necessary information, which is stored and processed according to best security practices and relevant regulations. Additionally, the Bitcoin-based nature of our platform allows for varying degrees of privacy in transactions, depending on user preference.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="faq-contact">
        <h3>Still have questions?</h3>
        <p>Contact our support team at <a href="mailto:support@btcle.com">support@btcle.com</a> or join our community on Discord for real-time assistance.</p>
      </div>
    </div>
  `;
  
  faqContainer.innerHTML = content;
  
  // Добавляем кнопку возврата на главную
  const homeButton = createHomeButton();
  faqContainer.appendChild(homeButton);
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(faqContainer);
  
  // Добавляем layout в контейнер страницы
  container.appendChild(layout.container);
  
  // Скрываем лоадер с задержкой для анимации
  setTimeout(() => {
    hideGlobalLoader();
    
    // Анимируем появление элементов навигации
    const header = document.getElementById('header');
    if (header) {
      header.classList.add('visible');
    }
    
    // Анимируем появление контента
    const sectionContent = faqContainer.querySelector('.section-content');
    if (sectionContent) {
      sectionContent.classList.add('visible');
    }
    
    // Показываем кнопку домой
    homeButton.classList.add('visible');
    
    // Добавляем обработчики для аккордеона FAQ
    setupFaqInteractions();
  }, 500);
  
  return container;
}

/**
 * Настраивает интерактивность для FAQ (аккордеон и категории)
 */
function setupFaqInteractions() {
  // Обработчик для переключения вопросов аккордеона
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const wasActive = item.classList.contains('active');
      
      // Закрываем все открытые вопросы
      document.querySelectorAll('.faq-item.active').forEach(activeItem => {
        activeItem.classList.remove('active');
        const toggle = activeItem.querySelector('.faq-toggle');
        if (toggle) toggle.textContent = '+';
      });
      
      // Открываем текущий вопрос, если он не был активен
      if (!wasActive) {
        item.classList.add('active');
        const toggle = question.querySelector('.faq-toggle');
        if (toggle) toggle.textContent = '−';
        
        // Плавная анимация скролла к вопросу
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
  
  // Обработчик для переключения категорий
  const categoryButtons = document.querySelectorAll('.faq-category-btn');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      
      // Сбрасываем активные кнопки
      document.querySelectorAll('.faq-category-btn.active').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Делаем текущую кнопку активной
      button.classList.add('active');
      
      // Скрываем все категории
      document.querySelectorAll('.faq-category').forEach(cat => {
        cat.classList.remove('active');
      });
      
      // Показываем выбранную категорию
      const selectedCategory = document.querySelector(`.faq-category[data-category="${category}"]`);
      if (selectedCategory) {
        selectedCategory.classList.add('active');
        
        // Анимируем появление вопросов
        const items = selectedCategory.querySelectorAll('.faq-item');
        items.forEach((item, index) => {
          item.style.opacity = 0;
          item.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
          }, 100 + index * 50);
        });
      }
    });
  });
  
  // Анимация первоначального появления вопросов
  const initialItems = document.querySelectorAll('.faq-category.active .faq-item');
  initialItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }, 300 + index * 100);
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
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  `;
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
export default createFaqPage; 