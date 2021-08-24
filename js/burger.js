const knethBurgerBtn = document.querySelector(".kneth_burger-btn");
const knethNavModalShow = document.querySelector(".kneth_nav_modal");
const knethHeaderBranding = document.querySelector(".kneth_header__branding");

let burgerOpen = false;

knethBurgerBtn.addEventListener("click", e => {
  if(!burgerOpen) {
    knethBurgerBtn.classList.add("open");
    knethBurgerBtn.nextElementSibling.classList.add("show");
    knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.add("light");
    burgerOpen = true;
  } else {
    knethBurgerBtn.classList.remove("open");
    knethBurgerBtn.nextElementSibling.classList.remove("show");
    knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.remove("light");
    burgerOpen = false;
  }
});

knethHeaderBranding.addEventListener("click", e => {
  knethBurgerBtn.classList.remove("open");
  knethBurgerBtn.nextElementSibling.classList.remove("show");
  knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.remove("light");
  burgerOpen = false;
});

knethNavModalShow.addEventListener("click", e => {
  if(!e.target.classList.contains("kneth_nav_modal__link")) {
    knethBurgerBtn.classList.add("open");
    knethBurgerBtn.nextElementSibling.classList.add("show");
    knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.add("light");
  } else {
    knethBurgerBtn.classList.remove("open");
    knethBurgerBtn.nextElementSibling.classList.remove("show");
    knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.remove("light");
    burgerOpen = false;
  }
});