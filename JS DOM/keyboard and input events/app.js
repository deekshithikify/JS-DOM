// keyboard and input events
const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const title = document.querySelector("h5");



// // form event
//form.addEventListener("submit", runEvent);
taskInput.value ="";
taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent);

function runEvent(e) {
    console.log(`EVENT type: ${e.type}`);

    console.log(taskInput.value);
    title.textContent = taskInput.value;
    //e.preventDefault();
}

