
const buttons = document.querySelectorAll("button");
const display = document.getElementById('inputarea');

let num1;
let num2;
let ops;


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
    displayValue = display.innerHTML;
    keyValue = button.innerText;

    if (button.innerText == 'Clear') {
      clear();
    } else if (displayValue == 0) {
      num1 = display.textContent = keyValue;
    } else {
      num1 = display.textContent = displayValue + keyValue;
    }

    //operator stuff
    switch (keyValue) {
      case ('+'):
        console.log('add');
        break;
      case ('-'):
        console.log('subtract');
        break;
      case ('x'):
        console.log('multiply');
        break;
      case ('/'):
        console.log('divide');
        break;
      case ('='):
        console.log('equal')
        break;
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
  num1 = '';
}

/*
function operate(a, b) {
  console.log(getOperatorChoice[op](displayValue1, displayvalue2));
}

operate();
*/



