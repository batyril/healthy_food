import postImage from "../img/tabs/post.jpg";
import vegyImage from "../img/tabs/vegy.jpg";
import eliteImage from "../img/tabs/elite.jpg";

class ItemMenu {
  constructor(title, description, price, src, alt, parentSelector, ...classes) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.src = src;
    this.alt = alt;
    this.transfer = 27;
    this.classes = classes;
    this.parentSelector = document.querySelector(parentSelector);
    this.changeToRub();
  }

  changeToRub() {
    this.price *= this.transfer;
  }

  render() {
    const element = document.createElement("div");
    if (this.classes.length === 0) {
      element.classList.add("menu__item");
    }
    element.classList.add(...this.classes);
    element.insertAdjacentHTML(
      "afterbegin",
      `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/месяц</div>
                    </div>`
    );
    this.parentSelector.append(element);
  }
}

new ItemMenu(
  "Меню Постное",
  "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко" +
    " из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ",
  "430",
  postImage,
  "post",
  ".menu__field > .container",
  "menu__item",
  "menu__item__size-plus"
).render();

new ItemMenu(
  "Меню Фитнес",
  "Меню Фитнес - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  "229",
  vegyImage,
  "vegy",
  ".menu__field > .container",
  "menu__item"
).render();

new ItemMenu(
  "Меню Премиум",
  "В меню Премиум мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  "550",
  eliteImage,
  "vegy",
  ".menu__field > .container",
  "menu__item"
).render();
