// Selecting DOM elements
const containerBefore = document.querySelector(".before");
const toggleIcon = document.querySelector(".toggle-icon");
const closeIcon = document.querySelector(".close-icon");
const menuAside = document.querySelector(".menu-aside");
const menuAsideLink = document.querySelectorAll(".menu-aside a");

// Event listener for opening the sidebar menu
toggleIcon.addEventListener("click", showSidebarMenu);

// Event listener for closing the sidebar menu
closeIcon.addEventListener("click", hideSidebarMenu);

// Function to show the sidebar menu
function showSidebarMenu() {
  containerBefore.classList.add("block");
  menuAside.classList.add("block");
  menuAsideLink.forEach((link) => {
    link.addEventListener("click", () => {
      hideSidebarMenu();
    });
  });
}

// Function to hide the sidebar menu
function hideSidebarMenu() {
  containerBefore.classList.remove("block");
  menuAside.classList.remove("block");
}
