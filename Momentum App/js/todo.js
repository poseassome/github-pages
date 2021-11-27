const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; // let : 재선언 x, 재할당 o

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON.stringify() : 문자로 바꿔줌
  // JSON.parse() : 살아있는 array로 만들어줌
};

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.display = "inline-block"
  const button = document.createElement("button");
  button.innerText = "❌"
  button.style.border = "none";
  button.style.background = "transparent";
  button.style.marginLeft = "20px"
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

};

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);  // forEach() : 각 아이템들에 대해 각각 함수 실행
};

// .filter() : foreach()와 비슷하게 변수를 받아서 함수를 실행하지만, array를 유지하고 싶으면 결과는 무조건 true를 도출한다. 
// (foreach는 함수를 한 번만 실행하고 그 안에서 변수만 바꼈다면, filter는 함수 한 번에 변수하나로 함수를 array 갯수만큼 실행한다.)

