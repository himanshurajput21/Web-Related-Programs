

var todo = [];
var result = prompt("What would you like to do?");
while(result !== "quit") {
	if(result === "new") {
		newTodo = prompt("Enter a new todo");
		todo.push(newTodo);
		console.log("TODO ADDED");
	}
	else if(result === "list") {
		console.log("**********");
		todo.forEach(function(todos, i) {
			console.log(i + ": " + todos);
		});
		// for(var i = 0; i < todo.length; i++) {
		// 	console.log(i + ":" + todo[i]);
		// }
		console.log("**********");
	}
	else if(result === "delete") {
		var del = Number(prompt("Enter the index you want to delete"));
		todo.splice(del, 1);
		console.log("ITEM DELETED");
		
	}
	result = prompt("What would you like to do?");
}

console.log("OK YOU QUIT THE APP");