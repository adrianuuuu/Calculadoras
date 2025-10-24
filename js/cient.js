const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value
      .replace(/π/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/\^/g, "**")
      .replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)));

    display.value = eval(expression);
  } catch {
    display.value = "Erro";
  }
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
