document.addEventListener("DOMContentLoaded", () => {
  const valorInicialInput = document.getElementById("valorInicial");
  const periodoInput = document.getElementById("periodo");
  const taxaInput = document.getElementById("taxaJuros");
  const tempoSelect = document.getElementById("tempo");
  const tipoSelect = document.getElementById("tipoJuros");
  const calcularBtn = document.getElementById("calcular");
  const limparBtn = document.getElementById("limpar");
  const resultadoDiv = document.getElementById("resultado");

  calcularBtn.addEventListener("click", () => {
    const P = parseFloat(valorInicialInput.value);
    const n = parseInt(periodoInput.value);
    const i = parseFloat(taxaInput.value) / 100;
    const tipo = tipoSelect.value;

    if (isNaN(P) || isNaN(n) || isNaN(i) || P <= 0 || n <= 0 || i < 0) {
      resultadoDiv.innerHTML = "<p style='color:red;'>Preencha todos os campos corretamente.</p>";
      resultadoDiv.classList.add("show");
      return;
    }

    let resultadoHTML = "<h3>Resultados</h3><table><thead><tr><th>Período</th><th>Montante (R$)</th></tr></thead><tbody>";
    let M;

    if (tipo === "simples") {
      for (let t = 1; t <= n; t++) {
        M = P * (1 + i * t);
        resultadoHTML += `<tr><td>${t}</td><td>${M.toFixed(2)}</td></tr>`;
      }
    } else {
      for (let t = 1; t <= n; t++) {
        M = P * Math.pow(1 + i, t);
        resultadoHTML += `<tr><td>${t}</td><td>${M.toFixed(2)}</td></tr>`;
      }
    }

    resultadoHTML += "</tbody></table>";
    resultadoHTML += `<p><strong>Montante final:</strong> R$ ${M.toFixed(2)}</p>`;
    resultadoHTML += `<p><small>Tipo de juros: ${tipo.charAt(0).toUpperCase() + tipo.slice(1)} (${tempoSelect.value})</small></p>`;

    resultadoDiv.innerHTML = resultadoHTML;
    resultadoDiv.classList.add("show");
  });

  limparBtn.addEventListener("click", () => {
    resultadoDiv.classList.remove("show");
    resultadoDiv.innerHTML = "";
  });
});
