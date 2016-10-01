var ope = {
	addition = " ",
	soustraction = " ",
	multiplication = " ",
	division = " "
};

var a = $(".calculette").data("chiffre");

var b = $(".calculette").data("chiffre");

$("button").click(function(a, ope, b) {
	$("#aff").text(a + ope + b);
});

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function calc() {
	if(ope === 'add') {
		console.log(add(a, b));
	} else if(ope === 'substract') { 
		console.log(substract(a, b));
	} else if(ope === 'multiply') {
		console.log(multiply(a, b));
	} else {
		console.log(divide(a, b));
	}

}

function click() {
	
}