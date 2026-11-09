// Seleciona o botão e o espaço onde a mensagem será exibida.
const botao = document.querySelector("#botaoSaudacao");
const mensagem = document.querySelector("#mensagem");

// Executa esta função quando o usuário clicar no botão.
botao.addEventListener("click", function () {
  mensagem.textContent = "Que bom ter você por aqui! Seja bem-vindo(a).";
});
