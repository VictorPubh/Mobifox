var $ = {
	Import: function(src) {
		var script 	= document.createElement("script");
		script.type = "text/javascript";
		script.src	= src;
		document.getElementsByTagName("body")[0].appendChild(script);
	}
}
