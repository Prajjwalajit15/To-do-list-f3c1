document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.querySelector('.task-list');
    const taskListImage = document.querySelector('.task-list img');
    const taskListMessage = document.querySelector('.task-list div');
    const todoCount = document.querySelector('.to-do-list .count');
    const highPriorityCount = document.querySelector('.high-priority .count');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the task name from the input field
        const taskName = document.getElementById('taskName').value;

        // Check if the task is marked as high priority (replace this with your logic)
        const isHighPriority = false;

        // Create a new task element
        const newTask = createTaskElement(taskName, isHighPriority);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Show/hide the task list image and message based on the number of tasks
        updateTaskListVisibility();

        // Update task counts after adding a task
        updateTaskCounts();

        // Clear the input field after adding the task
        document.getElementById('taskName').value = '';
    });

    // Function to create a new task element
    function createTaskElement(taskName, isHighPriority) {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('current-task');

        const checkboxContainer = document.createElement('span');
        checkboxContainer.classList.add('radio-container');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            // Handle checkbox change event
            if (checkbox.checked) {
                // Checkbox is selected
                taskContainer.classList.add('high-priority-task');
            } else {
                // Checkbox is not selected
                taskContainer.classList.remove('high-priority-task');
            }

            // Update high priority task count after changing the priority
            updateHighPriorityCount();
        });

        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = taskName;

        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('material-symbols-outlined');
        deleteIcon.textContent = 'delete';
        deleteIcon.addEventListener('click', function () {
            // Remove the task when the delete icon is clicked
            taskContainer.remove();

            // Show/hide the task list image and message based on the number of tasks
            updateTaskListVisibility();

            // Update task counts after deleting a task
            updateTaskCounts();

            // Update high priority task count after deleting a task
            updateHighPriorityCount();
        });

        // Append child elements to the task container
        checkboxContainer.appendChild(checkbox);
        taskContainer.appendChild(checkboxContainer);
        taskContainer.appendChild(taskText);
        taskContainer.appendChild(deleteIcon);

        // If the task is initially marked as high priority
        if (isHighPriority) {
            taskContainer.classList.add('high-priority-task');
        }

        return taskContainer;
    }

    // Function to show/hide the task list image and message based on the number of tasks
    function updateTaskListVisibility() {
        const tasks = document.querySelectorAll('.current-task');

        if (tasks.length > 0) {
            taskListImage.style.display = 'none';
            taskListMessage.style.display = 'none';
        } else {
            taskListImage.style.display = 'block';
            taskListMessage.style.display = 'block';
        }
    }

    // Function to update task counts
    function updateTaskCounts() {
        const todoTasks = document.querySelectorAll('.current-task:not(.high-priority-task)').length;
    
        // Updating the displayed todo task count
        todoCount.textContent = todoTasks;
    }

    // Function to update high priority task count
    function updateHighPriorityCount() {
        const highPriorityTasks = document.querySelectorAll('.high-priority-task').length;

        // Updating the displayed high priority task count
        highPriorityCount.textContent = highPriorityTasks;
    }
});







