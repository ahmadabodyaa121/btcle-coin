/**
 * Страница "Team"
 * @module pages/team
 */
import { createLayout } from '../components/layout.js';
import { showGlobalLoader, hideGlobalLoader } from '../components/loader.js';

/**
 * Создает содержимое страницы "Team"
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createTeamPage(container) {
  // Показываем лоадер
  showGlobalLoader();
  
  // Создаем основной layout с шапкой и футером
  const layout = createLayout();
  
  // Создаем контейнер для контента
  const teamContainer = document.createElement('div');
  teamContainer.classList.add('section-container');
  teamContainer.classList.add('team-container');
  
  // Создаем содержимое секции
  const content = `
    <div class="section-content fade-in-up">
      <h1 class="section-title">Our Team</h1>
      
      <div class="section-description">
        <p>Meet the talented individuals behind BTC Limited Edition who are driving innovation in the crypto space.</p>
      </div>
      
      <div class="team-grid">
        <div class="team-member">
          <div class="member-photo" style="background-image: url('/assets/images/team/team-1.jpg')"></div>
          <div class="member-info">
            <h3>Alexander Mitchell</h3>
            <p class="member-role">Founder & CEO</p>
            <p class="member-bio">Former blockchain architect with 10+ years experience in financial technology and cryptocurrency development.</p>
            <div class="social-links">
              <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-photo" style="background-image: url('/assets/images/team/team-2.jpg')"></div>
          <div class="member-info">
            <h3>Sophia Chen</h3>
            <p class="member-role">CTO</p>
            <p class="member-bio">Blockchain developer with expertise in smart contract security and scalable system architecture.</p>
            <div class="social-links">
              <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-photo" style="background-image: url('/assets/images/team/team-3.jpg')"></div>
          <div class="member-info">
            <h3>Marcus Johnson</h3>
            <p class="member-role">Head of Operations</p>
            <p class="member-bio">Operations specialist with experience scaling tech startups and managing global teams.</p>
            <div class="social-links">
              <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-photo" style="background-image: url('/assets/images/team/team-4.jpg')"></div>
          <div class="member-info">
            <h3>Lena Rodriguez</h3>
            <p class="member-role">Marketing Director</p>
            <p class="member-bio">Digital marketing strategist with a track record of successful crypto project launches and community building.</p>
            <div class="social-links">
              <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-photo" style="background-image: url('/assets/images/team/team-5.jpg')"></div>
          <div class="member-info">
            <h3>David Kim</h3>
            <p class="member-role">Blockchain Architect</p>
            <p class="member-bio">Expert in cryptographic systems and distributed ledger technologies with contributions to major blockchain projects.</p>
            <div class="social-links">
              <a href="#" title="GitHub"><i class="fab fa-github"></i></a>
              <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <div class="team-member">
          <div class="member-photo" style="background-image: url('/assets/images/team/team-6.jpg')"></div>
          <div class="member-info">
            <h3>Emma Watson</h3>
            <p class="member-role">Legal Counsel</p>
            <p class="member-bio">Specialized in cryptocurrency regulations and compliance across multiple jurisdictions.</p>
            <div class="social-links">
              <a href="#" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="advisors-section">
        <h2>Our Advisors</h2>
        <div class="advisors-grid">
          <div class="advisor">
            <div class="advisor-photo" style="background-image: url('/assets/images/team/advisor-1.jpg')"></div>
            <h4>Dr. Jason Richards</h4>
            <p>Economics Professor & Blockchain Researcher</p>
          </div>
          
          <div class="advisor">
            <div class="advisor-photo" style="background-image: url('/assets/images/team/advisor-2.jpg')"></div>
            <h4>Victoria Patel</h4>
            <p>Former FinTech Executive</p>
          </div>
          
          <div class="advisor">
            <div class="advisor-photo" style="background-image: url('/assets/images/team/advisor-3.jpg')"></div>
            <h4>Michael Zhang</h4>
            <p>Serial Entrepreneur & Investor</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  teamContainer.innerHTML = content;
  
  // Добавляем кнопку возврата на главную
  const homeButton = createHomeButton();
  teamContainer.appendChild(homeButton);
  
  // Добавляем контент в layout
  layout.mainContainer.appendChild(teamContainer);
  
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
    const sectionContent = teamContainer.querySelector('.section-content');
    if (sectionContent) {
      sectionContent.classList.add('visible');
    }
    
    // Показываем кнопку домой
    homeButton.classList.add('visible');
    
    // Анимация появления членов команды
    animateTeamMembers();
  }, 500);
  
  return container;
}

/**
 * Анимирует появление членов команды
 */
function animateTeamMembers() {
  const teamMembers = document.querySelectorAll('.team-member');
  const advisors = document.querySelectorAll('.advisor');
  
  // Анимируем команду
  teamMembers.forEach((member, index) => {
    setTimeout(() => {
      member.classList.add('visible');
    }, 100 * index);
  });
  
  // Анимируем советников с небольшой задержкой
  setTimeout(() => {
    advisors.forEach((advisor, index) => {
      setTimeout(() => {
        advisor.classList.add('visible');
      }, 100 * index);
    });
  }, teamMembers.length * 100 + 200);
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
export default createTeamPage; 