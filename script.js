let startTime = 0, elapsedTime = 0, timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
    const date = new Date(time);
    const min = String(date.getUTCMinutes()).padStart(2, '0');
    const sec = String(date.getUTCSeconds()).padStart(2, '0');
    const ms = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    return `${min}:${sec}:${ms}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00";
    elapsedTime = 0;
    laps.innerHTML = "";
}

function lap() {
    const li = document.createElement("li");
    li.textContent = timeToString(elapsedTime);
    laps.appendChild(li);
}