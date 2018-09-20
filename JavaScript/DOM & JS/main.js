let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let inputForm = document.getElementById("item");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", deleteItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(event) {
  event.preventDefault();
  // Get input value
  let newItem = document.getElementById("item").value;
  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create delete button element
  let deleteButton = document.createElement("button");
  // Add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteButton.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteButton);

  itemList.appendChild(li);
  item.value = "";
}

// Delete item
function deleteItem(event) {
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(event) {
  // Convert to lowercase
  let text = event.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName("li");
  // Convert to array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}