$(".text").on("click", function(){
	$(this).toggleClass("line");
});

$(".icon").on("mouseenter", function(){
	$(this).css("visibility", "visible");
});

$(".mouse").on("mouseout", function(){
	$(this).removeClass("fa fa-trash");
});

$("input").on("keypress", function(event){
	//Add a New todo at end of list on hitting enter charcode 13
	//Checking for enter key
	if(event.which === 13) {
		//Take the input and Add a New Todo at end
		console.log($(this).val());
		$("input").val("");
	}

});

