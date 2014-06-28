Log = {
	Error: function(message) {
		console.error(message);
	},
	Message: function(message, title = undefined) {
		console.log(message, title);
	},
	Warn: function(message) {
		console.warn(message);
	}
}