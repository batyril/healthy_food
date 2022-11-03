export const UI = {
  TABS: document.querySelectorAll(".tabheader__item"),
  TABS_CONTENT: document.querySelectorAll(".tabcontent"),
  TABS_PARENT: document.querySelector(".tabheader__items"),
  MODAl_TRIGGERS: document.querySelectorAll("[data-modal]"),
  MODAl_CLOSE: document.querySelector("[data-modal-close]"),
  MODAL: document.querySelector(".modal"),
};

/*const modalTimerId = setTimeout(openModal, 5000);*/

function openModal() {
  UI.MODAL.classList.add("show");
  UI.MODAL.classList.remove("hide");
  document.body.style.overflow = "hidden";
  /*clearTimeout(modalTimerId);*/
}

function closeModal() {
  UI.MODAL.classList.add("hide");
  UI.MODAL.classList.remove("show");
  document.body.style.overflow = "scroll";
}

UI.MODAl_TRIGGERS.forEach((item) => {
  item.addEventListener("click", () => openModal());
});

UI.MODAl_CLOSE.addEventListener("click", () => closeModal());
UI.MODAL.addEventListener("click", (event) => {
  const checkClicksOutside = event.target.classList.contains("modal");
  if (checkClicksOutside) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  const checkPushEscape =
    UI.MODAL.classList.contains("show") && event.code === "Escape";
  if (checkPushEscape) {
    closeModal();
  }
});

function showModalByScrol() {
  const checkEndPage =
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 1;
  if (checkEndPage) {
    openModal();
    window.removeEventListener(showModalByScrol);
  }
}

window.addEventListener("scroll", showModalByScrol);
