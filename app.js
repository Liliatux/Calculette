(function(){
	'use strict';
	var app = {
		nombre1: null,
		nombre2: null,
		addition: null,
		substract: null,
		multiply: null,
		divide: null,
		
		init: function(){
			this.listeners();
		},

		listeners: function(){
			$("button").on("click", this.calc.bind(this));
			$("#result").on("click", this.result.bind(this));
			$("#reset").on("click", this.reset.bind(this));
		},

		chiffre: function(){
			this.nombre1 = $("button").data("chiffre");
			this.nombre2 = $("button").data("chiffre");
		},

		ope: function(){
			this.addition = $("button").data("ope");
			this.substract = $("button").data("ope");
			this.multiply = $("button").data("ope");
			this.divide = $("button").data("ope");
		},

		add: function(){
			return nombre1 + nombre2;
		},

		sub: function(){
			return nombre1 - nombre2;
		},

		mult: function(){
			return nombre1 * nombre2;
		},

		div: function(){
			return nombre1 / nombre2;
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