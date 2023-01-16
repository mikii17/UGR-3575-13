function init() {
  const menubar = document.getElementById("bars");
  const closebar = document.getElementById("xmark");
  const navlist = document.getElementById("navbarSupportedContent");

  menubar.addEventListener("click", () => {
    navlist.setAttribute("data-visible", true);
    menubar.style.display = "none";
    closebar.style.display = "block";
  });

  closebar.addEventListener("click", () => {
    navlist.setAttribute("data-visible", false);
    menubar.style.display = "block";
    closebar.style.display = "none";
  });
}
document.addEventListener("DOMContentLoaded", init);
