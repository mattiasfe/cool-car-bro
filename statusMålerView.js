
//View
getStatusLvl()
function updateStatus() {
    app.innerHTML = /*HTML*/ `
        <div class="containerStatus">
            ${getStatusLvl()}
        </div>
    `;
}