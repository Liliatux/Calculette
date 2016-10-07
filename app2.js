(function(){

	var resultat;
	var chiffre = parseInt($("#chiffre").text(), 10);
	console.log(chiffre);
	var ope = $("#ope").text();
	console.log(ope);

	function clickBoutton(){
		$("boutton").html();
		return chiffre;
		return ope;
	}
		
	function add(chiffre){
		chiffre + chiffre;
	}

	function sub(chiffre){
		chiffre - chiffre;
	}

	function mult(chiffre){
		chiffre * chiffre;
	}

	function div(chiffre){
		chiffre / chiffre;
	}

	function clicknombre(){
		nombre1
	}

	function operation(){
		if(ope === "add"){
			resultat = add();
		} else if(ope === "sub"){
			resultat = sub();
		} else if(ope === "mult"){
			resultat = mult();
		} else if(ope === "divide"){
			resultat = div();
		} else{
			alert("What ?");
		}
	}

	$("button").click(clickBoutton);
	$("#result").click(operation);
	$("span").html(resultat);
});