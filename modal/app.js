const body = document.querySelector("body");
const modalopen = document.querySelector("button");
const modal = document.querySelector(".modal");

const modal_close = document.querySelector(".modal_close");

modalopen.addEventListener("click", () => {
  modal.style.display = "block";
});

modal_close.addEventListener("click", () => {
  modal.style.display = "none";
});
