import { Notyf } from "notyf";
import "bootstrap/dist/css/bootstrap.min.css";

const notyf = new Notyf();

enum Category {
  Work,
  Health,
  Finance,
  Family,
  Friends,
  Home,
  Shopping,
  Travel,
  Learning,
  Miscellaneous,
}

type Task = {
  id: string;
  title: string;
  category: Category;
  isCompleted: boolean;
  description: string;
  deadline: Date;
};

let tasks: Task[] = [];

const modal = document.querySelector(".modal-content") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;
const openModalBtn = document.querySelector(
  ".btn-modal-open"
) as HTMLButtonElement;
const closeModalBtn = document.querySelector(
  ".btn-modal-close"
) as HTMLButtonElement;

const form = document.querySelector("form") as HTMLFormElement;

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
});
