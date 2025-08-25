const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const inputs = [...loginForm.elements].filter(input => input.tagName === 'INPUT');
  const isEmpty = inputs.some(input => input.value.trim() === '');

  if (isEmpty) {
    alert('All form fields must be filled in');
    return;
  }

  const restObj = {};
  inputs.forEach(input => {
    restObj[input.name] = input.value.trim();
  });
  console.log(restObj);

  loginForm.reset();
});
