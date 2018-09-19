// // EXAMINE THE DOCUMENT OBJECT
// // console.dir(document);
// // console.log(document.XXX);

// // GET ELEMENT BY ID
// // let headerTitle = document.getElementById("header-title");
// // headerTitle.textContent = "Hello" this doesn't take styling into account
// // headerTitle.innerText = "Bye" this takes style of text into account
// // headerTitle.innerHTML = "<h3>Hello</h3>" adds HTML element to the variable - doesn't change it
// // headerTitle.style.borderBottom = "solid 3px #000" you can change CSS styles via this

// // GET ELEMENTS BY CLASS NAME
// // let items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // items[1].textContent = "Hello 2";
// // items[1].style.fontWeight = "bold";
// // // you have to loop through the results as this will return a collection of HTML elements, it doesn't access the class itself but the collection of all elements in that class
// // for (let i = 0; i < items.length; i++) {
// //   items[i].style.backgroundColor = "#f4f4f4";
// // }

// // GET ELEMENTS BY TAG NAME
// // let li = document.getElementsByTagName("li");
// // console.log(li);
// // li[1].textContent = "Hello 2";
// // li[1].style.fontWeight = "bold";
// // for (let i = 0; i < li.length; i++) {
// //   li[i].style.backgroundColor = "#f4f4f4";
// // }

// // QUERY SELECTOR
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";
// let input = document.querySelector("input");
// input.value = "Hello";
// let submit = document.querySelector('input[type="submit"]');
// submit.value = "Hello";
// let item = document.querySelector(".list-group-item");
// item.style.color = "red";
// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";
// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// // QUERY SELECTOR ALL
// let titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";
// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

// TRAVERSING THE DOM
// // parentNode
// let itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = "#f4f4f4";

// // parentElement
// let itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";

// childNodes & children
// console.log(itemList.childNodes);
// console.log(itemList.children);
// childNodes takes everything even line breaks into account, children only looks at child elements

// firstChild also looks for everything even whitespace
  // console.log(itemList.firstChild);
  // firstElementChild looks for first element
  // console.log(itemList.firstElementChild);
  // there are also lastChild & lastElementChild

  // nextSibling & nextElementSibling work exactly like child methods
  // same with previousSibling and previousElementSibling
  // console.log(itemList.nextElementSibling);
  // console.log(itemList.previousElementSibling);

  // createElement
  // created div
  // let newDiv = document.createElement("div");
  // added class
  // newDiv.className = "hello";
  // add id
  // newDiv.id = "bye";
  // add attribute
  // newDiv.setAttribute("title", "Hello div");
  // create a text node
  // let newDivText = document.createTextNode("Hello world!");
  // add text to div
  // newDiv.appendChild(newDivText);
  // adding element to DOM
  // let container = document.querySelector("header .container");
  // let h1 = document.querySelector("header h1");
  // container.insertBefore(newDiv, h1);

  //EVENTS
  // function buttonClick(event){
    // document.getElementById("header-title").textContent = "Changed";
    // document.querySelector("#main").style.backgroundColor = "#f4f4f4";
    // console.log(event);
    // console.log(event.target.id);
    // console.log(event.target.className);
    // let output = document.getElementById("output");
    // output.innerHTML = "<h3>" + event.target.id + "<h3>";
    // console.log(event.type);
    // console.log(event.clientX);
    // console.log(event.offsetY);
    // console.log(event.altKey);
  // }
  // let button = document.getElementById("button").addEventListener("click", buttonClick);

  // let button = document.getElementById("button");
  // let box = document.getElementById("box");
  // let itemInput = document.querySelector('input[type="text"]');
  // let form = document.querySelector("form");
  // let select = document.querySelector("select");

  // itemInput.addEventListener("keydown", runEvent);
  // itemInput.addEventListener("keypress", runEvent);

  // itemInput.addEventListener("focus", runEvent);
  // itemInput.addEventListener("blur", runEvent);

  // itemInput.addEventListener("cut", runEvent);
  // itemInput.addEventListener("paste", runEvent);

  // select.addEventListener("change", runEvent);

  // form.addEventListener("submit", runEvent);

  // function runEvent(event){
  //   console.log("EVENT TYPE: "+event.type)
  // //  output.innerHTML = "<h3>MouseX: "+event.offsetX+" </h3><h3>MouseY: "+event.offsetY+"</h3>";
  // box.style.backgroundColor = "rgb("+event.offsetX+", "+event.offsetY+", 40)";
  // document.getElementById("output").innerHTML = "<h3>"+event.target.value+"</h3>";
  // document.body.style.display = "none";
  // }

  // button.addEventListener("click", runEvent);
  // button.addEventListener("dblclick", runEvent);
  // button.addEventListener("mouseup", runEvent);

  // box.addEventListener("mouseenter", runEvent);
  // box.addEventListener("mouseleave", runEvent);
  // box.addEventListener("mouseover", runEvent);
  // box.addEventListener("mouseout", runEvent);

  // box.addEventListener("mousemove", runEvent);