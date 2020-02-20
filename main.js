

//variable assignemnt, move tracker, and game status
let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');
let clock = document.getElementById('time');
let row1 = document.getElementById('row-1');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let playerTurn = document.getElementById('playerStatus');
let seconds = Number(clock.textContent)
let move = 0;
let gameOn = false;
let winner = '';

//events to place mark for clicks in boxes
cell0.addEventListener('click', mark);
cell1.addEventListener('click', mark);
cell2.addEventListener('click', mark);
cell3.addEventListener('click', mark);
cell4.addEventListener('click', mark);
cell5.addEventListener('click', mark);
cell6.addEventListener('click', mark);
cell7.addEventListener('click', mark);
cell8.addEventListener('click', mark);
// start button
//turns on game, disables button after click, displays text
startButton.addEventListener('click', () => {
	gameOn = true;
    startButton.disabled = true;
    setInterval(timer, 1000)
	playerTurn.textContent = "Player X's turn";
});

resetButton.addEventListener('click', reset);

//used to mark squares, also change player turn text content
//if logic keeps track of turns and keeps clicking on an already selected square from overwriting, and works when start button has been initiated
function mark(event) {
	if (event.target.textContent === '') {
		if (gameOn === true && move % 2 === 0) {
            //check to see if o won
            //if funciton
			event.target.textContent = 'x';
            move = move + 1;
			playerTurn.textContent = "Player O's turn";
		} else if (gameOn === true && (move + 2) % 2 === 1) {
            //check to see if x won
            //if function
			event.target.textContent = 'o';
			move = move + 1;
			playerTurn.textContent = "Player X's turn";
		} 
	} else if (event.target.textContent === 'x' || event.target.textContent === 'o') {
		playerTurn.textContent = 'Please select an empty cell';
	}
}
//winlogic

//win funciton
function winnerwinner() {
	playerTurn.textContent = 'Congratulations You have won the game ';
}

//reset
function reset() {
	gameOn = false;
	cell0.textContent = '';
	cell1.textContent = '';
	cell2.textContent = '';
	cell3.textContent = '';
	cell4.textContent = '';
	cell5.textContent = '';
	cell6.textContent = '';
	cell7.textContent = '';
	cell8.textContent = '';
	startButton.disabled = false;
	console.log('reset');
}

// set elapsed time 


function timer(){
  console.log('html click works')
  seconds = seconds + 1
  clock.textContent = seconds
console.log(seconds)
}
