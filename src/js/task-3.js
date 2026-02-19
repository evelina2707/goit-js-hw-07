const formInput = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output')

formInput.addEventListener('input', () => {
  const name = formInput.value.trim()
  if (name === '') {
    formOutput.textContent = 'Anonymous';
  } else {
    formOutput.textContent = name;
  }
})