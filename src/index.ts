import "bootstrap/dist/css/bootstrap.min.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const btnLoadMore: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".btn-read-more");

btnLoadMore.forEach((button: HTMLButtonElement) => {
  button.textContent = "Read More...";
  button.addEventListener("click", (): void => {
    const article = button.closest(".article-container") as HTMLElement;
    const content = article?.querySelector(".article-load-more") as HTMLElement;

    if (content) {
      content.classList.toggle("article-load-more-open");
      button.textContent = content.classList.contains("article-load-more-open")
        ? "Read Less..."
        : "Read More...";
    }
  });
});
