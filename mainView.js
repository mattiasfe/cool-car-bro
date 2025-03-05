function updateMainView() {
    let html = `
    ${wantToStartTimer ? `${renderTimerView()}` : ''}
    `
    document.getElementById('app').innerHTML = html;
}
