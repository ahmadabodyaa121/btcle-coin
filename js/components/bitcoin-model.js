/**
 * Компонент 3D модели Bitcoin с использованием Three.js
 * @module components/bitcoin-model
 */

/**
 * Создает 3D модель Bitcoin
 * @param {HTMLElement} container - DOM элемент для размещения 3D модели
 * @param {Object} options - Настройки 3D модели
 */
export function createBitcoinModel(container, options = {}) {
  // Проверяем доступность Three.js
  if (typeof THREE === 'undefined') {
    loadThreeJs().then(() => {
      initModel(container, options);
    }).catch(error => {
      console.error('Не удалось загрузить Three.js:', error);
      createFallbackContent(container);
    });
  } else {
    initModel(container, options);
  }
}

/**
 * Загружает библиотеку Three.js динамически
 * @returns {Promise} Promise, который резолвится после загрузки Three.js
 */
function loadThreeJs() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Инициализирует 3D модель Bitcoin
 * @param {HTMLElement} container - DOM элемент для размещения 3D модели
 * @param {Object} options - Настройки 3D модели
 */
function initModel(container, options = {}) {
  const {
    rotationSpeed = 0.005,
    ambientLightColor = 0xffffff,
    ambientLightIntensity = 0.5,
    pointLightColor = 0xffffff,
    pointLightIntensity = 1,
    pointLightPosition = { x: 10, y: 10, z: 10 }
  } = options;

  // Создаем сцену
  const scene = new THREE.Scene();
  
  // Создаем камеру
  const camera = new THREE.PerspectiveCamera(
    75, 
    container.clientWidth / container.clientHeight, 
    0.1, 
    1000
  );
  camera.position.z = 5;
  
  // Создаем рендерер
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true  // Прозрачный фон
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  
  // Добавляем свет
  const ambientLight = new THREE.AmbientLight(ambientLightColor, ambientLightIntensity);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(pointLightColor, pointLightIntensity);
  pointLight.position.set(
    pointLightPosition.x, 
    pointLightPosition.y, 
    pointLightPosition.z
  );
  scene.add(pointLight);
  
  // Загружаем текстуру Bitcoin
  const textureLoader = new THREE.TextureLoader();
  const bitcoinTexture = textureLoader.load('/assets/textures/bitcoin-texture.jpg', 
    () => { console.log('Текстура Bitcoin успешно загружена'); },
    undefined,
    (err) => { console.error('Ошибка загрузки текстуры Bitcoin:', err); }
  );
  const bitcoinBumpMap = textureLoader.load('/assets/textures/bitcoin-normal.jpg',
    () => { console.log('Карта нормалей Bitcoin успешно загружена'); },
    undefined,
    (err) => { console.error('Ошибка загрузки карты нормалей Bitcoin:', err); }
  );
  
  // Создаем геометрию и материал для Bitcoin
  const geometry = new THREE.CylinderGeometry(2, 2, 0.5, 32);
  
  // Создаем материал с цветом, даже если текстуры не загружены
  const material = new THREE.MeshPhongMaterial({
    color: 0xf7931a,  // Цвет Bitcoin
    shininess: 100,
    reflectivity: 1
  });
  
  // Попытка применить текстуры если они загрузились
  if (bitcoinTexture) material.map = bitcoinTexture;
  if (bitcoinBumpMap) {
    material.bumpMap = bitcoinBumpMap;
    material.bumpScale = 0.02;
  }
  
  // Создаем меш
  const bitcoin = new THREE.Mesh(geometry, material);
  // Поворачиваем монету, чтобы она смотрела "лицом" вперед
  bitcoin.rotation.x = Math.PI / 2;
  scene.add(bitcoin);
  
  // Добавляем символ Bitcoin
  addBitcoinSymbol(bitcoin);
  
  // Добавляем обработчик изменения размера окна
  window.addEventListener('resize', () => {
    // Обновляем размеры
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
  
  // Интерактивность при наведении
  setupInteractivity(container, bitcoin);
  
  // Функция анимации
  function animate() {
    requestAnimationFrame(animate);
    
    // Вращаем Bitcoin
    bitcoin.rotation.y += rotationSpeed;
    
    renderer.render(scene, camera);
  }
  
  // Запускаем анимацию
  animate();
  
  return {
    scene,
    camera,
    renderer,
    bitcoin
  };
}

/**
 * Добавляет символ Bitcoin на модель
 * @param {THREE.Mesh} bitcoin - Модель Bitcoin
 */
function addBitcoinSymbol(bitcoin) {
  // Здесь можно добавить текстуру с символом Bitcoin
  // или создать геометрию символа и добавить ее на монету
}

/**
 * Настраивает интерактивность модели при наведении курсора
 * @param {HTMLElement} container - DOM элемент с 3D моделью
 * @param {THREE.Mesh} bitcoin - Модель Bitcoin
 */
function setupInteractivity(container, bitcoin) {
  let isMouseOver = false;
  let originalRotationSpeed = bitcoin.userData.rotationSpeed || 0.005;
  
  container.addEventListener('mouseenter', () => {
    isMouseOver = true;
    bitcoin.userData.rotationSpeed = originalRotationSpeed * 2;
  });
  
  container.addEventListener('mouseleave', () => {
    isMouseOver = false;
    bitcoin.userData.rotationSpeed = originalRotationSpeed;
  });
  
  // Добавляем эффект при движении мыши
  container.addEventListener('mousemove', (event) => {
    if (!isMouseOver) return;
    
    const rect = container.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    
    // Немного поворачиваем монету в направлении курсора
    bitcoin.rotation.z = mouseY * 0.2;
    bitcoin.rotation.y = mouseX * 0.2;
  });
}

/**
 * Создает запасной контент, если не удалось загрузить Three.js
 * @param {HTMLElement} container - DOM элемент для размещения запасного контента
 */
function createFallbackContent(container) {
  container.innerHTML = '';
  
  const fallbackImg = document.createElement('img');
  fallbackImg.src = '/images/bitcoin-fallback.png';
  fallbackImg.alt = 'Bitcoin';
  fallbackImg.classList.add('bitcoin-fallback');
  
  container.appendChild(fallbackImg);
}

/**
 * Создает геометрию для логотипа Bitcoin
 * @returns {THREE.BufferGeometry} Геометрия логотипа Bitcoin
 */
function createBitcoinLogo() {
  // Создаем простую геометрию для символа ₿
  const shape = new THREE.Shape();
  
  // Внешний круг
  shape.absarc(0, 0, 1.5, 0, Math.PI * 2, false);
  
  // Вырезаем внутренний круг
  const holePath = new THREE.Path();
  holePath.absarc(0, 0, 1.2, 0, Math.PI * 2, true);
  shape.holes.push(holePath);
  
  // Создаем символ B внутри монеты
  const bShape = new THREE.Shape();
  
  // Основная вертикальная линия
  bShape.moveTo(-0.3, 0.7);
  bShape.lineTo(-0.3, -0.7);
  bShape.lineTo(0, -0.7);
  
  // Верхняя часть B
  bShape.lineTo(0.4, -0.7);
  bShape.bezierCurveTo(0.7, -0.7, 0.7, -0.3, 0.4, -0.3);
  
  // Средняя часть
  bShape.lineTo(0, -0.3);
  bShape.lineTo(0.4, -0.3);
  
  // Нижняя часть B
  bShape.bezierCurveTo(0.7, -0.3, 0.7, 0.7, 0.4, 0.7);
  bShape.lineTo(-0.3, 0.7);
  
  // Создаем дополнительные линии Bitcoin (косые черточки)
  const line1 = new THREE.Shape();
  line1.moveTo(0, -0.1);
  line1.lineTo(0.2, -0.1);
  
  const line2 = new THREE.Shape();
  line2.moveTo(0, 0.3);
  line2.lineTo(0.2, 0.3);
  
  // Создаем экструдированную геометрию
  const extrudeSettings = {
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelSegments: 3
  };
  
  // Создаем геометрию логотипа из всех частей
  const logoGeometry = new THREE.BufferGeometry();
  const coinGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const bGeometry = new THREE.ExtrudeGeometry(bShape, extrudeSettings);
  const line1Geometry = new THREE.ExtrudeGeometry(line1, extrudeSettings);
  const line2Geometry = new THREE.ExtrudeGeometry(line2, extrudeSettings);
  
  // Объединяем все геометрии
  logoGeometry.copy(coinGeometry);
  
  return logoGeometry;
}

/**
 * Показывает фоллбэк-изображение вместо 3D-модели в случае ошибки
 * @param {HTMLElement} container - Контейнер для отображения
 */
function showFallbackImage(container) {
  container.innerHTML = `
    <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
      <img src="/images/bitcoin-fallback.png" alt="Bitcoin" style="max-width: 100%; max-height: 100%;">
    </div>
  `;
}

/**
 * Создание контейнера для модели биткоина
 * @param {string} size - Размер контейнера (px или %)
 * @returns {HTMLElement} - Созданный контейнер
 */
export function createBitcoinContainer(size = '400px') {
  const container = document.createElement('div');
  container.style.width = size;
  container.style.height = size;
  container.style.position = 'relative';
  
  return container;
} 