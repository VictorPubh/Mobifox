var Component = {
	Button: function(_text) {
		var button = {
			Node: document.createElement('button'),
			Text: function(txt) {
				this.Node.innerHTML = txt
				this.Text = txt
			},
			Type: function(type) {
				this.Node.className = type
				this.Type = type
			},
			Enabled: function(bool) {
				if (!bool) {
					this.Node.setAttribute('disabled', 'disabled')
					this.Enabled = false
					this.Enabled = false
				}
				else
				{
					this.Node.removeAttribute('disabled')
					this.Enabled = true
					this.Enabled = true
				}
			},
			Height: function(h) {
				this.Node.style.height = h + 'px'
				this.Height = h
			},
			Rounded: function(bool) {
				if(!bool) {
					this.Node.className = this.Node.className.replace(/\brounded\b/, '')
				}
				else {
					this.Node.className = this.Node.className + ' rounded'
				}
			},
			Visible: function(bool) {
				if (!bool) {
					this.Node.style.visibility = 'hidden'
					this.Visible = false
				}
				else {
					this.Node.style.visibility = 'visible'
					this.Visible = true
				}
			},
			Width: function(w) {
				this.Node.style.width = w + 'px'
				this.Width = w
			}
		}
		if (_text) { button.Text(_text) }
		return button
	},
	Label: function(text) {
		var label = {
			Node: document.createElement("label"),
			Text: function(txt) {
				this.Node.innerHTML = txt;
				this.Text = txt;
			},
			PaddingLeft: function(pix) {
				this.Node.style.paddingLeft = pix + "px";
				this.PaddingLeft = pix;
			},
			PaddingRight: function(pix) {
				this.Node.style.paddingRight = pix + "px";
				this.PaddingRight = pix;
			},
			ForeColor: function(color) {
				this.Node.style.color = color;
				this.ForeColor = color;
			},
			BackColor: function(color) {
				this.Node.style.backgroundColor = color;
				this.BackColor = color;
			}
		}
		if (text) {
			label.Text(text);
		}
		return label
	}
}