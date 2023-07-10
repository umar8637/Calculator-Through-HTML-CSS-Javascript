let buttons = [
  "seven",
  "eight",
  "nine",
  "plus",
  "four",
  "five",
  "six",
  "minus",
  "one",
  "two",
  "three",
  "multiply",
  "zero",
  "divide",
];

let operatorPressed = false;

buttons.forEach((btn) => {
  let button = document.getElementById(btn);
  button.addEventListener("click", function () {    
    let buttonText = button.innerHTML;

    if (isOpeartor(buttonText) && operatorPressed) {          
      return;
    }
    let result = document.getElementById("result");
    result.innerHTML += button.innerHTML;

    operatorPressed = isOpeartor(buttonText);   
  });
});

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  result.innerHTML = "";
  operatorPressed = false;
});

let equlasTo = document.getElementById("equalsto");
equlasTo.addEventListener("click", function () {
  let expression = result.innerHTML;
  let answer = eval(expression);
  result.innerHTML = answer;
  operatorPressed = false;
});

const isOpeartor = (value) => {
  return value === "+" || value === "-" || value === "*" || value === "/";
};
