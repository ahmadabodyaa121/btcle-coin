/**
 * Простой клиентский роутер для SPA с использованием query-параметров (?page=...)
 */

import { showGlobalLoader, hideGlobalLoader } from '../components/loader.js';

let routes = {};
let contentElement = null;
const QUERY_PARAM = 'page'; // Имя параметра для страниц
const FADE_DURATION = 300; // Длительность анимации в мс

/**
 * Инициализация роутера
 * @param {Object} routeConfig - Конфигурация маршрутов {путь: модуль} (ключи как '/home', '/about')
 * @param {HTMLElement} element - DOM-элемент для вставки контента
 */
export function initRouter(routeConfig, element) {
  routes = routeConfig;
  contentElement = element;

  // Обработчик изменения URL (включая кнопки назад/вперед)
  window.addEventListener('popstate', handleRouteChange);

  // Обработка начальной загрузки страницы
  handleRouteChange(true); // true - для мгновенной первой загрузки

  // Перехват кликов по ссылкам
  document.addEventListener('click', handleLinkClick);
}

/**
 * Обработчик изменения маршрута
 * @param {boolean} isInitialLoad - Флаг первой загрузки (без анимации)
 */
async function handleRouteChange(isInitialLoad = false) {
  // 1. Показываем лоадер
  showGlobalLoader();

  if (!isInitialLoad && contentElement) {
    // 2. Запускаем анимацию скрытия текущего контента
    contentElement.classList.remove('page-fade-in');
    contentElement.classList.add('page-fade-out');

    // 3. Ждем завершения анимации скрытия
    await new Promise(resolve => setTimeout(resolve, FADE_DURATION));
  } else if (contentElement) {
      // При первой загрузке просто скрываем (если элемент уже есть)
      contentElement.style.opacity = '0';
  }

  // 4. Определяем путь и загружаем новый контент
  const params = new URLSearchParams(window.location.search);
  const pageName = params.get(QUERY_PARAM);
  const path = pageName ? `/${pageName}` : '/'; // Определяем путь, например /about-info или /

  console.log(`Routing change detected. Query param '${QUERY_PARAM}': ${pageName || '(none)'}. Resolved path: ${path}`);
  await loadContent(path, isInitialLoad);
}

/**
 * Перехват кликов по ссылкам для SPA навигации
 * @param {Event} event - Событие клика
 */
function handleLinkClick(event) {
  const link = event.target.closest('a');
  // Проверяем, что клик был по ссылке с атрибутом data-navigate
  if (!link || !link.hasAttribute('data-navigate')) return;

  const href = link.getAttribute('href');
  // Проверяем, что href начинается с '?' (указывает на query-параметр)
  // или это ссылка на главную '/', которую мы преобразуем в '?'
  let targetHref = href;
  if (href === '/') { // Обрабатываем клик по ссылке на главную
      targetHref = '?';
  }

  if (!targetHref || !targetHref.startsWith('?')) return; // Игнорируем, если не query-параметр или не главная

  // Проверяем, что ссылка ведет на другую страницу
  const currentSearch = window.location.search || '?'; // Приводим отсутствие search к '?'
  if (targetHref === currentSearch) {
    event.preventDefault(); // Предотвращаем стандартное поведение, но не меняем историю
    console.log('Link click ignored: already on this page.');
    return;
  }

  event.preventDefault();
  // Не показываем лоадер здесь, handleRouteChange его покажет

  // 5. Обновляем URL
  window.history.pushState({}, '', targetHref);

  // 6. Запускаем обработку смены маршрута (уже с анимацией)
  handleRouteChange();
}

// Функция для управления overflow body
function updateBodyOverflow(path) {
  const isMobile = window.innerWidth < 768;
  if (path === '/about-info' && !isMobile) {
    console.log('Setting body overflow to hidden for /about-info on desktop');
    document.body.style.overflow = 'hidden';
  } else {
    console.log(`Resetting body overflow to default for ${path} or mobile`);
    document.body.style.overflow = '';
  }
}

/**
 * Загрузка контента для текущего маршрута
 * @param {string} path - Текущий путь (e.g., '/', '/about-info', '/roadmap')
 * @param {boolean} isInitialLoad - Флаг первой загрузки (без анимации)
 */
async function loadContent(path, isInitialLoad = false) {
    try {
        // Сбрасываем overflow перед загрузкой, чтобы избежать проблем с переходом
        console.log('Resetting body overflow to default before loading content');
        document.body.style.overflow = '';

        // --- Управление видимостью хедера --- (оставляем как было)
        const headerContainer = document.getElementById('header');
        if (headerContainer) {
            if (path === '/') {
                headerContainer.classList.remove('header-hidden');
            } else {
                headerContainer.classList.add('header-hidden');
            }
        }
        // -------------------------------------

        // Лоадер уже должен быть показан из handleRouteChange
        console.log(`Attempting to load content for path: ${path}`);

        let modulePath = routes[path];
        if (!modulePath) {
            console.warn(`No route found for path: ${path}. Falling back to /404.`);
            modulePath = routes['/404'];
            if (!modulePath) {
                console.error('CRITICAL: /404 route is not defined!');
                contentElement.innerHTML = '<div class="error-message">Страница не найдена, и страница 404 не настроена.</div>';
                if (!isInitialLoad) setTimeout(hideGlobalLoader, FADE_DURATION + 50); // Скрываем лоадер с задержкой
                else hideGlobalLoader();
                return;
            }
            // Опционально: обновить URL на 404
        }

        try {
            // Формируем путь к JS модулю страницы
            const fullModulePath = `/js/${modulePath}`;
            console.log('Dynamically importing module:', fullModulePath);

            const pageModule = await import(fullModulePath);

            // Выбираем правильную функцию для создания страницы
            let createFunction = null;
            // Определяем имя функции: для '/' -> createHomePage, для '/about-info' -> createAboutInfoPage
            const pageNamePascalCase = path === '/' 
                ? 'Home' 
                : path.substring(1).split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
            const expectedFunctionName = `create${pageNamePascalCase}Page`; 
            console.log(`Looking for function: ${expectedFunctionName}`);

            if (typeof pageModule[expectedFunctionName] === 'function') {
                createFunction = pageModule[expectedFunctionName];
                console.log(`Using specific function: ${expectedFunctionName}`);
            } else if (typeof pageModule.default === 'function') { // Общий случай
                createFunction = pageModule.default;
                 console.log(`Using default export function.`);
            } else if (path === '/404' && typeof pageModule.createNotFoundPage === 'function') { // Особый случай для 404
                 createFunction = pageModule.createNotFoundPage;
                 console.log(`Using specific function: createNotFoundPage`);
            }

            // Очищаем контейнер ПЕРЕД рендерингом нового контента
            contentElement.innerHTML = '';

            if (createFunction) {
                await createFunction(contentElement); // Рендерим новый контент (пока невидимый)
                console.log(`Content for ${path} loaded successfully.`);

                // Устанавливаем overflow ПОСЛЕ рендеринга и инициализации страницы
                updateBodyOverflow(path);

            } else {
                console.error(`Module ${fullModulePath} does not export a recognized create function (tried ${expectedFunctionName} and default).`);
                contentElement.innerHTML = '<div class="error-message">Ошибка: не найдена функция для создания страницы.</div>';
            }

            // Скролл вверх
            window.scrollTo(0, 0);

            // 7. Запускаем анимацию появления нового контента
            contentElement.classList.remove('page-fade-out'); // Убираем класс скрытия
            contentElement.classList.add('page-fade-in');   // Добавляем класс появления
            if(isInitialLoad) contentElement.style.opacity = '1'; // Мгновенно показываем при первой загрузке

        } catch (importError) {
            console.error(`Failed to import or render module ${modulePath} for path ${path}:`, importError);
            contentElement.innerHTML = `<div class="error-message">Ошибка загрузки страницы: ${importError.message}</div>`;
        } finally {
             // 8. Скрываем лоадер ПОСЛЕ анимации появления
             if (!isInitialLoad) {
                setTimeout(hideGlobalLoader, FADE_DURATION + 100); 
             } else {
                 hideGlobalLoader(); 
             }
        }

    } catch (error) {
        console.error('General error during loadContent:', error);
        contentElement.innerHTML = '<div class="error-message">Непредвиденная ошибка загрузки страницы.</div>';
         if (!isInitialLoad) setTimeout(hideGlobalLoader, FADE_DURATION + 50);
         else hideGlobalLoader();
    }
}

/**
 * Программная навигация
 * @param {string} pageName - Имя страницы (например, 'about-info', 'roadmap') или пустая строка для главной
 */
export function navigate(pageName) {
    // Формируем href: '?page=pagename' или '?' для главной
    const href = pageName ? `?${QUERY_PARAM}=${pageName}` : '?';
    const currentSearch = window.location.search || '?'; // Считаем отсутствие search как '?' для сравнения

    if (href !== currentSearch) {
        console.log(`Navigating programmatically to page: '${pageName || 'home'}' (href: ${href})`);
        // Не показываем лоадер здесь
        window.history.pushState({}, '', href);
        handleRouteChange(); // Запускаем стандартный процесс с анимацией
    } else {
        console.log(`Programmatic navigation skipped: already on page '${pageName || 'home'}'`);
    }
} 

// Добавляем слушатель изменения размера окна
window.addEventListener('resize', () => {
  const params = new URLSearchParams(window.location.search);
  const pageName = params.get(QUERY_PARAM);
  const path = pageName ? `/${pageName}` : '/';
  updateBodyOverflow(path);
}); 