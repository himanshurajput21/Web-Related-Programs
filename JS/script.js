// var first = prompt("What is your first name?");
// var last = prompt("What is your last name?");
// var age = prompt("What is your age?");
// console.log("Your full name is " + first +" " +last);
// console.log("You are " + age +" year old");

var age = Number(prompt("Enter your age"));
// alert(age + " years is roughly " + age*365 + " days");
if(age<0) {
	console.log("Error age negative");
}

if(age==21) {
	console.log("Happy 21st birthday!!");
}

if(age%2===1) {
	console.log("Your age is odd");
}

if(age % Math.sqrt(age) === 0)
{
	console.log("Age is perfect square");
}

