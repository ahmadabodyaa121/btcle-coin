/**
 * Модуль загрузчика
 */

// Глобальный индикатор загрузки
let globalLoader = null;
let pageLoader = null;

/**
 * Инициализация глобального индикатора загрузки
 */
function initGlobalLoader() {
  // Проверяем существующий лоадер
  const existingLoader = document.getElementById('global-loader');
  if (existingLoader) {
    existingLoader.innerHTML = ''; // Очищаем содержимое существующего лоадера
    return existingLoader;
  }
  
  // Создаем элемент загрузчика если нет существующего
  const loaderElement = document.createElement('div');
  loaderElement.id = 'global-loader';
  loaderElement.className = 'loader-container';
  loaderElement.innerHTML = ''; // Это изменение из прошлого раза, оставляем
  
  // Добавляем в DOM
  document.body.appendChild(loaderElement);
  
  return loaderElement;
}

/**
 * Инициализация загрузчика страниц
 * @param {HTMLElement} container - Контейнер для загрузчика
 */
export function setPageLoader(container) {
  // Проверяем, есть ли уже загрузчик
  if (pageLoader) {
    return pageLoader;
  }
  
  // Создаем загрузчик для страниц
  const loaderElement = document.createElement('div');
  loaderElement.className = 'page-loader';
  loaderElement.innerHTML = '<div class="page-loader-spinner"></div>';
  
  // Добавляем в контейнер
  container.appendChild(loaderElement);
  
  pageLoader = loaderElement;
  return pageLoader;
}

/**
 * Показать глобальный индикатор загрузки
 */
export function showGlobalLoader() {
  // Если нет глобального лоадера, инициализируем его
  if (!globalLoader) {
    globalLoader = document.getElementById('global-loader');
    if (!globalLoader) {
      globalLoader = initGlobalLoader();
    }
  }
  
  globalLoader.classList.remove('hidden');
}

/**
 * Скрыть глобальный индикатор загрузки
 */
export function hideGlobalLoader() {
  if (!globalLoader) {
    globalLoader = document.getElementById('global-loader');
  }
  
  if (globalLoader) {
    // Функция для обработки завершения скрытия
    const onLoaderHidden = () => {
      console.log('Loader transition finished. Dispatching loaderHidden event.');
      document.dispatchEvent(new CustomEvent('loaderHidden'));
      // Удаляем слушатель, чтобы он не сработал снова
      globalLoader.removeEventListener('transitionend', onLoaderHidden);
    };

    // Добавляем слушатель на transitionend ПЕРЕД добавлением класса
    // Это на случай, если transition не сработает (элемент уже скрыт)
    // или имеет нулевую длительность.
    // Добавляем { once: true } на всякий случай, хотя и удаляем вручную.
    globalLoader.addEventListener('transitionend', onLoaderHidden, { once: true });
    
    console.log('Hiding global loader by adding .hidden class.');
    globalLoader.classList.add('hidden');

    // Дополнительная проверка: если transition не произойдет (например, display: none)
    // или длительность 0, событие transitionend не сработает.
    // Проверим computed style.
    const style = window.getComputedStyle(globalLoader);
    const duration = parseFloat(style.transitionDuration) * 1000; // в мс
    const delay = parseFloat(style.transitionDelay) * 1000; // в мс
    
    // Если transition нет, диспатчим событие сразу
    if (duration + delay === 0) {
        console.log('Loader has no transition, dispatching event immediately.');
        onLoaderHidden(); // Вызываем обработчик напрямую
    }
  }
}

/**
 * Показать индикатор загрузки страницы
 */
export function showPageLoader() {
  if (pageLoader) {
    pageLoader.classList.add('visible');
  }
}

/**
 * Скрыть индикатор загрузки страницы
 */
export function hidePageLoader() {
  if (pageLoader) {
    pageLoader.classList.remove('visible');
  }
}

/**
 * Инициализация загрузчика для начальной загрузки сайта
 */
export function initInitialLoader() {
  // Показываем глобальный загрузчик
  showGlobalLoader();
  
  // Скрываем его после загрузки всего контента
  window.addEventListener('load', () => {
    setTimeout(() => {
      hideGlobalLoader();
    }, 500); // Небольшая задержка для плавности
  });
}

// Автоматическая инициализация при импорте модуля
// Проверяем, полностью ли загружен DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    showGlobalLoader();
  });
} else {
  showGlobalLoader();
}

// Экспортируем как дефолтный экспорт для совместимости
/* Убираем дефолтный экспорт
export default {
  showGlobalLoader,
  hideGlobalLoader,
  showPageLoader,
  hidePageLoader,
  initInitialLoader,
  setPageLoader
};
*/ 