/**
 * Модуль для создания основного макета страницы
 */

/**
 * Создает основной макет страницы
 * @returns {Object} Объект с элементами макета
 */
export function createLayout() {
  // Создаем контейнер для всего контента
  const container = document.createElement('div');
  container.classList.add('page-layout');
  
  // Создаем контейнер для основного контента
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
  
  // Добавляем основной контейнер в контейнер макета
  container.appendChild(mainContainer);
  
  return {
    container,
    mainContainer
  };
}

// Экспорт по умолчанию для совместимости
export default createLayout; 