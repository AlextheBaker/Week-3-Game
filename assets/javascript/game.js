	//Global variable declarations
	var alphabetArray = ['abcdefghijklmnopqrstuvwxyz'].split('');
	var winsAmount = 0;
	var lossesAmount = 0;
	var guessesNumber = 0;
	var guessesMade = [];
	//Computer number randomization function
	function computerRandomNumber() {
		var computerLetter = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
		return computerLetter;
	}
	//loss function
	computerLetter = computerRandomNumber();
	function playerLoss() {
		guessesNumber = 0;
		guessesMade = [];
		computerLetter = computerRandomNumber();
	}
	document.write("#lossesAmount").innerHTML = lossesAmount;
	//win function
	function playerWin() {
		guessesNumber = 0;
		guessesMade = [];
		computerLetter = computerRandomNumber();
	}
	document.write("#winsAmount").innerHTML = winsAmount;
	//letter key pressed function (also decides loss and win conditions)
	document.onkeyup = function(keypress) {
		var playerLetter = parse.char(toString(keypress.onkeyup));
		guessesNumber++;
		guessesMade.push(playerLetter);
		if(playerLetter === computerLetter) {
				winsAmount ++;
				alert ("You're a wizard!")
				playerWin();
		} else {
			if(guessesNumber > 9) {
				lossesAmount ++ ;
				alert("Game over man, game over!");
				playerLoss();
			}		
		}				
			document.write("#guessesNumber").innerHTML = guessesNumber;
			document.write("#guessesStrings").innerHTML = guessesMade;
	}