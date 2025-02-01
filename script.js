function toggleWindow() {
    const window = document.getElementById('transparent-window');
    if (window.style.display === 'none' || window.style.display === '') {
        window.style.display = 'block';
    } else {
        window.style.display = 'none';
    }
}

var n = 0;

function send() {
    n++;
    const inputBox = document.querySelector('.input-box');
    const inputText = inputBox.value;
    const displayArea = document.createElement('div');
    const transparentWindow = document.getElementById('transparent-window');
    displayArea.className = 'display-area';
    displayArea.textContent = inputText;
    displayArea.style.position = 'absolute';
    displayArea.style.top = `${n * 50}px`;
    displayArea.style.left = '10px';
    transparentWindow.insertBefore(displayArea, transparentWindow.firstChild);
}