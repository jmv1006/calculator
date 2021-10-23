
const buttons = document.querySelectorAll("button");
const display = document.getElementById('display');
let displayValue;

buttons.forEach(button => {
  button.addEventListener('click', function () {
    if (this.className == 'digit') {
      const numb = Number(button.innerHTML);
      displayInputArea(numb);
    }
    else {
      const operator = (button.innerHTML);
      displayInputArea(operator);
      //will need to call a function that stores chosen operator
    }
  })
});



function displayInputArea(num) {
  displayValue = num;
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