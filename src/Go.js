var Go = {
	Maybe: function(value)
	{
		var Nothing = {}
		var Just = function(value) {
			return function() {
				return value
			}
		}
		if (typeof value === 'undefined' || value === null)
			return Nothing
		return Just(value)
	},
	Unless: function(operation, situation)
	{
		if (operation)
			return false
		else
			situation()
			return true
	}
}