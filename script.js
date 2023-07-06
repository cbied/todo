var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var groceryList = document.querySelectorAll("ul");
var buttons = document.getElementsByClassName('btn');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li)
	ul.appendChild(btn);
	btn.classList.add('btn')
	li.classList.add('list-item')
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}

}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneListItem(event) {
	var currentListItem = event.target
	if(event.target.localName === 'li') {
		currentListItem.classList.toggle('done');
	}
}

function deleteItem(event) {
	if(event.target.classList.contains('btn')) {
		var currentButton = event.target
		var previousListItem = event.target.previousSibling
		currentButton.remove()
		previousListItem.remove()
	}
	
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
groceryList[0].addEventListener('click', doneListItem);
groceryList[0].addEventListener('click', deleteItem);




