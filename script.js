
const buttons = document.querySelectorAll("button");
const display = document.getElementById('display');
let displayValue1;
let displayvalue2;
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
    if (this.className == 'digit') {
      let numb = Number(button.innerHTML);
      displayInputArea(numb);
    }
    else if (this.id == 'clear') {
      clear();
    }
    else {
      const operatorSet = (button.innerHTML);
      displayInputArea(operatorSet);
      //will need to call a function that stores chosen operator ^
    }
  })
});

function displayInputArea(num) {
  displayValue1 = num;
  document.getElementById('inputarea').innerHTML = displayValue1;
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
}

/*
function operate(a, b) {
  console.log(getOperatorChoice[op](displayValue1, displayvalue2));
}

operate();
*/



