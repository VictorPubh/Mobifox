var Style = {
	Load: function(file) {
		var style = document.createElement("link");
		style.type = "text/css";
		style.setAttribute("rel", "stylesheet");
		style.setAttribute("href", file);
		document.getElementsByTagName("body")[0].appendChild(style);
	}
}