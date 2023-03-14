//Set the initial state of decimal button
let isDecimalUsed = false;

//Get the input element
const display = document.getElementById("display");

//Get all number buttons
const numberButtons = document.querySelectorAll(".number");

//Attach click event listener to each number button
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    display.value += number;
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
    return "No se puede dividir para cero";
  } else {
    return a / b;
  }
}