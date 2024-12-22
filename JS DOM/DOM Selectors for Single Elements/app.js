//Single element selector
//document.getElementById

console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

//change style
const taskTitle = document.getElementById("task-title");

taskTitle.style.backgroundColor = "green";
taskTitle.style.color = "white";
taskTitle.style.padding = "spx";

//textcontent
taskTitle.textContent = "MDS pictures";
taskTitle.innerText = "MDS pictures";
taskTitle.innerHTML = "<span style= color:red>task list</span>";

//document.querySelector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

console.log.document.querySelector("li").style.color = "red";
console.log.document.querySelector("li:last-child").style.color = "blue";
console.log.document.querySelector("li:ntn-child(2)").style.color = "orange";