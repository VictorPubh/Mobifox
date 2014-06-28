var Form = {
	Head:	document.getElementsByTagName("head")[0],
	Body:	document.getElementsByTagName("body")[0],
	Add: function(obj) {
		document.getElementsByTagName("body")[0].appendChild(obj);
	},
	BackgroundColor: function(color) {
		document.getElementsByTagName("body")[0].style.backgroundColor = color
		this.BackgroundColor = color
	},
	ForegroundColor: function(color) {
		document.getElementsByTagName("body")[0].style.color = color
		this.ForegroundColor = color
	},
	BackgroundImage: function(image) {
		this.BackgroundImage = image
		document.body.style.backgroundImage="url('" + image + "')";
	}
}
