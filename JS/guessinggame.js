var num = Number(prompt("Enter a number"));
var correctnum = 7;

if(num === correctnum) {
	alert("Correct!");
}
else if(num < correctnum) {
	alert("Too Low!");
}
else {
	alert("Too High!");
}
