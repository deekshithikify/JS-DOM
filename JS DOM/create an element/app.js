//create an element
const li = document.createElement("li");

//add class
li.className = "collection-item";

//add id
li.id = "collection-list";

//set attribute
li.setAttribute("title", "New Item");

//text node
const list = document.querySelector("ul.collection");
list.appendChild(document.createTextNode("MDS pictures"));
const link = document.createElement("a");
link.className = "delete-item secondary-content";

//add an html icon
link.innerHTML = '<i class = "fa fa-remove"></i>';
li.appendChild(link);

console.log(li);