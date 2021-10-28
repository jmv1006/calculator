
const digitButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const display = document.getElementById('inputarea');
const answerArea = document.getElementById('answer');

let value1;
let value2;
let operator;
let appendedValue;
let doneAppendedOne;
let answer;

digitButtons.forEach(button => {
  button.addEventListener('click', function () {
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
    switch(button.id) {
      case('add'):
        operate(add);
        clear();
        break;
      case('subtract'):
        operate(subtract);
        clear();
        break;
      case('divide'):
        operate(divide);
        clear();
        break;
      case('multiply'):
        operate(multiply);
        clear();
        break;
    }
    //saving a value two
    doneAppendedOne = appendedValue;
  })
});

clearButton.addEventListener('click', function () {
  clear();
  appendedValue = '';
});

equalButton.addEventListener('click', function () {
  clear();
  getAnswer();
});

function appendValue() {
  appendedValue = display.innerText + value1;
}


function sendToDisplay() {
  display.innerText = appendedValue;
}


function operate(chosenOperator) {
  switch(chosenOperator) {
    case(add):
      operator = 'add';
      break;
    case(subtract):
      operator = 'subtract';
      break;
    case (multiply):
      operator = 'multiply';
      break;
    case(divide):
      operator = 'divide';
      break;
  }
}

function getAnswer() {
  if (operator === 'add') {
    answer = (Number(doneAppendedOne) + Number(appendedValue))
    sendToDisplayAnswer();
  } else if (operator === 'subtract') {
    answer = (Number(doneAppendedOne) - Number(appendedValue))
    sendToDisplayAnswer();
  } else if (operator === 'divide') {
    answer = (Number(doneAppendedOne) / Number(appendedValue))
    sendToDisplayAnswer();
  } else if (operator === 'multiply') {
    answer = (Number(doneAppendedOne) * Number(appendedValue))
    sendToDisplayAnswer();
  }
}

function clear() {
  document.getElementById('inputarea').innerHTML = '';
  answerArea.innerHTML = '';
  value1 = '';
}

function sendToDisplayAnswer() {
  answerArea.innerText = answer;
}