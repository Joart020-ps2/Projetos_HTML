const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Impede a página de recarregar ao enviar o formulário.

  const nota1 = Number(document.querySelector("#nota1").value);
  const nota2 = Number(document.querySelector("#nota2").value);
  const nota3 = Number(document.querySelector("#nota3").value);
  const notas = [nota1, nota2, nota3];

  // Confere se todas as notas estão dentro do intervalo permitido.
  if (notas.some(nota => nota < 0 || nota > 10)) {
    resultado.className = "resultado erro";
    resultado.textContent = "Digite notas entre 0 e 10.";
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;
  resultado.className = "resultado";

  // Critérios de exemplo: média 7 para aprovação e 5 para recuperação.
  if (media >= 7) {
    resultado.classList.add("aprovado");
    resultado.textContent = `Média: ${media.toFixed(1)} — Aprovado(a)!`;
  } else if (media >= 5) {
    resultado.classList.add("recuperacao");
    resultado.textContent = `Média: ${media.toFixed(1)} — Em recuperação.`;
  } else {
    resultado.classList.add("reprovado");
    resultado.textContent = `Média: ${media.toFixed(1)} — Reprovado(a).`;
  }
});
