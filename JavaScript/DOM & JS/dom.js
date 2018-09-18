// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.XXX);

// GET ELEMENT BY ID
// let headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "Hello" this doesn't take styling into account
// headerTitle.innerText = "Bye" this takes style of text into account
// headerTitle.innerHTML = "<h3>Hello</h3>" adds HTML element to the variable - doesn't change it
// headerTitle.style.borderBottom = "solid 3px #000" you can change CSS styles via this

// GET ELEMENTS BY CLASS NAME
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// // you have to loop through the results as this will return a collection of HTML elements, it doesn't access the class itself but the collection of all elements in that class
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// GET ELEMENTS BY TAG NAME
// let li = document.getElementsByTagName("li");
// console.log(li);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// QUERY SELECTOR
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";
let input = document.querySelector("input");
input.value = "Hello";
let submit = document.querySelector('input[type="submit"]');
submit.value = "Hello";
let item = document.querySelector(".list-group-item");
item.style.color = "red";
let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";

// QUERY SELECTOR ALL
let titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello";
let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}