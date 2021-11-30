const dino = document.getElementsByClassName('dino');
const rock = document.getElementsByClassName('rock');
const score = document.getElementsByClassName('score');

function jump() {
    dino.classList.add('animation');
    setTimeout(function (){
        dino.classList.remove('animate');
    },500)
        
}

document.addEventListener('click', jump());
