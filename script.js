
const buttons = document.querySelectorAll("button");
const display = document.getElementById('display');


buttons.forEach(button => {
  button.addEventListener('click', function () {
    const numb = Number(button.innerHTML);
    displayInputArea(numb);
  })
});



function displayInputArea(num) {
  let displayValue = num;
  document.getElementById('inputarea').innerHTML = displayValue;
}

function add(a, b) {
  console.log(a + b)
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}



function operate(a, b) {
  add(5, 7);
  subtract(25, 5);
  multiply(10, 12);
  divide(120, 11);
}

operate();