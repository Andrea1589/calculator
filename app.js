//Set numbers in zero
let number_a = 0;
let number_b = 0;

//Set operator initial value
let operatorChain = "";

//Set initial state of decimal button
let isDecimalUsed = false;

//Set initial state of new number
let isFirstDigit = false;

//Set initial number of operands during one calculation
let numOperators = 0;

//Set initial state for a new operation
let newOperation = false;

//Get the input element
const display = document.getElementById("display");
display.value = 0;

//Get all number buttons
const numberButtons = document.querySelectorAll(".number");

//Attach click event listener to each number button
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (newOperation === true){
      clearDisplay();
      display.value = 0;
      newOperation = false;
    }
    const digit = Number(button.textContent);
    const number = Number (display.value);
    if (!isFirstDigit && number != 0){
        display.value += digit;
    } else {
      display.value = digit;
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

//Get historial texarea element
const historialBox = document.querySelector(".historial-box");

//Attach click event listener to each basic operator button
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    operatorChain += button.textContent;
    isFirstDigit = true;
    numOperators += 1;
    isDecimalUsed = false;
    const nextOperator = operatorChain.slice(operatorChain.length - 2, operatorChain.length - 1);
    const lastOperator = operatorChain.slice(operatorChain.length - 1, operatorChain.length);

    if (numOperators === 1) {
      number_a = display.value;
    } else {
      number_b = display.value;
      historialBox.value +=  (number_a + nextOperator + number_b) + "=\n";
      number_a = operate(nextOperator, number_a, number_b);
      historialBox.value += number_a + "\n\n";
      display.value = number_a;
    }

    if (lastOperator === "=") {
      newOperation = true;
    }

  });
});

//Get clear button
const clearButton = document.querySelector(".clear-button");

//Attach click event listener to the clear button
clearButton.addEventListener('click', () => {
 clearDisplay();
});

// Define the operate function to perform an arithmetic operation
// based on the operator string and two numbers
function operate(operator, a, b){
  let result = 0;
  a = Number(a);
  b = Number(b);
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


//Define the clear function
function clearDisplay(){
  //Set numbers in zero
  number_a = 0;
  number_b = 0;

  //Set operator intial value
  operatorChain = "";

  //Set initial state of decimal button
  isDecimalUsed = false;

  //Set initial state of new number
  isFirstDigit = false;

  //Set initial number of operands during one calculation
  numOperators = 0;

  //Restart the display value
  display.value = "";

  //Restart historial box
  historialBox.value = "";
}