let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');
let startButton = document.getElementById('start');
let playerTurn = document.getElementById('playerStatus')
let move = 0;
let gameOn = false;


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
startButton.addEventListener('click', () => {
	gameOn = true;
    startButton.disabled = true;
    playerTurn.textContent = 'Player X\'s turn'

    
});


//used to mark squares
function mark(event) {
    if(event.target.textContent === ''){
	if (gameOn === true && move % 2 === 0) {
        event.target.textContent = 'x'
        move = move + 1
        playerTurn.textContent = 'Player O\'s turn'
	} else if (gameOn === true && (move+2) % 2 === 1 ){
        event.target.textContent = 'o';
        move = move + 1
        playerTurn.textContent = 'Player X\'s turn'
        
	}} 
}