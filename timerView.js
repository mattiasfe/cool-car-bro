let wantToStartTimer = false;
let timerWidthValue = 20;

function renderTimerView() {
    return `
    <button id="timerButton" onclick="startTimer()">Start timer</button>
    <div id="timer"></div>`
}

function startTimer() {
    timerWidthValue = 20;
    const timer = setInterval(() => {
        updateTheTimer()
        timerWidthValue = timerWidthValue - 0.01;
        if (timerWidthValue <= 0) {
            clearInterval(timer)
            document.querySelector('#timer').style.width = 0;
        }
    }, 10);
}


function updateTheTimer() {

    document.querySelector('#timer').style.backgroundColor = `rgb(255, 10, 255)`
    document.querySelector('#timer').style.width = `${timerWidthValue * 10}px`;
}
