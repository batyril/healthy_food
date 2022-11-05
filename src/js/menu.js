class ItemMenu {
  constructor(title, description, price, src, alt, parentSelector) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.src = src;
    this.alt = alt;
    this.transfer = 27;
    this.parentSelector = document.querySelector(parentSelector);
    this.changeToRub();
  }

  changeToRub() {
    this.price *= this.transfer;
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("menu__item");
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
  "img/tabs/post.jpg",
  "post",
  ".menu__field > .container"
).render();

new ItemMenu(
  "Меню Фитнес",
  "Меню Фитнес - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  "229",
  "img/tabs/vegy.jpg",
  "vegy",
  ".menu__field > .container"
).render();

new ItemMenu(
  "Меню Премиум",
  "В меню Премиум мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  "550",
  "img/tabs/elite.jpg",
  "vegy",
  ".menu__field > .container"
).render();
