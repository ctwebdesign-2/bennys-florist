/*Mobile navigation hamburger*/
function hamburger() {
  const menu_btn = document.querySelector('.hamburger');

  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
  });
}

/*Checks what year it is and updates copyright year*/
function copyright() {
  const yearSpan = document.getElementById("CurrentYear");
  const currentYear = new Date();
  yearSpan.innerText = currentYear.getFullYear();
}

/*Checks wheter or not the two emails entered are the same*/
function validateEmail() {
  var email = document.getElementById("email");
  var confirmEmail = document.getElementById("confirmEmail");

  if (email.value != confirmEmail.value) {
    confirmEmail.setCustomValidity("Emails Don't Match");
  } else {
    confirmEmail.setCustomValidity('');
  }

  email.onchange = validateEmail;
  confirmEmail.onkeyup = validateEmail;
}

/*More information popup*/
function togglePopup(idname) {
  document.getElementById(idname).classList.toggle("active");
}

/*Loads all the javascript on window load*/
window.onload = () => {
  copyright();
  hamburger();
  togglePopup();
  emailConfirm();
  validateEmail();
};
