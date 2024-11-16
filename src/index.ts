import "bootstrap/dist/css/bootstrap.min.css";

const menuOpen = document.querySelector(".navbar-toggler") as HTMLButtonElement;

const menuClose = document.querySelector(
  ".btn-menu-close"
) as HTMLButtonElement;

const menuList = document.querySelector(".menu-list") as HTMLUListElement;

menuOpen.addEventListener("click", (): void => {
  menuList.classList.toggle("active");
});

menuClose.addEventListener("click", (): void => {
  menuList.classList.toggle("active");
});
