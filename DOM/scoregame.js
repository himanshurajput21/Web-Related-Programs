// var option = document.querySelector("#first");
// var h1 = document.querySelector("h1");
// var playerone = document.querySelector("#playerone");
// var playertwo = document.querySelector("#playertwo");

// var i = 0;
// playerone.addEventListener("click", function() {
// 	i++;
// 	h1.innerHTML = " to 0"
// });


// option.addEventListener("click", function() {
// 	alert("click");
// });

var playerone = document.querySelector("#playerone");
var playertwo = document.getElementById("playertwo");
var reset = document.querySelector("#reset");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1score = 0;
var p2score = 0;
var gameOver = false;

var input = document.getElementsByTagName("input")[0];
var playing = document.getElementById("playing");

input.addEventListener("click", function() {
	playing.textContent = input.valueAsNumber;
});

playerone.addEventListener("click", function() {
	if(p2score != input.valueAsNumber) {
		if(p1score < input.valueAsNumber) {
		p1score++;
		p1.textContent = p1score;
		}

		if(p1score === input.valueAsNumber)
			p1.style.color = "green";
	}

});

playertwo.addEventListener("click", function() {
	if(p1score != input.valueAsNumber) {
		if(p2score < input.valueAsNumber) {
		p2score++;
		p2.textContent = p2score;
		}

		if(p2score === input.valueAsNumber)
			p2.style.color = "green";
	}
	
});

reset.addEventListener("click", function() {
	playing.textContent = 5;
	p1.style.color = "black";
	p2.style.color = "black";
	p1score = 0;
	p2score = 0;
	p1.textContent = p1score;
	p2.textContent = p2score;
	input.valueAsNumber = 5;
})

// playerone.addEventListener("click", function() {
// 	if(!gameOver) {
// 		p1score++;
// 		p1.textContent = p1score;
// 		if(p1score === winningScore) {
// 			gameOver = true;
// 		}
// 	}

// });