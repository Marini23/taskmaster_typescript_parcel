import "bootstrap/dist/css/bootstrap.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { nanoid } from "nanoid";
import sprite from "../src/images/symbol-defs.svg";

enum Category {
  Work = "work",
  Health = "health",
  Finance = "finance",
  Family = "family",
  Friends = "friends",
  Home = "home",
  Shopping = "shopping",
  Travel = "travel",
  Learning = "learning",
  Miscellaneous = "miscellaneous",
}

type FilterStateIsCompleted = "all" | "active" | "completed";

type Task = {
  id: string;
  title: string;
  category: Category;
  isCompleted: boolean;
  description?: string;
  deadline: Date;
};

const localStorageKey: string = "taska-list";

let tasksList: Task[] = [];

const today = document.querySelector(".wrap-data") as HTMLDivElement;
const modal = document.querySelector(".modal-content") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;
const openModalBtn = document.querySelector(
  ".btn-modal-open"
) as HTMLButtonElement;
const closeModalBtn = document.querySelector(
  ".btn-modal-close"
) as HTMLButtonElement;

const filtereBtnIsCompleted: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".btn-isCompleted");

const categoryFilter = document.getElementById(
  "categoryFilter"
) as HTMLSelectElement;

const form = document.querySelector("form") as HTMLFormElement;

const tasks = document.querySelector(".tasks-list") as HTMLUListElement;

const editModal = document.querySelector(".modal-edit") as HTMLElement;
const editOverlay = document.querySelector(".overlay-edit") as HTMLDivElement;
const editForm = document.getElementById("editForm") as HTMLFormElement;
const editTitleInput = document.getElementById(
  "editTitleInput"
) as HTMLInputElement;
const editCategorySelect = document.getElementById(
  "editCategorySelect"
) as HTMLSelectElement;
const editDescriptionText = document.getElementById(
  "editDescriptionText"
) as HTMLTextAreaElement;
const editDeadlineTime = document.getElementById(
  "editDeadlineTime"
) as HTMLInputElement;
const closeEditModalBtn = document.querySelector(
  ".btn-modal-close-edit"
) as HTMLButtonElement;

function loadTasks(): void {
  const storedTasks = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  tasksList = storedTasks.map((task: Task) => ({
    ...task,
    deadline: new Date(task.deadline),
  }));
  renderTasks();
}

function renderTasks(filteredTasks: Task[] = tasksList): void {
  const markupTasks = filteredTasks
    .map((task) => {
      const formattedDeadline = new Date(task.deadline).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      );

      return `
      <li class="task-item" data-id="${task.id}">
      <svg width="32" height="32" class="${
        task.isCompleted ? "icon-completed" : "icon-notCompleted"
      } toggle-complete">
      <use href="${sprite}#${
        task.isCompleted ? "icon-check2-circle" : "icon-circle"
      }" class="done-icon"></use>
    </svg>
        <div class="wrap-content">
          <div class="title-container">
            <h2 class="${
              task.isCompleted ? "title-task-completed" : "title-task"
            }">${task.title}</h2>
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
          ${
            task.description
              ? `<p class="${
                  task.isCompleted
                    ? "description-task-completed"
                    : "description-task"
                }">${task.description}</p>`
              : ""
          }
          <p class="dedline-data-task">${formattedDeadline}</p>
        </div>
      </li>
    `;
    })
    .join("");

  tasks.innerHTML = markupTasks;
}

// Modal add button

const openModal = function (): void {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function (): void {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e): void {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Add new task

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleTask = (document.getElementById("titleInput") as HTMLInputElement)
    .value;
  const categoryTask = (
    document.getElementById("categorySelect") as HTMLSelectElement
  ).value;
  const descriptionTask = (
    document.getElementById("descriptionText") as HTMLTextAreaElement
  ).value;
  const deadlineTask = (
    document.getElementById("deadlineTime") as HTMLInputElement
  ).value;

  if (
    titleTask.trim() === "" ||
    categoryTask.trim() === "" ||
    deadlineTask === ""
  ) {
    Notify.failure("Please fill in all required fields.", {
      position: "center-center",
      timeout: 1000,
    });
  } else {
    const newTask: Task = {
      id: nanoid(),
      title: titleTask.charAt(0).toUpperCase() + titleTask.slice(1),
      category: categoryTask as Category,
      isCompleted: false,
      deadline: new Date(deadlineTask),
    };

    if (descriptionTask.trim() !== "") {
      newTask.description = descriptionTask;
    }

    tasksList.push(newTask);
    localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
    renderTasks();
    form.reset();
    closeModal();
    Notify.success("Task added successfully!", {
      position: "center-center",
      timeout: 1000,
    });
  }
});

// Delete task
function deleteTask(taskId: string): void {
  tasksList = tasksList.filter((task) => task.id !== taskId);
  localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
  renderTasks();
}

// Edit tasks state "isCompleted"

function toggleTaskCompletion(taskId: string): void {
  tasksList = tasksList.map((task) =>
    task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
  );
  localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
  renderTasks();
}

tasks.addEventListener("click", (e): void => {
  const target = e.target as HTMLElement;

  // Check for delete button
  if (target.closest(".delete-btn")) {
    const taskItem = target.closest(".task-item") as HTMLLIElement;
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
    const taskItem = toggleCompleteElement.closest(
      ".task-item"
    ) as HTMLLIElement;
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
    const taskItem = target.closest(".task-item") as HTMLLIElement;
    const taskId = taskItem.dataset.id;
    const taskToEdit = tasksList.find((task) => task.id === taskId);
    if (taskToEdit) openEditModal(taskToEdit);
  }
});

// Edit task

function openEditModal(task: Task): void {
  editModal.classList.remove("hidden");
  editOverlay.classList.remove("hidden");
  editTitleInput.value = task.title;
  editCategorySelect.value = task.category;
  editDescriptionText.value = task.description || "";
  editDeadlineTime.value = task.deadline.toISOString().slice(0, 16);
  editForm.dataset.taskId = task.id;
}

const closeEditModal = function (): void {
  editModal.classList.add("hidden");
  editOverlay.classList.add("hidden");
};

closeEditModalBtn.addEventListener("click", closeEditModal);

editOverlay.addEventListener("click", closeEditModal);

document.addEventListener("keydown", function (e): void {
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
      category: editCategorySelect.value as Category,
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

let currentCategoryFilter: Category | "all" = "all";
let currentIsCompletedFilter: FilterStateIsCompleted = "all";

function applyFilters(): void {
  let filteredTasks: Task[] = tasksList;
  // Apply isCompleted filter
  if (currentIsCompletedFilter === "active") {
    filteredTasks = filteredTasks.filter((task) => !task.isCompleted);
  } else if (currentIsCompletedFilter === "completed") {
    filteredTasks = filteredTasks.filter((task) => task.isCompleted);
  }

  // Apply category filter
  if (currentCategoryFilter !== "all") {
    filteredTasks = filteredTasks.filter(
      (task) => task.category === currentCategoryFilter
    );
  }

  renderTasks(filteredTasks);
}

// Update the isCompleted filter
filtereBtnIsCompleted.forEach((button) => {
  button.addEventListener("click", function () {
    filtereBtnIsCompleted.forEach((btn) =>
      btn.classList.remove("active-filter")
    );
    this.classList.add("active-filter");

    currentIsCompletedFilter = this.getAttribute(
      "data-filter"
    ) as FilterStateIsCompleted;
    applyFilters();
  });
});

// Update the category filter
categoryFilter.addEventListener("change", (): void => {
  currentCategoryFilter = categoryFilter.value as Category | "all";
  applyFilters();
});

// Get current date

const currentDate = new Date();
const currentDay = currentDate.getDate().toString().padStart(2, "0");
const currentMonth = currentDate.toLocaleString("en-US", { month: "long" });
const currentYear = currentDate.getFullYear();

today.innerHTML = ` <p class="data-day">${currentDay}</p>
        <p class="data-month">${currentMonth} <span class="data-year">${currentYear}</span></p>`;
