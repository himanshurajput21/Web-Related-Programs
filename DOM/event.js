var button = document.querySelector("button");
// var paragraph = document.querySelector("p");
// var body = document.querySelector("body");

// button.addEventListener("click", function() {
// 	paragraph.textContent = "Someone Clicked Me!";
// });

// var clicked = 0;

// button.addEventListener("click", function() {
// 	if(clicked === 0) {
// 		body.style.background = "#f214d5"; 
// 		clicked = 1;
// 		paragraph.textContent = "Someone Clicked Me! Change to Pink";
// 	}
// 	else {
// 		body.style.background = "white"; 
// 		clicked = 0;
// 		paragraph.textContent = "Someone Again Clicked Me! Change to White";
// 	}
     
// });

var isPurple = false;

// button.addEventListener("click", function() {
// 	if(isPurple) {
// 		document.body.style.background = "white";
// 		isPurple = false;
// 	}
// 	else {
// 		document.body.style.background = "orange";
// 		isPurple = true;
// 	}
	
    
// });


// button.addEventListener("click", function() {
// 	if(isPurple) {
// 		document.body.style.background = "white";
// 		// isPurple = false;
// 	}
// 	else {
// 		document.body.style.background = "purple";
// 		// isPurple = true;
// 	}

// 	isPurple = !isPurple;
	
    
// });


button.addEventListener("click", function() {
	document.body.classList.toggle("change");
    
});