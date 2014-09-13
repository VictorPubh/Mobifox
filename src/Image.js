var Image = {
	Load: function(url) {
		var atb = document.createElement("img");
		atb.setAttribute("src", url);
		document.getElementsByTagName("body")[0].appendChild(atb);
	}
}
