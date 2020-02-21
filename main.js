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
            playerTurn.textContent = "Player O's turn"
            winCheck(event.target.textContent)
				//winnerwinner()
			}  else if (gameOn === true && (move + 2) % 2 === 1) {
			event.target.textContent = 'o';
            move = move + 1;
            playerTurn.textContent = "Player X's turn";
                winCheck(event.target.textContent)
        }

	 else if (event.target.textContent === 'x' || event.target.textContent === 'o') {
		playerTurn.textContent = 'Please select an empty cell';
	}}}


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
			
        function winCheck(target){
            for (let element of Object.values(winningCombos)) {
                console.log(target)
                console.log(element[0].textContent)
				if (element[0].textContent === '') {
                console.log('what is going on')
					
				} else if (
					element[0].textContent === element[1].textContent &&
					element[0].textContent === element[2].textContent && element[0].textContent===target 
				){
                    console.log(target + 'has won');
                   for (cell of element){
                       cell.className += 'winner'
                   } 	
				winnerwinner(target)
			
                }}}


function winnerwinner(winner) {
	
    playerTurn.textContent = 'Congratulations ' + winner +' won the game ';
    clearInterval(interval)
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
