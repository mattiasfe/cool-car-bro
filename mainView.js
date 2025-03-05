
function updateMainView() {
    let html = `
    ${wantToStartTimer ? `${renderTimerView()}` : ''}
    ${updateStatus()}
    `
    document.getElementById('app').innerHTML = html;
}
