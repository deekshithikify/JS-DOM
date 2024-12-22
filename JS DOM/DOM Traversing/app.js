//DOM Traversing
const list = document.querySelector("ul.collection");
const listItems = document.querySelector("li.collection-item");

let val;
val = list;

// // child nodes
val = list.childNodes;
val = list.children;

val = list.children[1].textContent = "hello";
val = list.children[2].children;

val = list.firstChild;
val = list.firstElementChild;

// // parent Node
val = listItems.parentNode;
val = listItems.parentElement;
val = listItems.parentElement.parentElement;

// //siblings
val = listItems.nextSibling;
val = listItems.nextElementSibling;
val = listItems.previousSibling;
val = listItems.previousElementSibling;

console.log(val);