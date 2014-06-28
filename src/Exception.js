var Exception = {
	NullPointer: function() {
		throw { 
		    name:        "NullPointerException", 
		    level:       "Show Stopper", 
		    message:     "Expecting value, received null", 
		    htmlMessage: "Expecting value, received null. <a href='#'>Check documentation to this error</a>.",
		    toString:    function() { return this.name + ": " + this.message; } 
		}
	},
	MonthOutOfRange: function() {
		throw {
			name: 		 "DateOutOfRangeException",
			level: 		 "Show Stopper",
			message: 	 "Date is out of range. Expects a value between 1 - 12",
			htmlMessage: "Date is out of range. Expects a value between 1 - 12. <a href='#'>Check documentation to this error</a>.",
		    toString:    function() { return this.name + ": " + this.message; } 
		}
	}
}