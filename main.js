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
let cellNumber;
let clock = document.getElementById('time');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let player1Button = document.getElementById('p1Button');
let player2Button = document.getElementById('p2Button');
let pVPButton = document.getElementById('PvP');
let pVCButton = document.getElementById('PvC');
let playerTurn = document.getElementById('playerStatus');
let playerXName = document.getElementById('playerX');
let playerOName = document.getElementById('playerO');
let currentPlayer = playerXName.textContent;
let seconds = Number(clock.textContent);
let move = 0;
let gameOn = false;
let winner = '';
let computer = false;

// object to aid computer guess function

let cellLookup = {
	0: cell0,
	1: cell1,
	2: cell2,
	3: cell3,
	4: cell4,
	5: cell5,
	6: cell6,
	7: cell7,
	8: cell8
};
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

//button listeners
//sets player x name
player1Button.addEventListener('click', () => {
	playerXName.textContent = names.value;
	names.value = '';
});
//sets player o name
player2Button.addEventListener('click', () => {
	playerOName.textContent = names.value;
	names.value = '';
});
//sets up settings for a player vs player match
pVPButton.addEventListener('click', () => {
	pVCButton.disabled = true;
	pVPButton.disabled = true;
	pVPButton.className = 'selectedButton';
});
//sets up setting for a player vs computer match
pVCButton.addEventListener('click', () => {
	pVCButton.disabled = true;
	pVPButton.disabled = true;
	player2Button.disabled = true;
	computer = true;
	playerOName.textContent = 'Computer';
	pVCButton.className = 'selectedButton';
});

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
	if (event.target.textContent === '') {
		if (gameOn === true && move % 2 === 0) {
			event.target.textContent = 'x';
			move = move + 1;
			playerTurn.textContent = "Player O's turn";
			currentPlayer = playerXName.textContent;
			winCheck(event.target.textContent);
			// draw()
		} else if (gameOn === true && (move + 2) % 2 === 1 && computer === true) {
//computer guess logic
			comGuess();
		} else if (gameOn === true && (move + 2) % 2 === 1 && computer === false) {
			event.target.textContent = 'o';
			move = move + 1;
			playerTurn.textContent = "Player X's turn";
			currentPlayer = playerOName.textContent;
			winCheck(event.target.textContent);
			
		} 
	} else if (event.target.textContent === 'x' || event.target.textContent === 'o') {
		playerTurn.textContent = 'Please select an empty cell';
	}
}

//reset
function reset() {
	gameOn = false;
	//--------return to cells to empty
	cell0.textContent = '';
	cell1.textContent = '';
	cell2.textContent = '';
	cell3.textContent = '';
	cell4.textContent = '';
	cell5.textContent = '';
	cell6.textContent = '';
	cell7.textContent = '';
	cell8.textContent = '';
	//--------remove winning class
	cell0.className = '';
	cell1.className = '';
	cell2.className = '';
	cell3.className = '';
	cell4.className = '';
	cell5.className = '';
	cell6.className = '';
	cell7.className = '';
	cell8.className = '';
	startButton.disabled = false;
	pVCButton.disabled = false;
	pVPButton.disabled = false;

	//suspend clickability
	cell0.removeEventListener('click', mark);
	cell1.removeEventListener('click', mark);
	cell2.removeEventListener('click', mark);
	cell3.removeEventListener('click', mark);
	cell4.removeEventListener('click', mark);
	cell5.removeEventListener('click', mark);
	cell6.removeEventListener('click', mark);
	cell7.removeEventListener('click', mark);
	cell8.removeEventListener('click', mark);
	//reset the clock
	clearInterval(interval);
	clock.textContent = 0;
	seconds = 0;
	//reset the move counter
	move = 0;
	//reset the text
	playerOName.textContent = '';
	playerXName.textContent = '';
	playerTurn.textContent = 'Please select number of players and click the Start Button';
	// rest game settings
	pVPButton.className = '';
	pVCButton.className = '';
	computer = false;
	player2Button.disabled = false;
	console.log('reset');
}

// gives elapsed time since starting each game
function timer() {
	seconds = seconds + 1;
	clock.textContent = seconds;
}

//computer guess
//generates a random guess within the game
function comGuess() {
	cellNumber = Math.floor(Math.random() * 9);

	if (cellLookup[cellNumber].textContent === '') {
		cellLookup[cellNumber].textContent = 'o';
		move = move + 1;
	} else {
		comGuess();
	}
}





function draw() {
if (cell0.textContent!==''&&
	cell1.textContent!==''&&
	cell2.textContent!==''&&
	cell3.textContent!==''&&
	cell4.textContent!==''&&
	cell5.textContent!==''&&
	cell6.textContent!==''&&
	cell7.textContent!==''&&
	cell8.textContent!==''){
		playerTurn.textContent = 'We have a draw'
		gameOn = false
		clearInterval(interval);
		cell0.removeEventListener('click', mark);
		cell1.removeEventListener('click', mark);
		cell2.removeEventListener('click', mark);
		cell3.removeEventListener('click', mark);
		cell4.removeEventListener('click', mark);
		cell5.removeEventListener('click', mark);
		cell6.removeEventListener('click', mark);
		cell7.removeEventListener('click', mark);
		cell8.removeEventListener('click', mark);
		

	}
}


//winlogic
//checks all winning combinations within a methods arrays
//iterates over winning array and adds a class to show the winning combo
function winCheck(target) {
	for (let element of Object.values(winningCombos)) {
		if (element[0].textContent === '') {
			
		} else if (
			element[0].textContent === element[1].textContent &&
			element[0].textContent === element[2].textContent &&
			element[0].textContent === target
		) {
			
			for (cell of element) {
				cell.className += 'winner';
			}
			winnerwinner(target);
			break
		} else {
			draw()
	} 
	}
}
//prints win message and suspends clickability within game
function winnerwinner(winner) {
	playerTurn.textContent = 'Congratulations ' + currentPlayer + ', player ' + winner + ' has won the game ';
	clearInterval(interval);
	cell0.removeEventListener('click', mark);
	cell1.removeEventListener('click', mark);
	cell2.removeEventListener('click', mark);
	cell3.removeEventListener('click', mark);
	cell4.removeEventListener('click', mark);
	cell5.removeEventListener('click', mark);
	cell6.removeEventListener('click', mark);
	cell7.removeEventListener('click', mark);
	cell8.removeEventListener('click', mark);
}
