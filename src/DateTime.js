var DateTime = {
	MaxDays: function(mm, yyyy) {
		var mDay
		if (mm == 3 || mm == 5 || mm == 8 || mm == 10) {
			mDay = 30
		} else {
			mDay = 31
			if ( mm == 1)
			{
				if (yyyy / 4 - parseInt(yyyy / 4) != 0) {
					mDay = 28
				} else {
					mDay = 29
				}
			}
		}
		return mDay
	},
	Now: {
		Day: 		(new Date).getDate(),
		Month: 		(new Date).getMonth() + 1,
		WeekDay: 	(new Date).getDay(),
		Year: 		(new Date).getFullYear(),
	},
	MonthName: 	function(mm) {
		var index = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
		var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
		for (i = 0; i <= index.length; i++) {
			if (mm == index[i]) {
				return month[i]
			}
		}
		throw new Exception.MonthOutOfRange()
	},
	WeekDayName: function (dd) {
		var index = new Array(1, 2, 3, 4, 5, 6, 7)
		var day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
		for (i = 0; i <= index.length; i++) {
			if (dd == index[i]) {
				return day[i]
			}
		}
	}
}