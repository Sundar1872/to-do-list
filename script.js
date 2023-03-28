function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    taskList.appendChild(newTask);

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = function() {
        taskList.removeChild(newTask);
    };
    newTask.appendChild(removeButton);

    taskInput.value = "";
}
