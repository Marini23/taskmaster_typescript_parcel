import "bootstrap/dist/css/bootstrap.min.css";

const modal: HTMLElement = document.querySelector(
  ".modal-content"
) as HTMLElement;
const overlay: HTMLDivElement = document.querySelector(
  ".overlay"
) as HTMLDivElement;
const openModalBtn: HTMLButtonElement = document.querySelector(
  ".btn-modal-open"
) as HTMLButtonElement;
// const closeModalBtn =
//   document.querySelector<HTMLButtonElement>(".btn-modal-close");

console.log(modal);
const openModal = function (): void {
  console.log("open");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
