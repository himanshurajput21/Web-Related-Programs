

var todo = [];
var result = prompt("What would you like to do?");
while(result !== "quit") {
	if(result === "new") {
		newTodo = prompt("Enter a new todo");
		todo.push(newTodo);
	}
	else if(result === "list") {
		console.log(todo);
	}
	result = prompt("What would you like to do?");
}