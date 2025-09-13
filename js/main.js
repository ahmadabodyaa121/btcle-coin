// Основной JavaScript файл

// Импорт модулей
import { initRouter } from './libs/router.js';
import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';
import { setPageLoader, initInitialLoader } from './components/loader.js';


// Маршруты (пути относительно корня js/)
const routes = {
  '/': 'pages/home.js',
  '/story': 'pages/about.js',
  '/about': 'pages/about-info.js',
  '/tokenomics': 'pages/tokenomics.js',
  '/roadmap': 'pages/roadmap.js',
  '/whitepaper': 'pages/whitepaper.js',
  '/why-btcle': 'pages/why-btcle.js',
  '/vision': 'pages/vision.js',
  '/404': 'pages/not-found.js'
};

// DOM-элементы
const headerElement = document.getElementById('header');
const mainContentElement = document.getElementById('main-content');
const footerElement = document.getElementById('footer');
const globalLoader = document.getElementById('global-loader');

// Инициализация приложения
async function initApp() {
  try {
    // Отображаем лоадер при начальной загрузке
    if (typeof initInitialLoader === 'function') {
      initInitialLoader();
    } else {
      // Резервный вариант, если функция не доступна
      if (globalLoader) {
        globalLoader.classList.remove('hidden');
        window.addEventListener('load', () => {
          setTimeout(() => {
            globalLoader.classList.add('hidden');
          }, 500);
        });
      }
    }
    
    // Загрузка шапки и подвала
    await loadHeader(headerElement);
    await loadFooter(footerElement);
    
    // Добавляем анимацию появления для хедера
    setTimeout(() => {
      headerElement.classList.add('visible');
      // Также добавляем класс для внутреннего элемента header
      const mainHeader = document.getElementById('main-header');
      if (mainHeader) {
        mainHeader.classList.add('visible');
      }
    }, 300);
    
    // Инициализация роутера
    initRouter(routes, mainContentElement);
    
    // Настройка загрузчика
    setPageLoader(mainContentElement);
    
    // Глобальные события
    window.addEventListener('scroll', handleScroll);
    
    console.log('Приложение инициализировано успешно');
  } catch (error) {
    console.error('Ошибка инициализации приложения:', error);
    // Скрываем лоадер в случае ошибки
    if (globalLoader) globalLoader.classList.add('hidden');
  }
}

// Обработчик прокрутки страницы
function handleScroll() {
  const scrollPosition = window.scrollY;
  
  // Добавить класс к хедеру при прокрутке
  if (scrollPosition > 50) {
    // Добавляем класс как к контейнеру хедера, так и к внутреннему элементу
    headerElement.classList.add('header-scrolled');
    const mainHeader = document.getElementById('main-header');
    if (mainHeader) {
      mainHeader.classList.add('header-scrolled');
      mainHeader.classList.remove('header-transparent');
    }
  } else {
    // Удаляем класс как с контейнера хедера, так и с внутреннего элемента
    headerElement.classList.remove('header-scrolled');
    const mainHeader = document.getElementById('main-header');
    if (mainHeader) {
      mainHeader.classList.remove('header-scrolled');
      mainHeader.classList.add('header-transparent');
    }
  }
}

// Запуск приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);

// Экспорт глобальных функций
window.app = {
  navigate: (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  },
  showLoader: () => {
    if (globalLoader) globalLoader.classList.remove('hidden');
  },
  hideLoader: () => {
    if (globalLoader) globalLoader.classList.add('hidden');
  }
};

/**
 * Sticky Header Logic
 */
function initStickyHeader() {
    const header = document.getElementById('header');
    const mainContent = document.getElementById('main-content'); // Элемент под хедером
    
    if (!header || !mainContent) {
        console.warn('Sticky header initialization failed: header or main content not found.');
        return;
    }

    const headerHeight = header.offsetHeight;
    // Получаем смещение относительно *начала* документа
    // Важно: убедиться, что header.offsetTop не меняется динамически до первого скролла
    const stickyOffset = header.offsetTop; 
    let isSticky = false;

    function handleScroll() {
        const shouldBeSticky = window.scrollY > stickyOffset;

        if (shouldBeSticky && !isSticky) {
            // Делаем хедер липким
            header.classList.add('sticky');
            mainContent.style.paddingTop = `${headerHeight}px`;
            isSticky = true;
        } else if (!shouldBeSticky && isSticky) {
            // Убираем липкость
            header.classList.remove('sticky');
            mainContent.style.paddingTop = '0';
            isSticky = false;
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true }); // Используем passive для лучшей производительности

    // Первоначальная проверка на случай, если страница загрузилась уже прокрученной
    handleScroll(); 
}

// Инициализируем после полной загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStickyHeader);
} else {
    initStickyHeader();
} 