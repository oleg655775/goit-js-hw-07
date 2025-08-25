function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.widget .change-color');
const colorOutput = document.querySelector('.widget .color');

document.querySelector('.widget .change-color').addEventListener('click', e => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorOutput.textContent = color;
});
