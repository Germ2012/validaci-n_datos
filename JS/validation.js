function emailValidation() {
  const form = document.getElementById('form');
  const emailField = form.email;
  const contentField= document.getElementById(`content0`)
  const emailConfirmField = form.email_confirm;
  const errorElement = document.createElement('p');
  errorElement.classList.add("alert", "compact-error"); 
  errorElement.style.display = "none";

  emailConfirmField.parentNode.appendChild(errorElement);

  emailConfirmField.addEventListener('input', () => {
    if (emailField.value !== emailConfirmField.value) {
      contentField.parentNode.insertBefore(errorElement, contentField);
      emailConfirmField.classList.add("alert_bg");
      errorElement.textContent = "The Email does not match";
      errorElement.style.display = "block";
      emailConfirmField.style.backgroundColor = 'rgba(230, 169, 171, 0.5)'; 
    } else {
      errorElement.style.display = "none";
      emailConfirmField.style.backgroundColor = '';
    }
  });
}

window.onload = emailValidation;