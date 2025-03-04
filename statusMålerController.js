//Controller
function getStatusLvl() {
    for (let i = 0; i < 4; i++) {
        coolScoreHTML += `<div class="statusLightsOff"></div>`;
    }
    return coolScoreHTML;
}