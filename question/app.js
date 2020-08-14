const btns = document.querySelectorAll(".button");
const answers = document.querySelectorAll(".answer");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    answers[index].classList.toggle("open");
    btn.innerText = "-";
  });
});
