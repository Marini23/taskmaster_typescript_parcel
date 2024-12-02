import "bootstrap/dist/css/bootstrap.min.css";

const btnLoadMore: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".btn-read-more");

// btnLoadMore.forEach((button: HTMLButtonElement) => {
//   button.textContent = "Read More...";
//   console.log("1");
//   button.addEventListener("click", (): void => {
//     const article = button.closest(".article-container") as HTMLElement;
//     const content = article?.querySelector(".article-load-more") as HTMLElement;

//     if (content) {
//       content.classList.toggle("open");
//       button.textContent = content.classList.contains("open")
//         ? "Read Less..."
//         : "Read More...";
//     }
//   });
// });

btnLoadMore.forEach((button: HTMLButtonElement) => {
  button.textContent = "Read More...";
  button.addEventListener("click", (): void => {
    const article = button.closest(".article-container") as HTMLElement;
    const content = article?.querySelector(".article-load-more") as HTMLElement;
    console.log("2");
    console.log(content);

    if (
      content.classList.contains("opening") ||
      content.classList.contains("open")
    ) {
      // If open, start closing animation
      content.classList.remove("opening");
      content.classList.add("closing");

      // Remove the closing class after the animation ends
      content.addEventListener(
        "animationend",
        () => {
          content.classList.remove("closing");
          content.classList.remove("open"); // Fully hide
        },
        { once: true }
      );
    } else {
      // If closed, calculate height and set the CSS variable
      // content.style.setProperty("--full-height", content.scrollHeight + "px");
      // console.log(content);
      // Start opening animation
      content.classList.remove("closing");
      content.classList.add("opening");

      // Add 'open' class when animation ends
      content.addEventListener(
        "animationend",
        () => {
          content.classList.remove("opening");
          content.classList.add("open");
        },
        { once: true }
      );
    }
  });
});
