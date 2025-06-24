document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // 3. Add event listener
  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // 4. Create new task element
    const li = document.createElement("li");
    li.textContent = taskText;

    // 6. Create and append remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "removeBtn";
    li.appendChild(removeBtn);

    // 5. Toggle complete on click
    li.addEventListener("click", (e) => {
      if (e.target !== removeBtn) {
        li.classList.toggle("completed");
      }
    });

    // 6. Remove task on remove button click
    removeBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
  });

  // Optional: Add task on Enter key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
  });
});