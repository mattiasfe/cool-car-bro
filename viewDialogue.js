function a() {
    dialogueAnswer1 = !dialogueAnswer1;
    answerBuddy();
}

let dialogueAnswer1 = "false";
let dialogueAnswer2 = "false";
let dialogueAnswer3 = "false";

let dialogueAnswerResponse1 = "text 1";
let dialogueAnswerResponse2 = "text 2";
let dialogueAnswerResponse3 = "text 3";

let dialogueBox = "text";

function viewDialogue(){
}
// Opens the dialogue box

function answerBuddy(){
    if(dialogueAnswer1 == "true"){
        dialogueBox = "dialogueAnswerResponse1";
    }
    if(dialogueAnswer2 == "true"){
        dialogueBox = "dialogueAnswerResponse2";
    }
    if(dialogueAnswer3 == "true"){
        dialogueBox = "dialogueAnswerResponse3";
    }
}

