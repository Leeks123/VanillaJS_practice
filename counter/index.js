const number = document.querySelector(".number");

let number_value = 0;

const decrease = () => {
  number_value -= 1;
  number.innerText = number_value;
};

const reset = () => {
  number_value = 0;
  number.innerText = number_value;
};

const increase = () => {
  number_value += 1;
  number.innerText = number_value;
};
