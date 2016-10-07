$(document).ready(main);

function main(){

	var chiffre = {
		0: $("#0").html(),
		1: $("#1").html(),
		2: $("#2").html(),
		3: $("#3").html(),
		4: $("#4").html(),
		5: $("#5").html(),
		6: $("#6").html(),
		7: $("#7").html(),
		8: $("#8").html(),
		9: $("#9").html()
	};
	console.log(chiffre);
	var ope = {
		addition: $("#add").html(),
		substract: $("#sub").html(),
		multiply: $("#mult").html(),
		divide: $("#div").html()
		};
	console.log(ope);

	function clickBoutton(){
		var boutton = $(this).text();
		var spanOpe = $("#ope").text();
		var operation = spanOpe + boutton;
		$("#ope").text(operation);
		
		function add(a, b){
			a + b;
		}

		function sub(a, b){
			a - b;
		}

		function mult(a, b){
			a * b;
		}

		function div(a, b){
			a / b;
		}

		function result(){
			$("input").val();

			if(boutton === ope["addition"]){
				add(chiffre, chiffre);
			} else if(boutton === ope["substract"]){
				sub();
			} else if(boutton === ope["multiply"]){
				mult();
			} else if(boutton === ope["divide"]){
				div();
			} else{
				alert("What ?");
			}
		}

		$("#result").click(result);
	}

	$("button").click(clickBoutton);
}