
function updateMainView() {
    let html = `
    ${wantToStartTimer ? `${renderTimerView()}` : ''}
    ${updateStatus()}
    ${updateCarView()}
    `
    document.getElementById('app').innerHTML = html;
}
