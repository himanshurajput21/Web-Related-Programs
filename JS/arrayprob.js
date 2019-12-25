function printReverse(array) {
	for(var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array) {
	// var flag = 0;
	for(var i = 1; i < array.length; i++) {
		if(array[0] !== array[i]) 
			return false;
	}
	return true;
}

function sumArray(array) {
	var sum = 0;
	array.forEach(function(element) {
		sum += element;
	});
	return sum;
}

function max(array) {
	var max = array[0];
	for(var i = 1; i < array.length; i++) {
		if(array[i] > max) {
			max = array[i];
		}
	}
	return max;
}