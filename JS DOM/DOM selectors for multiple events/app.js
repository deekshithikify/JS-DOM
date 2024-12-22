//selecting multiple elements
//document.getElementsByClassName

const items = document.getElementsByClassName("collection-item");
console.log(items);

items[0].computedStyleMap.color = "red";
items[3].textContent = "hello";


// // getElementsByTagName
const items = document.getElementsByTagName("li");
console.log(items);

items[0].style.color = "blue";
items[3].textContent = "hello";


// //document.querySelectorALL()//Nodelist->no need to convert to an array
const lis = document.querySelectorAll("li.collection-item");
console.log(lis);

lis.forEach(function (li) {
    li.textContent = "hello";
});


const liodd = document.querySelectorAll("li:nth-child(odd)");

console.log(liodd);
liodd.forEach(function (li) {
    li.style.backgroundColor = "#ccc";
});
