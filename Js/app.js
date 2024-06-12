// Toggle sidebar
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const navBtn = document.querySelector("#nav-btn");

navBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("show-sidebar");
});

// Still Navbar
const navBar = document.querySelector("#nav");

window.addEventListener("scroll", (e) => {
  const navHeight = navBar.getBoundingClientRect().height;
  if (window.scrollY > navHeight) navBar.classList.add("still-nav");
  else navBar.classList.remove("still-nav");
});
