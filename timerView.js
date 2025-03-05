function startTimer() {
    const timer = setInterval(() => {
        renderTimerView()
        widthValue = widthValue - 0.01;
        console.log(widthValue)
        if (widthValue <= 0) {
            clearInterval(timer)
            document.querySelector('#timer').style.width = 0;
        }
    }, 10);
}


function renderTimerView() {

    const timer = document.querySelector('#timer')
    timer.style.backgroundColor = `rgb(255, 10, 255)`
    timer.style.width = `${widthValue * 10}px`;
}

updateView();