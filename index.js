
// let form = document.querySelector('#createTaskForm');
// form.addEventListener ('submit', handleEvent);
let main = document.querySelector('#main-content');
let form = document.querySelector("#create-task-form");
form.addEventListener('submit', handleEvent);
let todo = document.querySelector("#tasks");

let formList = document.querySelector('#new-list-form');
formList.addEventListener("submit", lister);

function taskKiller(event){
  event.target.parentNode.remove();
}

function handleEvent(event){
  event.preventDefault();

  let li = document.createElement('li');
  let input = document.querySelector("#new-task-description");
  let val = document.querySelector("#new-task-description").value;

  li.innerHTML = `${val} <button class="funny">X</button>`

  input.value = "";
  todo.append(li);

  let button = document.querySelectorAll('.funny');
  for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', taskKiller);
  }
}


function lister(event){
  event.preventDefault();
  let div = document.createElement('div');
  let input = document.querySelector("input#new-list-name");
  div.innerHTML = `<h2>${input.value}</h2><ul id="tasks"></ul>`;

  input.value = "";
  div.className = "list";
  main.append(div);

}
