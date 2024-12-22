//Replace and Remove items

//create element
const newHeading = document.createElement("h2");

//add id
newHeading.id = "task-title";
console.log(newHeading);

//create text node
newHeading.appendChild(document.createTextNode("MDS pictures"));

//get the old heading
const oldHeading = document.getElementById("task-title");

//get parent
const cardAction = document.querySelector(".card-action");

//replace
cardAction.replaceChild(newHeading, oldHeading);

//remove
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
lis[0].remove();

//remove child
list.removeChild(lis[1]);
console.log(lis);