const timer = document.getElementById("Timer__totime")
const buttonStart = document.getElementById("organizador-btn__iniciar-btn")
const buttonPause = document.getElementById("organizador-btn__pausa-btn")
const buttonRestart = document.getElementById("organizador-btn__reiniciar-btn")

let minutes = 0;
let seconds = 10;
let idForInterval = null;
let cont = 0;
const timeline = [25, 5, 25, 5, 25, 5, 25, 30];
function pauseTime() {
    clearInterval(idForInterval);
    idForInterval = null;
}

function restartTime() {
    minutes = 1;
    seconds = 0;
}
function breackTime() {
    //testar se a logica do breckTime esta funcionando e adicionar visual novo quando entrar breackTime 
    cont ++
    minutes = timeline[cont];
    if(cont > timeline.length){
        cont = 0;
        minutes = timeline[cont];
    }
}

function startTime() {
    if (idForInterval === null) {
        idForInterval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                breackTime();
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 60;
                } else {
                    seconds--;
                }
            } updateDisplay(minutes, seconds)
        }, 1000)
    }
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
//startTime();


