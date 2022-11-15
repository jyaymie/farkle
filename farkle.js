const rollBtnEl = document.querySelector('.roll');

const diceArr = [];

function initializeDice() {
	for (let i = 0; i < 6; i++) {
		diceArr[i] = {};
		diceArr[i].id = 'die' + i + 1;
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
}

/* Update images of dice given values of rollDice */
function updateDiceImg() {
	let diceImage;
	for (let i = 0; i < 6; i++) {
		diceImage = 'images/' + i + '.png';
		document.getElementById(diceArr[i].id).setAttribute('src', diceImage);
	}
}

function diceClick(img) {
	let i = img.getAttribute('data-number');

	img.classList.toggle('transparent');
	if (diceArr[i].clicked === 0) {
		diceArr[i].clicked == 1;
	} else {
		diceArr[i].clicked == 0;
	}
}

rollBtnEl.addEventListener('click', rollDice);