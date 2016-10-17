'use strict';

$(document).ready(main);

function main(){

	var nombre1;
	var nombre2;
	var ope = {
		addition: $("#add").val(),
		substract: $("#sub").val(),
		multiply: $("#mult").val(),
		divide: $("#div").val()
	}

	function add(a, b){
		return a + b;
	}

	function sub(a, b){
		return a - b;
	}

	function mult(a, b){
		return a * b;
	}

	function div(a, b){
		return a / b;
	}

	$("button").on("click",function(){
		var boutton = $(this).val();
		var chiffre = $(".chiffre").val();
		console.log(chiffre);

		nombre1 = parseInt(chiffre, 10);
		console.log(nombre1);
		nombre2 = parseInt(chiffre, 10);
		console.log(nombre2);

		function calc(a, ope, b){
			$("input").val(a + ope + b);
			if(ope === ope["addition"]){
				input(add(a, b));
			} else if(ope === ope["substract"]){
				input(sub(a, b));
			} else if(ope === ope["multiply"]){
				input(mult(a, b));
			} else if(ope === ope["divide"]){
				input(div(a, b));
			}
		}

		function reset(){
			$("#ope").val("");
			$("input").val("");
		}

		$("#result").click(calc(a, ope, b));
		$("#reset").click(reset);
	});

}