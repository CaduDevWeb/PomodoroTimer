const timer = document.getElementById("Timer__totime");
const buttonStart = document.getElementById("organizador-btn__iniciar-btn");
const buttonPause = document.getElementById("organizador-btn__pausa-btn");
const buttonRestart = document.getElementById("organizador-btn__reiniciar-btn");
const bodyElement = document.body;

let minutes = 25;
let seconds = 0;
let idForInterval = null;
let pomodorosCompleted = 0;
let isBreak = false;

function pauseTime() {
    clearInterval(idForInterval);
    idForInterval = null;
}
// refazer o restart
function restartTime() {
    pomodorosCompleted = 0;
    isBreak = true;
    onTimerEnd();
}

function onTimerEnd() {
    if(isBreak === true){
        isBreak = false;
        minutes = 25;
        seconds = 0;
        //seconds = 5; PARA TESTE
        changeColorAnimation();
    }else{
        if(pomodorosCompleted >= 4){
            isBreak = true;
            minutes = 30;
            pomodorosCompleted = 0;
            changeColorAnimation();
        }else{
            isBreak = true;
            minutes = 5;
            //seconds = 5; PARA TESTE
            pomodorosCompleted++
            changeColorAnimation();
        }
    }

}

function changeColorAnimation(){
    if(isBreak === true){
        bodyElement.classList.remove('animating-to-work');
        bodyElement.classList.add('animating-to-break');
    }else{
        bodyElement.classList.remove('animating-to-break');
        bodyElement.classList.add('animating-to-work');
    }
}

function startTime() {
    if (idForInterval === null) {
        idForInterval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                onTimerEnd()
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
            } updateDisplay(minutes, seconds)
        }, 1000)
    }
    bodyElement.classList.add('animating-to-work');
}

function updateDisplay(minutes, seconds) {
    if (seconds < 10) {
        timer.innerText = `${minutes}:0${seconds}`
    } else {
        timer.innerText = `${minutes}:${seconds}`
    }
}
buttonPause.addEventListener('click', pauseTime);
buttonStart.addEventListener('click', startTime);
buttonRestart.addEventListener('click', restartTime);
startTime();


