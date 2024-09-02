
const newTaskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.querySelector('.tasklist');


addTaskBtn.addEventListener('click', addTask);


function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskitem');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('taskcheckbox');
        checkbox.addEventListener('change', toggleTaskStatus);

        const taskName = document.createElement('span');
        taskName.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deletebtn');
        deleteButton.addEventListener('click', deleteTask);
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskName);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        newTaskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function toggleTaskStatus(event) {
    const checkbox = event.target;
    const taskItem = checkbox.closest('.taskitem');
    if (checkbox.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }
}

function deleteTask(event) {
    const deleteButton = event.target;
    const taskItem = deleteButton.closest('.taskitem');
    taskItem.remove();
}
