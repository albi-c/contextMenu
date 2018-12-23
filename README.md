# contextMenu

Simple way to create custom context menus

## How to use?

HTML:
```html
<link href="contextmenu.css" type="text/css" rel="stylesheet"/>  <!-- import css -->
<script src="contextmenu.js" type="text/javascript"></script>    <!-- import JS  -->
```

JavaScript:
```javascript
let menu = new ContextMenu(["A", "B", "C", "---", "1", "2", "3"], // menu items ("---" = separator)
    (name) => {             // item click handler
			  console.log(name);
    },
    document.body, // menu container
    true);  // sanitize strings
menu.bind(document.getElementById("h1"));  // bind element
menu.bind(document.getElementById("p"));   // bind element
```
