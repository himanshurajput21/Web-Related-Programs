// var user = prompt("Are we there yet");
// while(user !== "yes" && user !== "yeah") {
// 	user = prompt("Are we there yet");
// }
// alert("Yah, we finally made it!");

// VERSION 2

var user = prompt("Are we there yet");
while(user.indexOf("yes") == -1) {
	user = prompt("Are we there yet");
}
alert("Yah, we finally made it!");