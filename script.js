const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const todoList = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function createElement(name, className, data) {
  const elem = document.createElement(name);
  elem.classList.add(className);
  data ? (elem.innerHTML = data) : "";

  return elem;
}

function countCheckboxes(uncheckedCountElement) {
  const checkedBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  uncheckedCountElement.innerHTML =
    Number(itemCountSpan.innerHTML) - checkedBoxes;
}

function newTodo() {
  const todo = prompt("type details");
  if (todo) {
    const todoSpan = createElement("span", classNames.TODO_TEXT, todo);

    const todoCheckbox = createElement("INPUT", classNames.TODO_CHECKBOX);
    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.addEventListener("click", function (e) {
      countCheckboxes(uncheckedCountSpan);
    });
    itemCountSpan.innerHTML =
      document.querySelectorAll('input[type="checkbox"]').length + 1;

    const delButton = createElement("BUTTON", classNames.TODO_DELETE, "Delete");
    delButton.onclick = function (e) {
      todoList.removeChild(li);
      itemCountSpan.innerHTML = document.querySelectorAll(
        'input[type="checkbox"]'
      ).length;
      countCheckboxes(uncheckedCountSpan);
    };
    countCheckboxes(uncheckedCountSpan);
    const li = createElement("li", classNames.TODO_ITEM);
    todoList.appendChild(li);
    li.append(todoCheckbox, todoSpan, delButton);
  }
}
