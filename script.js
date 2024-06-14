const buttons = document.querySelectorAll('.button-container button');
const display = document.querySelector('.display');

let expression = "";

function displayValue(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    expression = expression.replace(/--/g, '+'); // Handle double negation
    let result = eval(expression);
    display.value = result;
    expression = ""; // Reset expression for next calculation
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  expression = "";
  display.value = "";
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    if (value === "=") {
      calculate();
    } else if (value === "clear") {
      clearDisplay();
    } else {
      displayValue(value);
    }
  });
});
