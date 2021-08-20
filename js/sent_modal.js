const knethForm = document.querySelector(".kneth_form");
const knethModalSent = document.querySelector(".kneth_modal_sent");

knethForm.addEventListener("submit", e => {
  knethModalSent.classList.add("sent-show");
  
  setTimeout(() => {
    knethModalSent.classList.add("sent-show");
    knethForm.reset();
  }, 2000);
});