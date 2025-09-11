const nameInput = document.getElementById('nameInput');
const helloBtn = document.getElementById('helloBtn');
const greeting = document.getElementById('greeting');

helloBtn.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        greeting.textContent = `Hello, ${name}!`;
    } else {
        greeting.textContent = 'Please enter your name.';
    }
});
