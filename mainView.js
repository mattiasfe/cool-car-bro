function updateView() {
    let html = `
    ${updateStatus()}
     <div id="timer"></div>
    `
    document.getElementById('app').innerHTML = html;
}