// //Event listerners and event object
// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("hello world"); 
// });


document.querySelector(".clear-tasks").addEventListener("click",onClick);

function onClick(e) {
    let val;
    val = e;
    val = e.target;
    val = e.target.className;
    val = e.target.classLisr;
    e.target.innerText = "MDS pictures";
    val = e.type;
    val = e.timeStamp;

    //cordinates
    val = e.clientY;
    val = e.clientX;

    Val = e.offsetY;
    val = e.offsetX;
    
    e.preventDefault();

    console.log(val);
}