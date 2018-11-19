/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

// initializing the game
init();
var previous_dice;
// randomly generating the dice and number
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		// random number 
		var dice 	= Math.floor(Math.random() * 6) + 1;

		// if((previous_dice + dice) == 12){
		// 	nextPlayer();
		// }
		// roll the dice
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = "dice-" + dice + ".png";

		// update the round scor if the number != 1
		if(previous_dice === 6 && dice === 6){
			// if previous and current dice both are same than player will loss the scor;
			scores[activePlayer] = 0;
			document.querySelector('#score-'+activePlayer).innerHTML = '<em>' + '0' + '</em>';
			nextPlayer();
		}else if(dice !== 1){
			// add the scor
			roundScore += dice;
			document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + roundScore + '</em>';
		}else{
			// next player
			nextPlayer();
		}

		previous_dice = dice;


	}
});


// working with hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gamePlaying){
		// add current scor to global scor
		scores[activePlayer] += roundScore;

		// update UI
		document.querySelector('#score-'+activePlayer).innerHTML = '<em>' + scores[activePlayer] + '</em>';


		// check if the user is win or not
		if(scores[activePlayer] >= 20){
			document.querySelector('#name-' + activePlayer).innerHTML = '<em>' + "winner!" + '</em>';
			//document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice').src = 'winner.png';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying = false;
		}else{
			// next player
			nextPlayer();
		}

	}
});


function nextPlayer(){
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


document.querySelector('.btn-new').addEventListener('click', init);

// function for initializing the game
function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').innerHTML = '<em>' + 0 + '</em>';
	document.getElementById('score-1').innerHTML = '<em>' + 0 + '</em>';
	document.getElementById('current-0').innerHTML = '<em>' + 0 + '</em>';
	document.getElementById('current-1').innerHTML = '<em>' + 0 + '</em>';
	document.getElementById('name-0').innerHTML = '<em>' + "Player 1" + '</em>';
	document.getElementById('name-1').innerHTML = '<em>' + "Player 2" + '</em>';

	// remove winner class form both of them bcz we don't know who is actually won
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	// now remove active class form also from both of them so that we can active player-1 at start of the game
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	// now active palyer-1 as active classs
	document.querySelector('.player-0-panel').classList.add('active');
}







// //document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>'; // we can add html with innerHTML

// // creating dom showing the dice none at first look .. in future it can be change .. now it's for practise
// document.querySelector('.dice').style.display = 'none';
