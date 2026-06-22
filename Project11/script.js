const StartBtn = document.getElementById("Start");
const StopBtn = document.getElementById("Stop");
const ResetBtn = document.getElementById("Reset");
const numbersarea = document.getElementById("numbers");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

function updateDisplay() {
    numbersarea.textContent =
        `${hours.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")}:` +
        `${milliseconds.toString().padStart(3, "0")}`;
}

function stopwatch() {

    milliseconds++;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

StartBtn.addEventListener("click", () => {

    if (timer !== null) return;

    timer = setInterval(stopwatch, 1);

});

StopBtn.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

});

ResetBtn.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();

});

updateDisplay();