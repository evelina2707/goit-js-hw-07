const formLogin = document.querySelector('.login-form');
const message = document.createElement('p'); 
message.style.color = 'red';
formLogin.appendChild(message);
formLogin.addEventListener('submit', e => {
  e.preventDefault();

  const elements = formLogin.elements;

const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    message.textContent = 'All form fields must be filled in';
    return;
  }
  message.textContent = '';

   const formData = {
    email: email,
    password: password
  };

  console.log(formData);
  formLogin.reset();

})
