import "bootstrap/dist/css/bootstrap.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import sprite from "../src/images/symbol-defs.svg";
var Category;
(function (Category) {
    Category["Work"] = "work";
    Category["Health"] = "health";
    Category["Finance"] = "finance";
    Category["Family"] = "family";
    Category["Friends"] = "friends";
    Category["Home"] = "home";
    Category["Shopping"] = "shopping";
    Category["Travel"] = "travel";
    Category["Learning"] = "learning";
    Category["Miscellaneous"] = "miscellaneous";
})(Category || (Category = {}));
const localStorageKey = "taska-list";
let tasksList = [];
const today = document.querySelector(".wrap-data");
const tasks = document.querySelector(".tasks-list");
const filtereBtnIsCompleted = document.querySelectorAll(".btn-isCompleted");
const categoryFilter = document.getElementById("categoryFilter");
const editModal = document.querySelector(".modal-edit");
const editOverlay = document.querySelector(".overlay-edit");
const editForm = document.getElementById("editForm");
const editTitleInput = document.getElementById("editTitleInput");
const editCategorySelect = document.getElementById("editCategorySelect");
const editDescriptionText = document.getElementById("editDescriptionText");
const editDeadlineTime = document.getElementById("editDeadlineTime");
const closeEditModalBtn = document.querySelector(".btn-modal-close-edit");
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    tasksList = storedTasks.map((task) => ({
        ...task,
        deadline: new Date(task.deadline),
    }));
    renderTasks();
}
function renderTasks(filteredTasks = tasksList) {
    const markupTasks = filteredTasks
        .map((task) => {
        const formattedDeadline = new Date(task.deadline).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
        return `
      <li class="task-item" data-id="${task.id}">
      <svg width="32" height="32" class="${task.isCompleted ? "icon-completed" : "icon-notCompleted"} toggle-complete">
      <use href="${sprite}#${task.isCompleted ? "icon-check2-circle" : "icon-circle"}" class="done-icon"></use>
    </svg>
        <div class="wrap-content">
          <div class="title-container">
            <h2 class="${task.isCompleted ? "title-task-completed" : "title-task"}">${task.title}</h2>
            <div class="icons-container">
              <button type="button" class="icon-btn edit-btn">
                <svg width="30" height="30" class="svg-icon">
                  <use href="${sprite}#icon-pencil-fill"></use>
                </svg>
              </button>
              <button type="button" class="icon-btn delete-btn">
                <svg width="30" height="30" class="svg-icon">
                  <use href="${sprite}#icon-trash-fill"></use>
                </svg>
              </button>
            </div>
          </div>
          <p class="category-task">${task.category}</p>
          ${task.description
            ? `<p class="${task.isCompleted
                ? "description-task-completed"
                : "description-task"}">${task.description}</p>`
            : ""}
          <p class="dedline-data-task">${formattedDeadline}</p>
        </div>
      </li>
    `;
    })
        .join("");
    tasks.innerHTML = markupTasks;
}
// Delete task
function deleteTask(taskId) {
    tasksList = tasksList.filter((task) => task.id !== taskId);
    localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
    renderTasks();
}
// Edit tasks state "isCompleted"
function toggleTaskCompletion(taskId) {
    tasksList = tasksList.map((task) => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task);
    localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
    renderTasks();
}
tasks.addEventListener("click", (e) => {
    const target = e.target;
    // Check for delete button
    if (target.closest(".delete-btn")) {
        const taskItem = target.closest(".task-item");
        const taskId = taskItem.dataset.id;
        if (taskId) {
            deleteTask(taskId);
            Notify.info("Task deleted successfully!", {
                position: "center-center",
                timeout: 1000,
            });
        }
    }
    const toggleCompleteElement = target.closest(".toggle-complete");
    if (toggleCompleteElement) {
        const taskItem = toggleCompleteElement.closest(".task-item");
        const taskId = taskItem?.dataset.id;
        if (taskId) {
            toggleTaskCompletion(taskId);
            Notify.success("Task completion status updated!", {
                position: "center-center",
                timeout: 1000,
            });
        }
    }
    if (target.closest(".edit-btn")) {
        const taskItem = target.closest(".task-item");
        const taskId = taskItem.dataset.id;
        const taskToEdit = tasksList.find((task) => task.id === taskId);
        if (taskToEdit)
            openEditModal(taskToEdit);
    }
});
// Edit task
function openEditModal(task) {
    editModal.classList.remove("hidden");
    editOverlay.classList.remove("hidden");
    editTitleInput.value = task.title;
    editCategorySelect.value = task.category;
    editDescriptionText.value = task.description || "";
    editDeadlineTime.value = task.deadline.toISOString().slice(0, 16);
    editForm.dataset.taskId = task.id;
}
const closeEditModal = function () {
    editModal.classList.add("hidden");
    editOverlay.classList.add("hidden");
};
closeEditModalBtn.addEventListener("click", closeEditModal);
editOverlay.addEventListener("click", closeEditModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !editModal.classList.contains("hidden")) {
        closeEditModal();
    }
});
editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskId = editForm.dataset.taskId;
    const editedTaskIndex = tasksList.findIndex((task) => task.id === taskId);
    if (editedTaskIndex !== -1) {
        tasksList[editedTaskIndex] = {
            ...tasksList[editedTaskIndex],
            title: editTitleInput.value,
            category: editCategorySelect.value,
            description: editDescriptionText.value,
            deadline: new Date(editDeadlineTime.value),
        };
        localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
        renderTasks();
        Notify.success("Task updated successfully!", {
            position: "center-center",
            timeout: 1000,
        });
        editModal.classList.add("hidden");
        editOverlay.classList.add("hidden");
    }
});
// First loading page
loadTasks();
// Filter tasks
let currentCategoryFilter = "all";
let currentIsCompletedFilter = "all";
function applyFilters() {
    let filteredTasks = tasksList;
    // Apply isCompleted filter
    if (currentIsCompletedFilter === "active") {
        filteredTasks = filteredTasks.filter((task) => !task.isCompleted);
    }
    else if (currentIsCompletedFilter === "completed") {
        filteredTasks = filteredTasks.filter((task) => task.isCompleted);
    }
    // Apply category filter
    if (currentCategoryFilter !== "all") {
        filteredTasks = filteredTasks.filter((task) => task.category === currentCategoryFilter);
    }
    renderTasks(filteredTasks);
}
// Update the isCompleted filter
filtereBtnIsCompleted.forEach((button) => {
    button.addEventListener("click", function () {
        filtereBtnIsCompleted.forEach((btn) => btn.classList.remove("active-filter"));
        this.classList.add("active-filter");
        currentIsCompletedFilter = this.getAttribute("data-filter");
        applyFilters();
    });
});
// Update the category filter
categoryFilter.addEventListener("change", () => {
    currentCategoryFilter = categoryFilter.value;
    applyFilters();
});
// Get current date
const currentDate = new Date();
const currentDay = currentDate.getDate().toString().padStart(2, "0");
const currentMonth = currentDate.toLocaleString("en-US", { month: "long" });
const currentYear = currentDate.getFullYear();
today.innerHTML = ` <p class="data-day">${currentDay}</p>
        <p class="data-month">${currentMonth} <span class="data-year">${currentYear}</span></p>`;
//# sourceMappingURL=tasks.js.map