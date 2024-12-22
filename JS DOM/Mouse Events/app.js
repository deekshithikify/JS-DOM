//Mouse Events
const clearBtn = document.querySelector(".clear -tasks");
const card = document.querySelector(".card");
const title = document.querySelector("h5");

//click
clearBtn.addEventListener("click", runEvent);

//mousedown
clearBtn.addEventListener("mousedown", runEvent);

//mouseup
clearBtn.addEventListener("mouseup", runEvent);

//mouseenter
card.addEventListener("mouseenter", runEvent);

//mouseleave
card.addEventListener("mouseleave", runEvent);

//mousemove
card.addEventListener("mousemove", runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    title.textContent = `MouseX :${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},70)`;
    e.preventDefault();
}