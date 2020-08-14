const btn = document.querySelector(".btn");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav_open");
  menu.classList.toggle("open");
});
