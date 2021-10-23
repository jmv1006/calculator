
const buttons = document.querySelectorAll("button");
const display = document.getElementById('inputarea');
let displayValue;
let keyValue;

let getOperatorChoice = {
  '+': function (a, b) { return a + b },
  '<': function (a, b) { return a < b },
  '*': function (a, b) { return a * b },
  '/': function (a, b) { return a / b },
};
let op;
//see line 57 to see how to use above functions

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const keyValue = button.innerHTML;
    const displayValue = display.textContent;

    if (button.innerText == 'Clear') {
      clear();
    }
    else if (displayValue == 0) {
      display.textContent = keyValue
    } else {
      display.textContent = displayValue + keyValue;
    }

  });
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
}

/*
function operate(a, b) {
  console.log(getOperatorChoice[op](displayValue1, displayvalue2));
}

operate();
*/



