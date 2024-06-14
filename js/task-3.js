const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', onUsernameInput);

function onUsernameInput() {
    const value = inputName.value.trim(); // Видаляє пробіли на початку та в кінці рядка

    if (value === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = value;
    }
    
}