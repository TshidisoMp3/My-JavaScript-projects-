// Get all the HTML elements
const taskInput = document.getElementById('taskInput')
const taskBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')

// The function to add a new task

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please Enter a task');
        return;
    }

    // creating a  new list

const li = document.createElement('li')
li.textContent = taskText;

// Function of the delete btn
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
})

// append the delete btn to the li
li.appendChild(deleteBtn);

// append the li to the task list
taskList.appendChild(li);

// clear the input field
taskInput.value = '';

}

// An event listener for the add task button
taskBtn.addEventListener('click', addTask)


