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
//may be useless
// let row1 = document.getElementsByClassName('r1');
// let row2 = document.getElementsByClassName('r2');
// let row3 = document.getElementsByClassName('r3');
// let column1 = document.getElementsByClassName('c1');
// let c1Array = document.querySelectorAll('.c1')
// ^^
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let playerTurn = document.getElementById('playerStatus');

let seconds = Number(clock.textContent);
let move = 0;
let gameOn = false;
let winner = '';

//winning combos object
//rows, columns, diagonals
let winningCombos = {
	r1: [ cell0, cell1, cell2 ],
	r2: [ cell3, cell4, cell5 ],
	r3: [ cell6, cell7, cell8 ],
	c1: [ cell0, cell3, cell6 ],
	c2: [ cell1, cell4, cell7 ],
	c3: [ cell2, cell5, cell8 ],
	d1: [ cell0, cell4, cell8 ],
	d2: [ cell2, cell4, cell6 ]
};

// start button
//turns on game, disables button after click, displays text
startButton.addEventListener('click', () => {
	gameOn = true;
	startButton.disabled = true;
	interval = setInterval(timer, 1000);
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
	playerTurn.textContent = "Player X's turn";
});

resetButton.addEventListener('click', reset);

//used to mark squares, also change player turn text content
//if logic keeps track of turns and keeps clicking on an already selected square from overwriting, and works when start button has been initiated
function mark(event) {
	//winCheck()
	if (event.target.textContent === '') {
		if (gameOn === true && move % 2 === 0) {
			event.target.textContent = 'x';
			move = move + 1;
			//winCheck()
			for (let element of Object.values(winningCombos)) {
				console.log(element[0].textContent);
				console.log(element[1].textContent);
				console.log(element[2].textContent);
				if (element[0].textContent !== '') {
					playerTurn.textContent = "Player O's turn";
					console.log('not in the win side x');
				} else if (
					element[0].textContent === element[1].textContent &&
					element[0] === element[2].textContent &&
					element[0].textContent === 'x'
				)
					console.log('hit in the click');
				//winnerwinner()
			}
		} else if (gameOn === true && (move + 2) % 2 === 1) {
			event.target.textContent = 'o';
			move = move + 1;
			//winCheck()
			for (let element of Object.values(winningCombos)) {
				console.log(element[0].textContent);
				console.log(element[1].textContent);
				console.log(element[2].textContent);
				if (element[0].textContent === '') {
					playerTurn.textContent = "Player X's turn";
					console.log('not in the win side o');
				} else if (
					element[0].textContent === element[1].textContent &&
					element[0] === element[2].textContent &&
					element[0].textContent === 'o'
				)
					console.log('hit in the click');
				//winnerwinner()
			}
		}
	} else if (event.target.textContent === 'x' || event.target.textContent === 'o') {
		playerTurn.textContent = 'Please select an empty cell';
	}
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
	cell0.removeEventListener('click', mark);
	cell1.removeEventListener('click', mark);
	cell2.removeEventListener('click', mark);
	cell3.removeEventListener('click', mark);
	cell4.removeEventListener('click', mark);
	cell5.removeEventListener('click', mark);
	cell6.removeEventListener('click', mark);
	cell7.removeEventListener('click', mark);
	cell8.removeEventListener('click', mark);
	clearInterval(interval);
	clock.textContent = 0;
	seconds = 0;
	move = 0;
	playerTurn = 'Please select number of players and click the Start Button';
	console.log('reset');
}

// set elapsed time
function timer() {
	seconds = seconds + 1;
	clock.textContent = seconds;
}

//winlogic
// function checkForWin(){
function winCheck() {
	for (let element of c1Array) {
		console.log(element.textContent.includes('x'));
		if (element.textContent.includes('x')) {
			winnerwinner();
		}
	}
}
//
//win funciton
function winnerwinner() {
	console.log('hit in the funciton');
	playerTurn.textContent = 'Congratulations You have won the game ';
	// cell0.removeEventListener('click', mark);
	// cell1.removeEventListener('click', mark);
	// cell2.removeEventListener('click', mark);
	// cell3.removeEventListener('click', mark);
	// cell4.removeEventListener('click', mark);
	// cell5.removeEventListener('click', mark);
	// cell6.removeEventListener('click', mark);
	// cell7.removeEventListener('click', mark);
	// cell8.removeEventListener('click', mark);
}
