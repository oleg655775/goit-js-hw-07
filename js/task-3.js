const input = document.querySelector('#name-input');
const textBlock = document.querySelector('#name-output');

input.addEventListener('input', e => {
  const value = e.currentTarget.value.trim();
  if (value.length > 0) {
    textBlock.textContent = value;
  } else {
    textBlock.textContent = 'Anonymous';
  }
});
