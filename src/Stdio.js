var Stdio = {
	Println: function(arg) {
		var s = document.createElement("span")
		s.innerHTML = arg.toString() + "<br />"
		document.getElementsByTagName("body")[0].appendChild(s)
	},
	Print: function(arg) {
		var s = document.createElement("span")
		s.innerHTML = arg
		document.getElementsByTagName("body")[0].appendChild(s)
	}
}
