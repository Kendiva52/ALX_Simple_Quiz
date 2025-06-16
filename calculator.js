function add (number1, number2) {
  return number1 + number2;
}
function subtract (number1, number2) {
  return number1 - number2;
}

function multiply (number1, number2) {
  return number1 * number2;
}

function divide (number1, number2) {
  if (number2 === 0) {
    return new Error('Cannot divide by zero');
  }
  return number1 / number2;
}

function getInputValue() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  return { number1, number2 };
}

function updateResult(value) {
  document.getElementById('calculation-result').textContent = value;
}

document.getElementById('add').addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = add(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = subtract(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = multiply(number1, number2);
  document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function () {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  try {
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
  } catch (error) {
    document.getElementById('calculation-result').textContent = error.message;
  }
});
