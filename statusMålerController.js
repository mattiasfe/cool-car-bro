//Controller
function getStatusLvl() {
    coolScoreHTML = '';
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

function looseGainStatusPoints() {
    if (isAnswerCorrect == false) {
        coolScoreNumber--;
    }
    else{
        coolScoreNumber++;
    }
    return coolScoreNumber;
}

function printStatusText() {
    let text = '';
    if(coolScoreNumber > 0) {
       
            if(coolScoreNumber == 1) {
                text = 'Hobo 🚲';
            }
            else if (coolScoreNumber == 2) {
                text = 'Looser 🛺';
            }
            else if (coolScoreNumber == 3) {
                text = 'The Normal Guy 🚙';
            }
            else if (coolScoreNumber == 4) {
                text = 'Cool Guy 🚗';
            }
            else if (coolScoreNumber == 5) {
                text = 'Stud 🏎️';
            }
            else if (coolScoreNumber == 6) {
                text = '💰Legend 🏎';
            }
        
    }
    return text;
}

function getPoints() {
    coolScoreNumber++;
    updateMainView();
}