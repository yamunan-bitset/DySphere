document.addEventListener('DOMContentLoaded', () => {
    const window = document.getElementById('transparent-window');
    window.style.display = 'block';
});

function toggleWindow() {
    const window = document.getElementById('transparent-window');
    if (window.style.display === 'none' || window.style.display === '') {
        window.style.display = 'block';
    } else {
        window.style.display = 'none';
    }
}

var current_align = 0;

function switch_user() {
    current_align++;
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
    if (current_align % 2 == 0) {
        displayArea.style.textAlign = 'left';
    } else {
        displayArea.style.textAlign = 'right';
    }
    transparentWindow.insertBefore(displayArea, transparentWindow.firstChild);
}

document.getElementById('enter-msg-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        send();
        this.value = '';
    }
});