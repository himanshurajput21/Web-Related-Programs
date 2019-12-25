//Check for Even number
function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

//Factorial
function factorial(num) {
	if(num < 0) {
		console.log("Negative factorial is undefined");
	}
	else {
		var fact = 1;
		for(var i = num; i >= 1; i--) {
		fact = num * fact;
		num--;
		}
		return fact;
	}
	
}

//kebabToSnake
//GOOD TRIED
// function kebabToSnake(str) {
// 	var idx = str.indexOf("-");
// 	return str.slice(0,idx-1) + "_" + str.slice(idx+1)

// }

function kebabToSnake(str) {
	var newStr = str.replace(/-/g,"_");
	return newStr;
}