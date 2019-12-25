var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColorsButton = document.querySelector("#newColors");
// var easyButton = document.getElementById("easy");
// var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			// if(this.textContent === "Easy") {
			// 	numSquares = 3;
			// }
			// else {
			// 	numSquares = 6;
			// }
			//Shorter way of if-else
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			reset();
		});
	}
}

function setUpSquares() {

	for(var i = 0; i < squares.length; i++) {
		// squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.background = clickedColor;
				newColorsButton.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

}

function reset() {
	newColorsButton.textContent = "New Colors";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelBlue";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
			if(colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else {
				squares[i].style.display = "none";
			}
		}

	// squaresLogic();
}

// rgbDisplay.textContent = pickedColor;

// squaresLogic();

// function squaresLogic() {
	
// }


function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//create array
	var arr =[];
	//loop through the array
	for(var i = 0; i < num ; i++) {
		//add random colors to array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//random color for red
	var r = Math.floor(Math.random() * 256);
	//random color for green
	var g = Math.floor(Math.random() * 256);
	//random color for blue
	var b = Math.floor(Math.random() * 256);
	//return in form rgb(r, g, b)  (note the spaces between it rgb(r, g, b) and not rgb(r,g,b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColorsButton.addEventListener("click", function() {
	// this.textContent = "New Colors";
	// colors = generateRandomColors(numSquares);
	// pickedColor = pickColor();
	// rgbDisplay.textContent = pickedColor;
	// h1.style.backgroundColor = "steelBlue";
	// messageDisplay.textContent = "";
	//Above replaced by reset();
	reset();
	// squaresLogic();


});

// easyButton.addEventListener("click", function() {
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	rgbDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelBlue";
// 	messageDisplay.textContent = "";
// 	newColorsButton.textContent = "New Colors";
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	squaresLogic();
// });


// hardButton.addEventListener("click", function() {
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	rgbDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelBlue";
// 	messageDisplay.textContent = "";
// 	newColorsButton.textContent = "New Colors";
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	squaresLogic();

// });