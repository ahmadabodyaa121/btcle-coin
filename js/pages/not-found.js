/**
 * Страница 404 (Not Found)
 * @module pages/not-found
 */

/**
 * Создает содержимое страницы 404
 * @param {HTMLElement} container - Контейнер для страницы
 */
export function createNotFoundPage(container) {
  const notFoundContainer = document.createElement('div');
  notFoundContainer.classList.add('not-found-container');
  
  const content = `
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">Страница не найдена</h2>
      <p class="not-found-text">Запрашиваемая вами страница не существует или была перемещена.</p>
      <a href="/" class="not-found-button">Вернуться на главную</a>
    </div>
  `;
  
  notFoundContainer.innerHTML = content;
  container.appendChild(notFoundContainer);
  
  // Добавляем анимацию для Bitcoin
  addBitcoinAnimation(notFoundContainer);
  
  return notFoundContainer;
}

/**
 * Добавляет анимированный Bitcoin на страницу 404
 * @param {HTMLElement} container - Контейнер для анимации
 */
function addBitcoinAnimation(container) {
  const bitcoinEl = document.createElement('div');
  bitcoinEl.classList.add('not-found-bitcoin');
  bitcoinEl.innerHTML = `
    <div class="bitcoin-coin animate-spin-very-slow">
      <div class="bitcoin-face">
        <div class="bitcoin-symbol">₿</div>
      </div>
    </div>
  `;
  
  container.querySelector('.not-found-content').appendChild(bitcoinEl);
}

// Экспорт функции по умолчанию для совместимости
export default createNotFoundPage; 