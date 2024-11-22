import "bootstrap/dist/css/bootstrap.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { nanoid } from "nanoid";

import logo1x from "../src/images/logo_TaskMaster_1x.jpg";
import logo2x from "../src/images/logo_TaskMaster_2x.jpg";
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

function renderHeader(): void {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `<nav class="navbar navbar-expand-xl">
        <div class="container-fluid">
          <a
            class="navbar-brand logo-container"
            href="index.html"
            aria-label="TaskMaster Logo"
          >
            <img
              srcset="${logo1x} 1x, ${logo2x} 2x"
              src="${logo1x}"
              alt="logo"
              width="180"
              height="24"
              class="d-inline-block align-text-top logo-image"
            />
            <span class="logo-text">TaskMaster</span>
          </a>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="index.html">Home</a>
                <a class="nav-link" href="tasks.html">Tasks</a>
                <a class="nav-link" href="contacts.html">Contacts</a>
              </div>
              <button type="button" class="add-task-button btn-modal-open">
                Add task
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="menu-list">
        <button type="button" class="btn-menu-close" aria-label="Close">
          <svg width="48" height="48" class="icon-close">
            <use href="${sprite}#icon-x"></use>
          </svg>
        </button>
        <ul class="list-items">
          <li><a class="menu-item" href="index.html">Home</a></li>
          <li><a class="menu-item" href="tasks.html">Tasks</a></li>
          <li><a class="menu-item" href="contacts.html">Contacts</a></li>
        </ul>
      </div>
      <!-- Modal add task -->
      <section class="modal-content hidden">
        <div class="modal-title-container">
          <h3>Add task</h3>
          <button
            type="button"
            class="btn-close btn-modal-close"
            aria-label="Close"
          ></button>
        </div>
        <form class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="titleInput" class="form-label">Title*</label>
            <input type="text" class="form-control" id="titleInput" required />
            <div class="invalid-feedback">Please create a title.</div>
          </div>
          <div class="mb-3">
            <label for="categorySelect" class="form-label">Category*</label>
            <select
              class="form-select modal-select"
              aria-label="Select categories"
              id="categorySelect"
              required
            >
              <option value="" selected></option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Home">Home</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="Learning">Learning</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
            <div class="invalid-feedback">Please choose a category.</div>
          </div>
          <div class="mb-3">
            <label for="descriptionText" class="form-label"
              >Description (optional)</label
            >
            <textarea type="text" class="form-control" id="descriptionText" />
          </div>
          <div class="mb-3">
            <label for="deadlineTime" class="form-label">Deadline</label>
            <input
              type="datetime-local"
              class="form-control"
              id="deadlineTime"
              required
            />
            <div class="invalid-feedback">Please choose deadline time.</div>
          </div>
          <button class="btn btn-primary btn-submit-modal" type="submit">
            Submit
          </button>
        </form>
      </section>
      <div class="overlay hidden"></div>`;
  document.body.prepend(header);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();

  const menuOpen = document.querySelector(
    ".navbar-toggler"
  ) as HTMLButtonElement;
  const menuClose = document.querySelector(
    ".btn-menu-close"
  ) as HTMLButtonElement;
  const menuList = document.querySelector(".menu-list") as HTMLUListElement;
  const modal = document.querySelector(".modal-content") as HTMLElement;
  const overlay = document.querySelector(".overlay") as HTMLDivElement;
  const openModalBtn = document.querySelector(
    ".btn-modal-open"
  ) as HTMLButtonElement;
  const closeModalBtn = document.querySelector(
    ".btn-modal-close"
  ) as HTMLButtonElement;
  const form = document.querySelector("form") as HTMLFormElement;

  // Burger list menu
  menuOpen.addEventListener("click", (): void => {
    menuList.classList.toggle("active");
  });

  menuClose.addEventListener("click", (): void => {
    menuList.classList.toggle("active");
  });

  // Modal add task

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

  console.log(overlay);
  //   if (modal && overlay && openModalBtn) {
  //     console.log("hjj");
  //     openModalBtn.addEventListener("click", openModal);
  //     closeModalBtn.addEventListener("click", closeModal);
  //     overlay.addEventListener("click", closeModal);
  //     document.addEventListener("keydown", function (e): void {
  //       if (e.key === "Escape" && !modal.classList.contains("hidden")) {
  //         closeModal();
  //       }
  //     });
  //   }
  // Add new task

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleTask = (
      document.getElementById("titleInput") as HTMLInputElement
    ).value;
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

      const tasksList = JSON.parse(
        localStorage.getItem(localStorageKey) || "[]"
      );
      tasksList.push(newTask);
      localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
      form.reset();
      closeModal();
      Notify.success("Task added successfully!", {
        position: "center-center",
        timeout: 1000,
      });
    }
  });
});
