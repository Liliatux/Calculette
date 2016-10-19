(function(){
	'use strict';
	var app = {
		nombre1: null,
		nombre2: null,
		
		init: function(){

		},

		listeners: function(){
			$("button").on("click");
			$("#result").on("click");
			$("#reset").on("click");
		},

		chiffre: function(){

		},

		ope: function(){
			addition: $("#add").val();
			substract: $("#sub").val();
			multiply: $("#mult").val();
			divide: $("#div").val();
		},

		add: function(a, b){
			return a + b;
		},

		sub: function(a, b){
			return a - b;
		},

		mult: function(a, b){
			return a * b;
		},

		div: function(a, b){
			return a / b;
		},

		calc: function(a, ope, b){
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
		},

		reset: function(){
			$("#ope").val("");
			$("input").val("");
		}
	}
})();