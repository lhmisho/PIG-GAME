/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').innerHTML = '<em>' + 0 + '</em>';
document.getElementById('score-1').innerHTML = '<em>' + 0 + '</em>';
document.getElementById('current-0').innerHTML = '<em>' + 0 + '</em>';
document.getElementById('current-1').innerHTML = '<em>' + 0 + '</em>';

document.querySelector('.btn-roll').addEventListener('click', function(){
	// random number 
	var dice 	= Math.floor(Math.random() * 6) + 1;


	// roll the dice
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = "dice-" + dice + ".png";

	// update the round scor if the number != 1
	if(dice !== 1){
		// add the scor
		roundScore += dice;
		document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + roundScore + '</em>';
	}else{
		// next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').innerHTML = '<em>' + 0 + '</em>';
		document.getElementById('current-1').innerHTML = '<em>' + 0 + '</em>';

		// change the active player indicator
		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
	}

})













// //document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>'; // we can add html with innerHTML

// // creating dom showing the dice none at first look .. in future it can be change .. now it's for practise
// document.querySelector('.dice').style.display = 'none';
