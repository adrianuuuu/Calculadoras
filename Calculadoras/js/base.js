// Função de conversão simultânea
function converterSimultaneo(valor, baseOrigem) {
  if (!valor) {
    document.querySelectorAll('#binario, #octal, #decimal, #hexadecimal')
      .forEach(input => input.value = "");
    return;
  }

  let decimal;

  try {
    switch (baseOrigem) {
      case 'binario':
        decimal = parseInt(valor, 2);
        break;
      case 'octal':
        decimal = parseInt(valor, 8);
        break;
      case 'decimal':
        decimal = parseInt(valor, 10);
        break;
      case 'hexadecimal':
        decimal = parseInt(valor, 16);
        break;
    }

    if (isNaN(decimal)) throw new Error();

    document.getElementById('binario').value = decimal.toString(2);
    document.getElementById('octal').value = decimal.toString(8);
    document.getElementById('decimal').value = decimal.toString(10);
    document.getElementById('hexadecimal').value = decimal.toString(16).toUpperCase();

  } catch {
    // Caso digite algo inválido
  }
}

// Função de conversão direta entre bases escolhidas
function converterDireto() {
  const numero = document.getElementById("numeroDireto").value.trim();
  const baseOrigem = parseInt(document.getElementById("baseOrigem").value);
  const baseDestino = parseInt(document.getElementById("baseDestino").value);
  const resultadoDiv = document.getElementById("resultadoDireto");

  if (!numero) {
    resultadoDiv.innerHTML = "<p style='color:red'>Digite um número válido.</p>";
    return;
  }

  try {
    // Converte para decimal primeiro
    const decimal = parseInt(numero, baseOrigem);
    if (isNaN(decimal)) throw new Error();

    // Converte do decimal para a base destino
    const convertido = decimal.toString(baseDestino).toUpperCase();

    resultadoDiv.innerHTML = `
      <p><strong>Resultado:</strong> ${convertido}</p>
      <p><em>Explicação:</em> O número <b>${numero}</b> em base ${baseOrigem} foi 
      convertido para base ${baseDestino}, resultando em <b>${convertido}</b>.</p>
    `;
  } catch {
    resultadoDiv.innerHTML = "<p style='color:red'>Número inválido para a base selecionada.</p>";
  }
}
