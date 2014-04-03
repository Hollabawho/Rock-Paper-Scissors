// Starter Function - Telling browser to use JS after everything has loaded.

$(document).ready(function(){

// Define Variables. 

	var rps = ['rock', 'paper', 'scissors'];
	var playerPoints = 0;
	var botPoints =0;

// Defining var bot, was only telling it to choose once, not more, no need for it. Just define the function. 

	function cpuMove(){
	  return rps[Math.floor(Math.random() * rps.length)];
	}

//var bot = cpuMove();


// ****** Begin ROCK ******

	$("#btn-rock").click(function(){

	 	if( cpuMove() == 'rock'){

 			$('#status').html('<p>You played <u><strong>rock</strong></u>. The bot played <u><strong>rock</strong></u>.</p><p>You tied. :|</p>');

 		} else if( cpuMove() == 'paper'){

			 botPoints += 1;
 			$('#status').html('<p>You played <u><strong>rock</strong></u>. The bot played <u><strong>paper</strong></u>.</p><p>You Lose! :(</p>');

 		} else {

 			 playerPoints += 1;
 			$('#status').html('<p>You played <u><strong>rock</strong></u>. The bot played <u><strong>scissors</strong></u>.</p><p>You Win! :)</p>');
 		}

 		$('#humanScore').text(playerPoints);
 		$('#computerScore').text(botPoints);

	}); // End Rock


// ****** Begin Paper ******

	$("#btn-paper").click(function(){

	 	if( cpuMove() == 'rock'){

	 		$('#status').html('<p>You played <u><strong>paper</strong></u>. The bot played <u><strong>paper</strong></u>.</p><p>You tied. :|</p>');

 		} else if( cpuMove() == 'paper'){
 			
 			botPoints += 1;
 			$('#status').html('<p>You played <u><strong>paper</strong></u>. The bot played <u><strong>scissors</strong></u>.</p><p>You Lose! :(</p>');

 		} else {

 			 playerPoints += 1;	
 			$('#status').html('<p>You played <u><strong>paper</strong></u>. The bot played <u><strong>rock</strong></u>.</p><p>You Win! :)</p>');
 		}

 		$('#humanScore').text(playerPoints);
 		$('#computerScore').text(botPoints);

	}); // End Paper


// ****** Begin Scissors ******

	$("#btn-scissors").click(function(){

	 	if( cpuMove() == 'rock'){

	 		$('#status').html('<p>You played <u><strong>scissors</strong></u>. The bot played <u><strong>scissors</strong></u>.</p><p>You tied. :|</p>');

 		} else if( cpuMove() == 'paper'){
 			
 			botPoints += 1;
 			$('#status').html('<p>You played <u><strong>scissors</strong></u>. The bot played <u><strong>rock</strong></u>.</p><p>You Lose! :(</p>');

 		} else {

 			 playerPoints += 1;	
 			$('#status').html('<p>You played <u><strong>scissors</strong></u>. The bot played <u><strong>paper</strong></u>.</p><p>You Win! :)</p>');
 		}

 		$('#humanScore').text(playerPoints);
 		$('#computerScore').text(botPoints);

	}); // End Scissors



}); // End $(document).ready