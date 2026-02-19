const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', e => {
  e.preventDefault();

  const elements = formLogin.elements;

const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log({email, password});
  formLogin.reset();

})
