(function(){
	'use strict';
	var app = {
		number:null,
		numb1: null,
		numb2: null,
		add: null,
		sub: null,
		mult: null,
		div: null,

		init: function(){
			this.listeners();
		},

		listeners: function(){
			$("button").on("click",this.start.bind(this));
			$("#result").on("click",this.calc.bind(this));
			$("#reset").on("click",this.reset.bind(this));
		},

		chiffre: function(){
			this.numb1 = parseInt($("button").data("calc"), 10);
			this.numb2 = parseInt($("button").data("calc"), 10);
			console.log(numb1);
		},

		ope: function(){
			this.add = $("button").data("calc");
			this.sub = $("button").data("calc");
			this.mult = $("button").data("calc");
			this.div = $("button").data("calc");
		},

		add: function(){
			return this.numb1 + this.numb2;
		},

		sub: function(){
			return this.numb1 - this.numb2;
		},

		mult: function(){
			return this.numb1 * this.numb2;
		},

		div: function(){
			return this.numb1 / this.numb2;
		},

		input: function(){
			$("input").val(this.number);
		},

		start: function(){
			this.input();
		},

		calc: function(){
			this.input();
			if(this.ope() === this.add){
				input(this.add());
			} else if(this.ope === this.sub){
				input(this.sub());
			} else if(this.ope === this.mult){
				input(this.mult());
			} else if(this.ope === this.div){
				input(this.div());
			}
		},

		reset: function(){
			$("input").val("");
			this.calc();
		}
	}

	app.init();
})();