const tabs = () => {

// Получаем все кнопки табов
const tabButtons = document.querySelectorAll('.questions-answers__link');

// Функция для отображения выбранного блока контента
function showTabContent(tabId) {
  const tabContent = document.getElementById(tabId);
  if (tabContent) {
    // Показываем выбранный блок контента
    tabContent.classList.remove('hidden');
  }
}

// Функция для добавления класса "activ" к выбранной кнопке таба
function activateTabButton(tabButton) {
  // Удаляем класс "activ" у всех кнопок табов
  tabButtons.forEach(button => {
    button.classList.remove('activ');
  });

  // Добавляем класс "activ" к выбранной кнопке таба
  tabButton.classList.add('activ');
}

// Обработчик события клика на кнопки табов
tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', function() {
    // Скрываем все блоки контента
    const tabContents = document.querySelectorAll('[data-tab-content]');
    tabContents.forEach(tabContent => {
      tabContent.classList.add('hidden');
    });

    // Получаем ID таба, на который был клик
    const tabId = this.getAttribute('data-tab');

    // Отображаем выбранный блок контента
    showTabContent(tabId);

    // Активируем выбранную кнопку таба
    activateTabButton(this);
  });
});



}

export default tabs;