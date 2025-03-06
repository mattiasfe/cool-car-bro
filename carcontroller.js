function moveLeft() {
    carPos--;
    nextTurn();
}

function moveForw() {
    nextTurn();
}

function moveRight() {
    carPos++;
    nextTurn();
}

function nextTurn() {
    //Håndterer alt av bevegelse som skjer når en tur er ferdig//

    // Posisjon av bilen //
    if (carPos == 0) {
        carPos = 0;
        carImageL = false;
        carImageM = true;
        carImageR = false;
        isCarOnLeft = " ";
        isCarOnRight = " ";
        console.log('stayed mid');
    }

    if (carPos > 0) {
        carImageL = false;
        carImageM = false;
        carImageR = true;
        isCarOnLeft = " ";
        isCarOnRight = "disabled";
        console.log('drove right');
    } 
    
    if (carPos < 0) {
        carImageL = true;
        carImageM = false;
        carImageR = false;
        isCarOnLeft = "disabled";
        isCarOnRight = " ";
        console.log('drove left');
    }

    turns++;
    console.log(turns);
    // Posisjon av hindringer //
    if (turns == 10) {
        RowOnePos = obstacleRng();
        obstacleNumber++;
        console.log(RowOnePos);
    }
    // Posisjon av kompiser //

    // Posisjon av dekor //
    if (decorLeftPos >= -1) {
        decorLeftPos++;
    }

    if (decorRightPos >= -1) {
        decorRightPos++;
    }
    
    if (decorLeftPos == 6) {
        decorLeftPos = 0;
    }

    if (decorRightPos == 6) {
        decorRightPos = 0;
    }

    updateCarView();
    updateMainView();
}

function obstacleRng() {
    return Math.floor(Math.random() * (1 - -2) + -1);
}