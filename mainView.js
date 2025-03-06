function updateMainView() {
    let html = `
    ${renderTimerView()}
    ${updateStatus()}
    ${buddyView()}
    ${updateCarView()}
    `
    document.getElementById('app').innerHTML = html;
}