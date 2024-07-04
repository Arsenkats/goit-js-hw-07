function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment(); 
  let boxSize = 30; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box); 
    boxSize += 10; 
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  }
});

destroyButton.addEventListener('click', destroyBoxes);
