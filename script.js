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

function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
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