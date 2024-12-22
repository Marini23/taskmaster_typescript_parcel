import "bootstrap/dist/css/bootstrap.min.css";

const btnLoadMore: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".btn-read-more");

btnLoadMore.forEach((button: HTMLButtonElement, index) => {
  button.textContent = "Read More...";

  button.addEventListener("click", (): void => {
    const article = button.closest(".article-container") as HTMLElement;
    const content = article?.querySelector(".article-load-more") as HTMLElement;
    console.log(content);
    if (content) {
      const dynamicHeight = content.scrollHeight;
      content.style.setProperty("--dynamic-height", `${dynamicHeight}px`);
      content.classList.toggle("article-load-more-open");
      content.addEventListener(
        "animationend",
        () => {
          content.style.removeProperty("--dynamic-height");
        },
        { once: true }
      );
      button.textContent = content.classList.contains("article-load-more-open")
        ? "Read Less..."
        : "Read More...";
    }
  });
});
