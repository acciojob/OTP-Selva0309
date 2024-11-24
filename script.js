//your JS code here. If required.
function moveFocus(currentInput) {
    if (currentInput.value.length >= 1) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleBackspace(event, currentInput) {
    if (event.key === 'Backspace' && currentInput.value.length === 0) {
        const previousInput = currentInput.previousElementSibling;
        if (previousInput) {
            previousInput.focus();
        }

window.onload = function() {
    const firstInput = document.querySelector('.code');
    if (firstInput) {
        firstInput.focus();
    }
    }
}