function sanitize_string(str, san) {
	if (san) {
		return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	}
	return str;
}

class ContextMenu {
	constructor(items, on_menu_clicked, menu_container=document.body, sanitize_strings=true) {
		this.items = items;
		this.on_menu_clicked = on_menu_clicked;
		this.menu_container = menu_container;
		this.sanitize_strings = sanitize_strings;
		this.menu = document.createElement("div");
		this.menupos = {x: 0, y: 0};
		this.menu.classList.add("cm_menu");
		this.elements = [];
		this.elements.push(document.createElement("span"));
		for (let i = 0; i < this.items.length; i++) {
			if (items[i] === "---") {
				let tmp = document.createElement("hr");
				tmp.classList.add("cm_separator");
				this.elements.push(tmp);
			} else {
				if (this.elements[this.elements.length-1].tagName === "UL") {
					let tmp = document.createElement("li");
					tmp.addEventListener("click", (e) => {
						this.on_menu_clicked(e.target.innerHTML);
					});
					tmp.innerHTML = sanitize_string(this.items[i], this.sanitize_strings);
					tmp.classList.add("cm_item");
					this.elements[this.elements.length-1].appendChild(tmp);
				} else {
					let tmp = document.createElement("ul");
					tmp.classList.add("cm_ulist");
					this.elements.push(tmp);
					tmp = document.createElement("li");
					tmp.addEventListener("click", (e) => {
						this.on_menu_clicked(e.target.innerHTML);
					});
					tmp.innerHTML = sanitize_string(this.items[i], this.sanitize_strings);
					tmp.classList.add("cm_item");
					this.elements[this.elements.length-1].appendChild(tmp);
				}
			}
		}
		for (let i = 0; i < this.elements.length; i++) {
			this.menu.appendChild(this.elements[i]);
		}
		this.menu_container.appendChild(this.menu);
		document.addEventListener("click", (e) => {
			this.hide(e);
			console.log(this.hide);
		});
	}
	show(e) {
		e.preventDefault();
		this.menupos.x = e.pageX;
		this.menupos.y = e.pageY;
		this.menu.style.left = this.menupos.x;
		this.menu.style.top = this.menupos.y;
		this.menu.style.display = "block";
	}
	hide(e) {
		this.menu.style.display = "none";
	}
	bind(el) {
		el.addEventListener("contextmenu", (e) => {
			this.show(e);
			console.log(this.show);
		});
	}
}

