
// select element & assign them to variables
let newTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUl  = document.querySelector('#items')
let completeUl  = document.querySelector('.complete-list ul')



//functions
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let lebel = document.createElement('label')

    lebel.innerText = task;
    checkBox.type = 'checkbox'


    listItem.appendChild(checkBox)
    listItem.appendChild(lebel)

    return listItem;

}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value)
    todoUl.appendChild(listItem)
    newTask.value= ""

    //bind the new list item to the incomplate list
    bindInComplateItems(listItem, complateTask)
}

let complateTask = function(){
    let listItem =  this.parentNode;
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.className = 'delete'
    listItem.appendChild(deleteBtn)

    let checkBox = listItem.querySelector('input[type="checkbox"]')
    checkBox.remove()
    completeUl.appendChild(listItem)
    bindInComplateItems(listItem, deleteTask)

}

let deleteTask = function(){
    let listItem = this.parentNode
    let ul = listItem.parentNode;
    ul.removeChild(listItem)

}

let bindInComplateItems = function(taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkBoxClick;
}
let bindComplateItems = function(taskItem, deleteButtonClick){
    let deleteBtn = taskItem.querySelector('.delete')
    deleteBtn.onclick = deleteButtonClick;
}

for(let i = 0; i< todoUl.children.length; i++){
    bindInComplateItems(todoUl.children[i], complateTask)
}

for(let i = 0; i< completeUl.children.length; i++){
    bindComplateItems(completeUl.children[i], deleteTask)
}

form.addEventListener('submit', addTask)

