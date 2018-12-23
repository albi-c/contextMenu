# contextMenu

Simple way to create custom context menus

## How to use:

HTML:
```html
<link href="contextmenu.css" type="text/css" rel="stylesheet"/>  <!-- import css -->
<script src="contextmenu.js" type="text/javascript"></script>    <!-- import JS  -->
<h1 id="h1">Hello</h1>
<br>
<p id="p">World</p>
```

JavaScript:
```javascript
let menu1 = new ContextMenu(["A", "B", "C", "---", "1", "2", "3"], (name) => {
    console.log(name);
}, document.body, false, false);
menu1.bind(document.getElementById("h1"));
let menu2 = new ContextMenu(["A", "B", "C", "---", "1", "2", "3"], (name) => {
    console.log(name);
}, document.body, false, true);
menu2.bind(document.getElementById("p"));
```

`ContextMenu(items, on_item_clicked, menu_container=document.body, escape_html_characters=true, dark_theme=false)`
