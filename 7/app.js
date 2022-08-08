let img = document.getElementById('img');
let button = document.getElementById('button');
let button1 = document.getElementById('button1');

function buttonOn() {
    img.setAttribute('src', 'img/2.jpg');
}

button.addEventListener('click', buttonOn)

function buttonOff() {
    img.setAttribute('src', 'img/1.jpg');
}

button1.addEventListener('click', buttonOff)