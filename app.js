//Set numbers in zero
let number_a = 0;
let number_b = 0;

//Set operator intial value
let operator = "";

//Set initial state of decimal button
let isDecimalUsed = false;

//Set initial state of new number
let isFirstDigit = false;
let isFirstOperand = false;

//Get the input element
const display = document.getElementById("display");

//Get all number buttons
const numberButtons = document.querySelectorAll(".number");

//Attach click event listener to each number button
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    if (!isFirstDigit){
      display.value += number;
    } else {
      display.value = number;
      isFirstDigit = false;
    }
  });  
});

//Get decimal button
const decimalButton = document.querySelector(".decimal");

//Attach click event listener to the decimal button
decimalButton.addEventListener('click', () => {
  const decimalSign = decimalButton.textContent;
  if (!isDecimalUsed){
    display.value += decimalSign;
    isDecimalUsed = true;
  }
});

//Get all basic operator buttons
const operatorButtons = document.querySelectorAll(".basic-operator");

//Attach click event listener to each basic operator button
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    operator = button.textContent;
    number_a = display.value;
    isFirstDigit = true;
  });
});

//Get equal button
const equalButton = document.querySelector(".equal-operator");

//Attach click event listener to the equal button
equalButton.addEventListener('click', () => {
  number_b = display.value;
  display.value = operate(operator, number_a, number_b)
});

// Define the operate function to perform an arithmetic operation
// based on the operator string and two numbers
function operate(operator, a, b){
  let result = 0;
  switch (operator) {
    case '+':
        result = add (a, b);
      break;

    case '-':
        result = substract (a, b);
      break;

    case '×':
        result = multiply (a, b);
      break;

      case '÷':
        result = divide (a, b);
      break;
  
    default:
      console.log('Invalid operator');
      break;
  }
  return result;
}

// Define the add function of two numbers
function add(a, b){
  return a + b;
}

// Define the substract function of two numbers
function substract(a, b){
  return a - b;
}

// Define the multiply function of two numbers
function multiply(a, b){
  return a * b;
}

// Define the divide function of two numbers
function divide(a, b){
  if (b === 0) {
    return "Cannot divide by zero";
  } else {
    return a / b;
  }
}