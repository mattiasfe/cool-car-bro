
//View

function updateStatus() {
    return `
    <div>
        <div id="statusTextDisplay">${printStatusText()}</div>
    </div>
        <div class="containerStatus">
            ${getStatusLvl()}
        </div>
        <button class="btnDisplay" onclick="getPoints()">Get Points</button>
    `;
}