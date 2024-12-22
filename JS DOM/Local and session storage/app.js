// //Local and session storage
localStorage.setItem("name", "Surya");
localStorage.setItem("age", "20");

sessionStorage.setItem("name", "gaurav");


// // remove item
localStorage.removeItem("name");

const name =localStorage.getItem("name");
console.log(name);


// // localstorage clear
document.getElementById("task-form").addEventListener("submit",addtoLocal);

function addtoLocal(e) {
    const task = document.getElementById("task").ariaValueMax;
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        task = [];
    } else {
        task = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Task saved");
    e.preventDefault();
}