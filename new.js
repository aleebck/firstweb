const todoList = [];

function addTodo(){
    const inputElement =  document.querySelector('.name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);
}