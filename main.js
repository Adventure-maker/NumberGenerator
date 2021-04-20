const input = document.getElementById('input');
const btn = document.getElementById('generateBtn');


btn.addEventListener('click', generation())

function generation() {
    let randomNumber = Math.floor(10000000 + Math.random() * 90000000)
    input.value = randomNumber;
}
