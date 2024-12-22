 // //EVENT BUBBLING

document.querySelector(".card-title").addEventListener("click",function(){
    console.log("card-title");
});

document.querySelector(".card-content").addEventListener("click",function(){
    console.log("card-content");
});

document.querySelector(".card").addEventListener("click", function(){
    console.log("card");
});

document.querySelector(".col").addEventListener("click", function(){
    console.log("col");
});


// //EVENT DELEGATION

//Without delegation
const delItem = document.querySelector(".delete-item");
delItem,addEventListener("click", removeElement);

//body
document.body.addEventListener("click", removeElement);

function removeElement(e) {
    console.log("Item deleted");
    console.log(e);
    console.log(e.target);
    if (e.target.parentElement.classList.contains("delete-item")) {
        e.target.parentElement.parentElement.remove();
    }
}

