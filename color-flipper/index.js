const body = document.querySelector("body");
const value = document.querySelector(".value");

const randomNumber = () => {
  return Math.floor(Math.random() * 255);
};
const randomColor = () => {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

const onClick = () => {
  let color = randomColor();
  value.innerText = color;
  value.style.color = color;
  body.style.backgroundColor = color;
};
