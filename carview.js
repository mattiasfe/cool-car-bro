//NewFileWhoDis//

function updateCarView() {
    return /*HTML*/ `
    <div id='background'>
    <div id='roadDisplay'>
    
        <div class ='backgroundseg' id = 'BL1'>${decorLeftPos == 1 ? '<img id="treeimage" src="img/tree.png">' : ''}</div><div class='roadseg'id='L1'></div><div class='roadseg'id='M1'></div><div class='roadseg'id='R1'></div><div class ='backgroundseg' id = 'BR1'>${decorRightPos == 1 ? '<img id="treeimage" src="img/tree.png">' : ''}</div>
        <div class ='backgroundseg' id = 'BL2'>${decorLeftPos == 2 ? '<img id="treeimage" src="img/tree.png">' : ''}</div><div class='roadseg'id='L2'></div><div class='roadseg'id='M2'></div><div class='roadseg'id='R2'></div><div class ='backgroundseg' id = 'BR2'>${decorRightPos == 2 ? '<img id="treeimage" src="img/tree.png">' : ''}</div>
        <div class ='backgroundseg' id = 'BL3'>${decorLeftPos == 3 ? '<img id="treeimage" src="img/tree.png">' : ''}</div><div class='roadseg'id='L3'></div><div class='roadseg'id='M3'></div><div class='roadseg'id='R3'></div><div class ='backgroundseg' id = 'BR3'>${decorRightPos == 3 ? '<img id="treeimage" src="img/tree.png">' : ''}</div>
        <div class ='backgroundseg' id = 'BL4'>${decorLeftPos == 4 ? '<img id="treeimage" src="img/tree.png">' : ''}</div><div class='roadseg'id='L4'></div><div class='roadseg'id='M4'></div><div class='roadseg'id='R4'></div><div class ='backgroundseg' id = 'BR4'>${decorRightPos == 4 ? '<img id="treeimage" src="img/tree.png">' : ''}</div>
        <div class ='backgroundseg' id = 'BL5'>${decorLeftPos == 5 ? '<img id="treeimage" src="img/tree.png">' : ''}</div><div class='roadseg'id='L5'>${carImageL ? '<img id="carimage" src="img/greencar.png">' : ''}</div><div class='roadseg'id='M5'>${carImageM ? '<img id="carimage" src="img/greencar.png">' : ''}</div><div class='roadseg'id='R5'>${carImageR ? '<img id="carimage" src="img/greencar.png">' : ''}</div><div class ='backgroundseg' id = 'BR5'>${decorRightPos == 5 ? '<img id="treeimage" src="img/tree.png">' : ''}</div>
        </div></div>

        <div id='controlButtons'>
            <button class='ctrlbtn' id='btnleft' onclick='moveLeft()' ${isCarOnLeft}>⬉</button>
            <button class='ctrlbtn' id='btnforw' onclick='moveForw()'>⬆</button>
            <button class='ctrlbtn' id='btnright' onclick='moveRight()' ${isCarOnRight}>⬈</button>
            </div>
            <div id='miscButtons'><button id='tootbtn'><img id="hornimg" src="img/horn.png"></button></div>
            
    `;
}