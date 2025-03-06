let dialogueAnswer1 = false;
let dialogueAnswer2 = false;
let dialogueAnswer3 = false;

let dialogueAnswerResponse1 = "text 1";
let dialogueAnswerResponse2 = "text 2";
let dialogueAnswerResponse3 = "text 3";

let viewDialogue = false;

function changeDialogueStatus1() {
    dialogueAnswer1 = !dialogueAnswer1;
    changeDialogueAnswer();
}

function changeDialogueStatus2() {
    dialogueAnswer2 = !dialogueAnswer2;
    changeDialogueAnswer();
}

function changeDialogueStatus3() {
    dialogueAnswer3 = !dialogueAnswer3;
    changeDialogueAnswer();
}

function dialogueStatus() {
    viewDialogue = !viewDialogue;
    if (viewDialogue) {
        document.getElementById('dialogueBoxAll').innerHTML = `
                   

                <div class="buddy"> <img class="buddyImg" src="old man cellphone scared.png"></div>

                    <div class="buddyText" id="buddyText">
                            Hei kamerat-kompis! <br>
                            Jeg er så glad for at du er her. <br>
                            Du må høre på meg det er<br>
                            helt sinnsykt viktig!!.
                        </div>
                    <div class="questionBox" id=yourResponse> "Hva sier du?..." <br>
                        <div class="answerBox" onclick="changeDialogueStatus1()">Ikke snakk til meg din raring</div>
                        <div class="answerBox" onclick="changeDialogueStatus2()">Har ikke tid, vi snakkes senere.</div>
                        <div class="answerBox" onclick="changeDialogueStatus3()">Jeg er ikke interissert i Jahovas vitner.</div>
                    </div>
                </div>  
                    `
    }
    else {
        document.getElementById('dialogueBoxAll').innerHTML = ''
    }
}

// Opens the dialogue box

function changeDialogueAnswer() {
    if (dialogueAnswer1 == true) {
        document.getElementById("yourResponse").innerHTML = "Åja, det var ikke snilt sagt. Jeg er bare en gammel mann som prøver å hjelpe.";
    }
    if (dialogueAnswer2 == true) {
        yourResponse2 = "dialogueAnswerResponse2";
        document.getElementById("yourResponse").innerHTML = "Okei, vi snakkes senere da. Ha en fin dag.. :(";
    }
    if (dialogueAnswer3 == true) {
        yourResponse3 = "dialogueAnswerResponse3";
        document.getElementById("yourResponse").innerHTML = "La gud være med deg min venn.";
    }
}