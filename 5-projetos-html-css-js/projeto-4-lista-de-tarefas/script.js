const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#campoTarefa");
const listaTarefas = document.querySelector("#listaTarefas");
const contador = document.querySelector("#contador");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campoTarefa.value.trim();
  if (texto === "") return;

  criarTarefa(texto);
  campoTarefa.value = "";
  campoTarefa.focus();
  atualizarContador();
});

function criarTarefa(texto) {
  const item = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", `Marcar ${texto} como concluída`);

  const descricao = document.createElement("span");
  descricao.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.textContent = "Remover";
  botaoRemover.className = "remover";
  botaoRemover.setAttribute("aria-label", `Remover tarefa: ${texto}`);

  // A classe CSS muda a aparência quando a tarefa é concluída.
  checkbox.addEventListener("change", function () {
    item.classList.toggle("concluida", checkbox.checked);
    atualizarContador();
  });

  botaoRemover.addEventListener("click", function () {
    item.remove();
    atualizarContador();
  });

  item.append(checkbox, descricao, botaoRemover);
  listaTarefas.appendChild(item);
}

function atualizarContador() {
  const total = listaTarefas.children.length;
  const concluidas = listaTarefas.querySelectorAll("input:checked").length;
  contador.textContent = total === 0
    ? "Nenhuma tarefa cadastrada."
    : `${concluidas} de ${total} tarefa(s) concluída(s).`;
}
