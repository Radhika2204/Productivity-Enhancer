// Function to add a task
function addTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(); // Update the display after adding a task
  }
  
  // Function to display tasks
  function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing tasks
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => {
        deleteTask(index);
      };
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }
  
  // Function to delete a task
  function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(); // Update the display after deleting a task
  }
  
  // Event listener for the add task button
  document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task) {
      addTask(task);
      taskInput.value = ""; // Clear the input field
    }
  });
  
  // Initial display of tasks
  displayTasks();
  