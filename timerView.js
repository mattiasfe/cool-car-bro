let wantToStartTimer = false;
let timerWidthValue = 10;

function renderTimerView() {
    return `<div id="timer"></div>`
}

function startTimer() {
    wantToStartTimer = true;
    updateMainView();
    const timer = setInterval(() => {
        updateTheTimer()
        timerWidthValue = timerWidthValue - 0.01;
        console.log(timerWidthValue)
        if (timerWidthValue <= 0) {
            clearInterval(timer)
            wantToStartTimer = false;
            document.querySelector('#timer').style.width = 0;
        }
    }, 10);
}


function updateTheTimer() {

    document.querySelector('#timer').style.backgroundColor = `rgb(255, 10, 255)`
    document.querySelector('#timer').style.width = `${timerWidthValue * 10}px`;
}

updateMainView();
