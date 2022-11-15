const diceArr = [];
const scores = [];
let currScore = 0;
const scoreboardEl = document.querySelector('.score');

function initializeDice() {
	for (let i = 0; i < 6; i++) {
		diceArr[i] = {};
		diceArr[i].id = 'die' + (i + 1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
	}
}

/* Rolling dice values */
function rollDice() {
	for (let i = 0; i < 6; i++) {
		if (diceArr[i].clicked === 0) {
			diceArr[i].value = Math.floor(Math.random() * 6 + 1);
		}
	}
	updateDiceImg();
	handleDiceScore();
}

/* Update images of dice given values of rollDice */
function updateDiceImg() {
	let diceImage;
	for (let i = 0; i < 6; i++) {
		diceImage = 'images/' + diceArr[i].value + '.png';
		
		const dieEl = document.getElementById(diceArr[i].id);
		dieEl.setAttribute('src', diceImage);

		if (diceArr[i].clicked) {
			dieEl.classList.add('transparent');
		} else {
			dieEl.classList.remove('transparent');
		}
	}
}

function diceClick(img) {
	let i = img.getAttribute('data-number');

	img.classList.toggle('transparent');
	if (diceArr[i].clicked === 0) {
		diceArr[i].clicked = 1;
	} else {
		diceArr[i].clicked = 0;
	}
}

function handleDiceScore() {
	let score = 0;
	let dice1Count = 0;
	let dice2Count = 0;
	let dice3Count = 0;
	let dice4Count = 0;
	let dice5Count = 0;
	let dice6Count = 0;

	for (let i = 0; i < diceArr.length; i++) {
		if (diceArr[i].clicked == 0) {
			switch (diceArr[i].value) {
				case 1:
					dice1Count++;
					break;
				case 2:
					dice2Count++;
					break;
				case 3:
					dice3Count++;
					break;
				case 4:
					dice4Count++;
					break;
				case 5:
					dice5Count++;
					break;
				case 6:
					dice6Count++;
					break;
			}
		}
	}

	if (dice1Count == 6) {
		score = 2000;
	} else if (dice1Count == 5) {
		score += 1200;
	} else if (dice1Count == 4) {
		score += 1100;
	} else if (dice1Count == 3) {
		score += 1000;
	} else if (dice1Count == 2) {
		score += 200;
	} else if (dice1Count == 1) {
		score += 100;
	}

	if (dice2Count == 6) {
		score = 400;
	} else if (dice2Count == 3) {
		score += 200;
	}

	if (dice3Count == 6) {
		score = 600;
	} else if (dice3Count == 3) {
		score += 300;
	}

	if (dice4Count == 6) {
		score = 800;
	} else if (dice4Count == 3) {
		score += 400;
	}

	if (dice5Count == 6) {
		score = 1000;
	} else if (dice5Count == 5) {
		score += 700;
	} else if (dice5Count == 4) {
		score += 600;
	} else if (dice5Count == 3) {
		score += 500;
	} else if (dice5Count == 2) {
		score += 100;
	} else if (dice5Count == 1) {
		score += 50;
	}

	if (dice6Count == 6) {
		score = 1200;
	} else if (dice6Count == 3) {
		score += 600;
	}

	currScore += score;
	scoreboardEl.textContent = currScore;

	handleFarkle(score);
}

function handleFarkle(score) {
	if (score == 0) {
		scoreboardEl.textContent = 'Farkle!';
		currScore = 0;
	}
}

function bankScore() {
	scores.push(currScore);
	document.querySelector('.total-score').textContent = scores;

	// Reset scoreboard
	currScore = 0;
	scoreboardEl.textContent = currScore;

	// Reset dice
	initializeDice();
	updateDiceImg();
}

initializeDice();
