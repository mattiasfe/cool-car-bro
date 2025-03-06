//variabler 
const app = document.getElementById('app');
//variabler for carview
let wantToShowDialog = false;

let coolScoreHTML = '';
let coolScoreNumber = 1;
let statusbar = coolScoreNumber;
let isAnswerCorrect = '';
let statusText = '';

//carview modell
let carPos = 0;
let decorLeftPos = 1;
let decorRightPos = 4;
let carImageL = false;
let carImageM = true;
let carImageR = false;
let isCarOnLeft = " ";
let isCarOnRight = " ";
let turns = 0;
let obstacleNumber = 0;