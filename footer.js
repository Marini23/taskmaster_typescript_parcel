const mediaQuery = window.matchMedia("(min-width: 744px)");
function renderFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer-container");
    footer.innerHTML = ` <p>&copy; 2024 TaskMaster. All Rights Reserved.</p>
      <p>Manage your tasks efficiently and achieve more with TaskMaster.</p>`;
    footer.style.width = "100%";
    footer.style.height = "80px";
    footer.style.backgroundColor = "var(--dark-color)";
    footer.style.color = "var(--light-color)";
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    footer.style.alignItems = "center";
    footer.style.justifyContent = "center";
    footer.style.fontSize = "12px";
    footer.style.marginTop = "auto";
    document.body.append(footer);
    function applyResponsiveStyles(e) {
        if (e.matches) {
            footer.style.fontSize = "16px";
        }
        else {
            footer.style.fontSize = "12px";
        }
    }
    applyResponsiveStyles(mediaQuery);
    mediaQuery.addEventListener("change", applyResponsiveStyles);
}
document.addEventListener("DOMContentLoaded", () => {
    renderFooter();
});
//# sourceMappingURL=footer.js.map