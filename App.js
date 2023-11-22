document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.querySelector("button");
    const taskList = document.getElementById("taskList");

    // Add task function
    function addTask() {
        const taskText = taskInput.value;

        if (taskText.trim() !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Attach event listener to the new delete button
            const deleteButton = li.querySelector(".delete-btn");
            deleteButton.addEventListener("click", function () {
                removeTask(li);
            });
        }
    }

    // Remove task function
    function removeTask(taskElement) {
        taskList.removeChild(taskElement);
    }

    // Event listeners
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Add event listeners to existing delete buttons
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const taskElement = button.parentElement;
            removeTask(taskElement);
        });
    });
});
