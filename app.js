var in1 = $("#input1").val();
	console.log("1");

//récupérer le contenu de input 2
var in2 = $("#input2").val();
	console.log("2");

//récupérer le contenu de select option
var val1 = $("add").val();
console.log("L'addition est" + " " + val1);

var val2 = $("substract").val();
console.log("La soustraction est" + " " + val2);

var val3 = $("multiply").val();
console.log("La multiplication est" + " " + val3);

var val4 = $("divide").val();
console.log("La division est" + " " + val4);

//récuperer le boutton envoyer
$("#button1").click(envoyer);
function envoyer(){
	console.log("calculer");
}

//ajout des fonctions calcul
function add(in1, in2) {
	return in1 + in2;
}

function substract(in1, in2) {
	return in1 - in2;
}

function multiply(in1, in2) {
	return in1 * in2;
}

function divide(in1, in2) {
	return in1 / in2;
}

//ajout de la fonction calc
function calc() {
	var x = process.argv[3];
	var y = process.argv[4];

	in1 = parseInt(x, 10);
	in2 = parseInt(x, 10);
}

