let display = document.getElementById('result');

function Clear() {
    document.getElementById('result').innerHTML = '';
}

function calc() {
    display.innerHTML = eval(display.innerHTML);    
}

function press(x) {
    display.innerHTML += x;
}