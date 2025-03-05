//Controller
function getStatusLvl() {
    for (let i = 5; i > 0; i--) {
        if(i < coolScoreNumber) {
            coolScoreHTML += `<div class="statusLightsOn"></div>`;
        }
        else {
        coolScoreHTML += `<div class="statusLightsOff"></div>`;
        }
    }
    return coolScoreHTML;
}

function loosStatusPoints() {
    if (wrongAnswer > 0) {
        coolScoreNumber--;
    }
    else{
        coolScoreNumber++;
    }
}