const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('age');
const helloBtn = document.getElementById('helloBtn');
const greeting = document.getElementById('greeting');

helloBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const age = parseInt(ageInput.value, 10);

    if (age > 80) {
        greeting.textContent = 'age should be less than 80';
    }
    else if (name) {
        greeting.textContent = `Hello, ${name}!`;
    } else {
        greeting.textContent = 'Please enter your name.';
    }
});
