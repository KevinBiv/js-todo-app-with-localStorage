const todoInput = document.querySelector('.todo-input');
const addTodoBtn = document.querySelector('.add-todo');
const form = document.getElementsByTagName('form');

addTodoBtn.addEventListener('click', () => {
    if(todoInput.value.trim() != 0){
        let localItems = JSON.parse( localStorage.getItem('localItem'))
     if(localItems === null){
          taskList = []
 
     }else{
         taskList = localItems;
     }
     taskList.push(todoInput.value)
     localStorage.setItem('localItem', JSON.stringify(taskList)); 
 }
 
     showItem()
 })

 function showItem() {
     let localItems = JSON.parse( localStorage.getItem('localItem'))
     if(localItems === null){
          taskList = []
 
     }else{
         taskList = localItems;
     }


    let html = '';
    let todoList = document.querySelector('.todo-list');

    taskList.forEach((data, index )=> {
        

        html += `
        <div class="todoList">
        <p class="pText">${data}</p>
        <button class="deleteTask" onClick="deleteItem(${index})">x</button>
        </div>
        `
    })
    todoList.innerHTML = html;
}
showItem()

function deleteItem(index){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask(){
    localStorage.clear()
    showItem()
}