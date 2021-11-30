const dino = document.getElementById('saurus');
const rock = document.getElementById('kivi');
// const score = document.getElementById('pisteet');

function jump() {
    dino.classList.add('animation');
    
    setTimeout(function() {
       dino.classList.remove('animation');
   },500);
}
   
var checkDeath = setInterval(function(){
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    var rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    if(rockLeft<20 && rockLeft>0 && dinoTop>=130){
        rock.style.animation = 'none';
        rock.style.display = 'none';

        alert('You Lose');
    }
    },10);
    

   


document.addEventListener('keypress', jump);
