document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById('create-task-form');
  let input = document.getElementById('new-task-description');
  let todos = document.getElementById('tasks');

  const addTodo=(e)=>{
    e.preventDefault()
    let todoItem = document.createElement('li')
    todoItem.innerText=input.value;
    todos.appendChild(todoItem)

  }
  form.addEventListener('submit', addTodo)

});
