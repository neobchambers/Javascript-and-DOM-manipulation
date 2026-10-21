let tasks = [];

const taskTitleInput = document.getElementById("taskTitle");
const taskDescInput = document.getElementById("taskDesc");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskListContainer = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const title = taskTitleInput.value.trim();
  const description = taskDescInput.value.trim();

  if (title === "") {
    alert("Please enter a title!");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: title,
    description: description,
    completed: false
  };

  tasks.push(newTask);
  
  taskTitleInput.value = "";
  taskDescInput.value = "";

  renderTasks();
});

function toggleTaskStatus(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  taskListContainer.innerHTML = "";

  tasks.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.className = `task-item ${task.completed ? "completed" : ""}`;

    taskCard.innerHTML = `
      <div style="flex: 1; cursor: pointer;" onclick="toggleTaskStatus(${task.id})">
        <strong>${task.title}</strong>
        ${task.description ? `<p style="font-size: 0.9em; color: #666; margin-top: 4px;">${task.description}</p>` : ""}
      </div>
      <div class="task-actions">
        <button onclick="deleteTask(${task.id})">✖</button>
      </div>
    `;

    taskListContainer.appendChild(taskCard);
  });
}