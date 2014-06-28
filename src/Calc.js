var Calc = {
	// Native Methods
	Abs: 		Math.abs,
	Acos: 		Math.acos,
	Acos: 		Math.acosh,
	Asin: 		Math.asin,
	Asinh: 		Math.asinh,
	Atan: 		Math.atan,
	Atan2: 		Math.atan2,
	Ceil: 		Math.ceil,
	Cos: 		Math.cos,
	Cosh: 		Math.cosh,
	CubeRoot: 	Math.cbrt,
	Exp: 		Math.exp,
	Expm1: 		Math.expm1,
	Floor: 		Math.floor,
	Fround: 	Math.fround,
	Hypot: 		Math.hypot,
	Imul: 		Math.imul,
	Log: 		Math.log,
	Log10: 		Math.log10,
	Log1p: 		Math.log1p,
	Log2: 		Math.log2,
	Max: 		Math.max,
	Min: 		Math.min,
	Pow: 		Math.pow,
	Random: 	Math.random,
	Round: 		Math.Round,
	Sign: 		Math.sign,
	Sin: 		Math.sin,
	Sinh: 		Math.sinh,
	SquareRoot: Math.sqrt,
	Tan: 		Math.tan,
	// Constants
	E: 			Math.E,
	LN2: 		Math.LN2,
	LN10: 		Math.LN10,
	LOG2E: 		Math.LOG2E,
	LOG10E: 	Math.LOG10E,
	Pi: 		Math.PI,
	SQRT1_2: 	Math.SQRT1_2,
	SQRT2: 		Math.SQRT2,
	// New Methods
	Equals: function() {
		var args = arguments;
		var state = [];
		for (var i = 0; i < args.length; i++) if (i != args.length - 1) {
			state.push(args[i]  == args[i + 1] ? true : false);
		}
		equality = state.every(function(element, index, array) {
			return element;
		});
		return equality;
	},
	QuadraticEquation: function(a, b, c) {
		var a2, b2, c2;
		if (a != 0 && b != 0 && c != 0) {
			delta = (b * b) - 4 * a * c;
			x1 = (-b + delta) / (2 * a);
			x2 = (-b - delta) / (2 * a);
			x = {
				1: 	x1,
				2: 	x2
			}
			return x;
		}
		return 1;
	},
	Sub: function() {
		var args = arguments;
		var sub = 0;
		for (var i = 0; i < args.length; i++) {
			sub -= args[i];
		}
		return sub;
	},
	Sum: function() {
		var args = arguments;
		var sum = 0;
		for (var i = 0; i < args.length; i++) {
			sum += args[i];
		}
		return sum;
	},
	Product: function() {
		var args = arguments;
		var product = 1;
		for (var i = 0; i < args.length; i++) {
			product = product * args[i];
		}
		return product;
	},
	Avg: function() {
		var args = arguments;
		var avg = 0;
				for (var i = 0; i < args.length; i++) {
			avg += args[i];
		}
		avg = avg/args.length;
		return avg;
	}
}
