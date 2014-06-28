var Utils = {
	Select: function(element)
	{
		var identifier = element
		var size = identifier.length
		var firstIdentifier = element[0]
		var lastIdentifier = element[size - 1]
		if (firstIdentifier == "#") 
			identifier = "id"
		else if (firstIdentifier == ".") 
			identifier = "class"
		else if (firstIdentifier == "<" && lastIdentifier == ">")
			identifier = "tag"
		else 
			identifier = element
		switch(identifier)
		{
			case "id":
				return document.getElementById(element.substr(1))
				break
			case "class":
				return document.getElementsByClassName(element.substr(1))
				break
			case "tag":
				return document.getElementsByTagName(element.substr(1).substr(0, size - 2))
				break
			default:
				break
		}
	},
	InsideOf: function(element)
	{
		var node = this.Select(element)
		return node.innerHTML
	},
	Remove: function(element)
	{
		var el = this.Select(element)
		el.parentNode.removeChild(el)
	},
	RemoveChild: function(element)
	{
		var el = this.Select(element)
		el.innerHTML = ''
	},
	TypeOf: function(o)
	{
		return typeof o
	}
}