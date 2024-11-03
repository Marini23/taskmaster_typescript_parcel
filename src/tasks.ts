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

type Task = {
  id: string;
  title: string;
  category: Category;
  isCompleted: boolean;
  description?: string;
  deadline: Date;
};

const localStorageKey: string = "taska-list";

let tasksList: Task[] = JSON.parse(
  localStorage.getItem(localStorageKey) || "[]"
);

console.log(tasksList);

const modal = document.querySelector(".modal-content") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;
const openModalBtn = document.querySelector(
  ".btn-modal-open"
) as HTMLButtonElement;
const closeModalBtn = document.querySelector(
  ".btn-modal-close"
) as HTMLButtonElement;

const form = document.querySelector("form") as HTMLFormElement;

const tasks = document.querySelector(".tasks-list") as HTMLUListElement;

const markupTasks = tasksList
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
      <li class="task-item">
        <svg width="32" height="32" class="${
          task.isCompleted ? "icon-completed" : "icon-notCompleted"
        }">
          <use href="${sprite}#${
      task.isCompleted ? "icon-check2-circle" : "icon-circle"
    }"></use>
        </svg>
        <div class="wrap-content">
          <div class="title-container">
            <h2 class="title-task">${task.title}</h2>
            <div class="icons-container">
              <button type="button" class="icon-btn">
                <svg width="30" height="30" class="svg-icon">
                  <use href="${sprite}#icon-pencil-fill"></use>
                </svg>
              </button>
              <button type="button" class="icon-btn">
                <svg width="30" height="30" class="svg-icon">
                  <use href="${sprite}#icon-trash-fill"></use>
                </svg>
              </button>
            </div>
          </div>
          <p class="category-task">${task.category}</p>
          ${
            task.description
              ? `<p class="description-task">${task.description}</p>`
              : ""
          }
          <p class="dedline-data-task">${formattedDeadline}</p>
        </div>
      </li>
    `;
  })
  .join("");

tasks.insertAdjacentHTML("beforeend", markupTasks);

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleTask = (document.getElementById("titleInput") as HTMLInputElement)
    .value;
  console.log(titleTask);
  const categoryTask = (
    document.getElementById("categorySelect") as HTMLSelectElement
  ).value;
  console.log(categoryTask);
  const descriptionTask = (
    document.getElementById("descriptionText") as HTMLTextAreaElement
  ).value;
  console.log(descriptionTask);
  const deadlineTask = (
    document.getElementById("deadlineTime") as HTMLInputElement
  ).value;
  console.log(deadlineTask);

  if (
    titleTask.trim() === "" ||
    categoryTask.trim() === "" ||
    deadlineTask === ""
  ) {
    Notify.failure("Please fill in all required fields.", {
      position: "center-center",
      timeout: 2000,
    });
  } else {
    const newTask: Task = {
      id: nanoid(),
      title: titleTask,
      category: categoryTask as Category,
      isCompleted: false,
      deadline: new Date(deadlineTask),
    };

    if (descriptionTask.trim() !== "") {
      newTask.description = descriptionTask;
    }

    tasksList.push(newTask);
    localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
    console.log("Task added:", newTask);
    console.log("Current tasks:", tasksList);
    form.reset();
    closeModal();
  }
});
