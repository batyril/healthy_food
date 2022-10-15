import { UI } from './UI.js';

const clearTabContent = () => {
  UI.TABS_CONTENT.forEach((content) => {
    content.classList.add('hide');
    content.classList.remove('show');
  });
  UI.TABS.forEach((tabs) => tabs.classList.remove('tabheader__item_active'));
};

const showTabContent = (index = 2) => {
  UI.TABS_CONTENT[index].classList.add('show');
  UI.TABS_CONTENT[index].classList.remove('hide');
  UI.TABS[index].classList.add('tabheader__item_active');
};

UI.TABS_PARENT.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('tabheader__item')) {
    UI.TABS.forEach((tab, index) => {
      if (tab === target) {
        clearTabContent();
        showTabContent(index);
      }
    });
  }
});

clearTabContent();
showTabContent();

