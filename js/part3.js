const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseover", () => {
  colorBox.style.backgroundColor = "#bf75ff";
  colorBox.textContent = "Mouse Over!";
});

colorBox.addEventListener("mouseout", () => {
  colorBox.style.backgroundColor = "#dbcbe1";
  colorBox.textContent = "Hover over me!";
});

const keyupInput = document.getElementById("keyupInput");
const keyupOutput = document.getElementById("keyupOutput");

keyupInput.addEventListener("keyup", () => {
  keyupOutput.textContent = keyupInput.value;
});

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("calcNum1").value);
  const num2 = parseFloat(document.getElementById("calcNum2").value);
  const resultElement = document.getElementById("calcResult");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Please enter valid numbers";
    return;
  }

  let result = 0;
  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': 
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0"; 
      break;
  }

  resultElement.textContent = result;
}