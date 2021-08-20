const knethBurgerBtn = document.querySelector(".kneth_burger-btn");
let burgerOpen = false;

knethBurgerBtn.addEventListener("click", e => {
  if(!burgerOpen) {
    knethBurgerBtn.classList.add("open");

    knethBurgerBtn.nextElementSibling.classList.add("show");

    burgerOpen = true;

    knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.add("light");
  } else {
    knethBurgerBtn.classList.remove("open");

    knethBurgerBtn.nextElementSibling.classList.remove("show");
    
    burgerOpen = false;

    knethBurgerBtn.parentElement.firstElementChild.firstElementChild.firstElementChild.classList.remove("light");
  }
});