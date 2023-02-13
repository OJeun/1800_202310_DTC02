let counter = 0;

function hello() {
    counter++;            
    document.querySelector('h1').innerHTML = "FUCK";    
}

function changeColor() {
    document.querySelector('.jumbotron').style.color = 'blue';
}
document.querySelector('button').onclick = hello;