
const digitButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const display = document.getElementById('inputarea');


digitButtons.forEach(button => {
  button.addEventListener('click', function () {
    console.log('clicked a number')
  })
});

operatorButtons.forEach(button => {
  button.addEventListener('click', function () {
    console.log('clicked an operator')
  })
});

clearButton.addEventListener('click', function () {
  console.log('clicked clear')
});

equalButton.addEventListener('click', function () {
  console.log('clicked equal')
});



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

function clear() {
  document.getElementById('inputarea').innerHTML = '';
  num1 = '';
}

let getOperatorChoice = {
  '+': function (a, b) { return a + b },
  '<': function (a, b) { return a < b },
  '*': function (a, b) { return a * b },
  '/': function (a, b) { return a / b },
};
let op;
//see line 57 to see how to use above functions



