
//View
updateStatus()
function updateStatus() {
    app.innerHTML = /*HTML*/ `
        <div class="containerStatus">
            ${getStatusLvl()}
        </div>
    `;
}