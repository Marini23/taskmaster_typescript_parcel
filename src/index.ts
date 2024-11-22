import "bootstrap/dist/css/bootstrap.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { nanoid } from "nanoid";

// enum Category {
//   Work = "work",
//   Health = "health",
//   Finance = "finance",
//   Family = "family",
//   Friends = "friends",
//   Home = "home",
//   Shopping = "shopping",
//   Travel = "travel",
//   Learning = "learning",
//   Miscellaneous = "miscellaneous",
// }

// type Task = {
//   id: string;
//   title: string;
//   category: Category;
//   isCompleted: boolean;
//   description?: string;
//   deadline: Date;
// };

// const localStorageKey: string = "taska-list";

// const menuOpen = document.querySelector(".navbar-toggler") as HTMLButtonElement;
// const menuClose = document.querySelector(
//   ".btn-menu-close"
// ) as HTMLButtonElement;
// const menuList = document.querySelector(".menu-list") as HTMLUListElement;
// const modal = document.querySelector(".modal-content") as HTMLElement;
// const overlay = document.querySelector(".overlay") as HTMLDivElement;
// const openModalBtn = document.querySelector(
//   ".btn-modal-open"
// ) as HTMLButtonElement;
// const closeModalBtn = document.querySelector(
//   ".btn-modal-close"
// ) as HTMLButtonElement;
// const form = document.querySelector("form") as HTMLFormElement;

// // Burger list menu
// menuOpen.addEventListener("click", (): void => {
//   menuList.classList.toggle("active");
// });

// menuClose.addEventListener("click", (): void => {
//   menuList.classList.toggle("active");
// });

// // Modal add task

// const openModal = function (): void {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// openModalBtn.addEventListener("click", openModal);

// const closeModal = function (): void {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// closeModalBtn.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e): void {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// // Add new task

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const titleTask = (document.getElementById("titleInput") as HTMLInputElement)
//     .value;
//   const categoryTask = (
//     document.getElementById("categorySelect") as HTMLSelectElement
//   ).value;
//   const descriptionTask = (
//     document.getElementById("descriptionText") as HTMLTextAreaElement
//   ).value;
//   const deadlineTask = (
//     document.getElementById("deadlineTime") as HTMLInputElement
//   ).value;

//   if (
//     titleTask.trim() === "" ||
//     categoryTask.trim() === "" ||
//     deadlineTask === ""
//   ) {
//     Notify.failure("Please fill in all required fields.", {
//       position: "center-center",
//       timeout: 1000,
//     });
//   } else {
//     const newTask: Task = {
//       id: nanoid(),
//       title: titleTask.charAt(0).toUpperCase() + titleTask.slice(1),
//       category: categoryTask as Category,
//       isCompleted: false,
//       deadline: new Date(deadlineTask),
//     };

//     if (descriptionTask.trim() !== "") {
//       newTask.description = descriptionTask;
//     }

//     const tasksList = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
//     tasksList.push(newTask);
//     localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
//     form.reset();
//     closeModal();
//     Notify.success("Task added successfully!", {
//       position: "center-center",
//       timeout: 1000,
//     });
//   }
// });
