
const digitButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const display = document.getElementById('inputarea');

let value1;
let value2;
let operator;
let appendedValue;

digitButtons.forEach(button => {
  button.addEventListener('click', function () {
    console.log('clicked a number')
    value1 = button.innerHTML;

    if (display.innerText === '0') {
      display.innerText = value1;
    } else {
      appendValue();
      sendToDisplay();
    }
  })
});

operatorButtons.forEach(button => {
  button.addEventListener('click', function () {
    console.log('clicked an operator')
    switch(button.id) {
      case('add'):
        determineOperator(add);
        break;
      case('subtract'):
        determineOperator(subtract);
        break;
      case('divide'):
        determineOperator(divide);
        break;
      case('multiply'):
        determineOperator(multiply);
        break;
    }
  })
});

clearButton.addEventListener('click', function () {
  console.log('clicked clear')
  clear();
  appendedValue = '';
});

equalButton.addEventListener('click', function () {
  console.log('clicked equal')
});

function appendValue() {
  appendedValue = display.innerText + value1;
}

function sendToDisplay() {
  display.innerText = appendedValue;
}

function determineOperator(type) {
  switch(type) {
    case(add):
      console.log('you chose addition');
      break;
    case(subtract):
      console.log('you chose subtraction');
      break;
    case (multiply):
      console.log('you chose multiplication');
      break;
    case(divide):
      console.log('you chose division');
      break;
  }
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

function clear() {
  document.getElementById('inputarea').innerHTML = '';
  value1 = '';
}

let getOperatorChoice = {
  '+': function (a, b) { return a + b },
  '<': function (a, b) { return a < b },
  '*': function (a, b) { return a * b },
  '/': function (a, b) { return a / b },
};
let op;
//see line 57 to see how to use above functions



