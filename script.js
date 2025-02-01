function toggleWindow() {
    const window = document.getElementById('transparent-window');
    if (window.style.display === 'none' || window.style.display === '') {
        window.style.display = 'block';
    } else {
        window.style.display = 'none';
    }
}
