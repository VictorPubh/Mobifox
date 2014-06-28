var Event = {
	Click: function(e, lambda) {
		e.onclick = lambda;
	},
	KeyPress: function(e, lambda) {
		e.onkeypress = lambda;
	},
	KeyUp: function(e, lambda) {
		e.onkeyup = lambda;
	},
	MouseDown: function(e, lambda) {
		e.onmousedown = lambda;
	},
	MouseUp: function(e, lambda) {
		e.onmouseup = lambda;
	}
}