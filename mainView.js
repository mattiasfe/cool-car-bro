function updateMainView() {
    let html = `
    ${wantToStartTimer ? `${renderTimerView()}` : ''}
    ${updateStatus()}
    ${buddyView()}
    ${updateCarView()}
    `
    document.getElementById('app').innerHTML = html;
}