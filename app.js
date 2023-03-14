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
      break;
  }
  return result;
}


function add(a, b){
  return a + b;
}

function substract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  if (b === 0) {
    return "No se puede dividir para cero";
  } else {
    return a / b;
  }
}