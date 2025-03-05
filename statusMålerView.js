
//View
updateStatus()
function updateStatus() {
    app.innerHTML = /*HTML*/ `
    <div>
        <div id="statusTextDisplay">${printStatusText()}</div>
    </div>
        <div class="containerStatus">
            ${getStatusLvl()}
        </div>
    `;
}