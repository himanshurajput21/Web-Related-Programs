var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var playingTo = document.querySelector("#playingTo");
var input = document.querySelector("input");
var reset = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;

		if(p1Score === winningScore) {
			p1Display.style.color = "green";
			gameOver = true;
		}
	}
	
});

p2.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;

		if(p2Score === winningScore) {
			gameOver = true;
			p2Display.style.color = "green";
		}

	}
});

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p2Display.textContent = p2Score;
	p1Display.textContent = p1Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
}

input.addEventListener("change", function() {
	playingTo.textContent = this.valueAsNumber;
	winningScore = input.valueAsNumber;
	resetGame();
});

reset.addEventListener("click", function() {
	resetGame();
});
