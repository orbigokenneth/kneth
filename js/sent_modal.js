const knethForm = document.querySelector(".kneth_form");
const knethFormButton = document.querySelector(".kneth_form_button");

knethForm.addEventListener("submit", e => {
  knethFormButton.innerHTML = "Message Sent";
  knethFormButton.classList.add("sent");
  
  setTimeout(() => {
    knethFormButton.innerHTML = "Send Message";
    knethFormButton.classList.remove("sent");
    knethForm.reset();
  }, 3000);
});