// Cada objeto representa uma pergunta, suas alternativas e a resposta correta.
const perguntas = [
  {
    texto: "Qual linguagem define a estrutura de uma página web?",
    alternativas: ["CSS", "HTML", "JavaScript", "Python"],
    correta: 1
  },
  {
    texto: "Qual linguagem é usada principalmente para estilizar páginas?",
    alternativas: ["HTML", "SQL", "CSS", "Java"],
    correta: 2
  },
  {
    texto: "Qual linguagem permite adicionar interatividade a uma página?",
    alternativas: ["JavaScript", "CSS", "HTML", "XML"],
    correta: 0
  },
  {
    texto: "Qual elemento HTML cria um link?",
    alternativas: ["<p>", "<img>", "<a>", "<h1>"],
    correta: 2
  },
  {
    texto: "Qual comando seleciona um elemento pelo ID no JavaScript?",
    alternativas: ["document.querySelector()", "console.log()", "Math.random()", "alert()"],
    correta: 0
  }
];

let indiceAtual = 0;
let pontos = 0;
let respondeu = false;

const areaQuiz = document.querySelector("#areaQuiz");
const perguntaElemento = document.querySelector("#pergunta");
const alternativasElemento = document.querySelector("#alternativas");
const numeroPergunta = document.querySelector("#numeroPergunta");
const pontuacaoElemento = document.querySelector("#pontuacao");
const barraProgresso = document.querySelector("#barraProgresso");
const feedback = document.querySelector("#feedback");
const botaoProxima = document.querySelector("#botaoProxima");
const resultadoFinal = document.querySelector("#resultadoFinal");
const mensagemFinal = document.querySelector("#mensagemFinal");

function mostrarPergunta() {
  respondeu = false;
  botaoProxima.disabled = true;
  feedback.textContent = "";

  const atual = perguntas[indiceAtual];
  perguntaElemento.textContent = atual.texto;
  numeroPergunta.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
  pontuacaoElemento.textContent = `Pontos: ${pontos}`;
  barraProgresso.style.width = `${(indiceAtual / perguntas.length) * 100}%`;
  alternativasElemento.innerHTML = "";

  atual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "alternativa";
    botao.textContent = alternativa;
    botao.addEventListener("click", () => verificarResposta(indice));
    alternativasElemento.appendChild(botao);
  });
}

function verificarResposta(indiceEscolhido) {
  if (respondeu) return;
  respondeu = true;

  const correta = perguntas[indiceAtual].correta;
  const botoes = alternativasElemento.querySelectorAll("button");

  botoes.forEach((botao, indice) => {
    botao.disabled = true;
    if (indice === correta) botao.classList.add("correta");
    if (indice === indiceEscolhido && indice !== correta) botao.classList.add("errada");
  });

  if (indiceEscolhido === correta) {
    pontos++;
    feedback.textContent = "Resposta correta! Muito bem.";
  } else {
    feedback.textContent = "Não foi dessa vez. A alternativa correta está destacada.";
  }

  pontuacaoElemento.textContent = `Pontos: ${pontos}`;
  botaoProxima.disabled = false;
  botaoProxima.textContent = indiceAtual === perguntas.length - 1
    ? "Ver resultado" : "Próxima pergunta";
}

function mostrarResultado() {
  areaQuiz.hidden = true;
  resultadoFinal.hidden = false;
  barraProgresso.style.width = "100%";

  let mensagem = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
  if (pontos === perguntas.length) mensagem += " Excelente resultado!";
  else if (pontos >= 3) mensagem += " Muito bem! Continue praticando.";
  else mensagem += " Continue estudando e tente novamente.";
  mensagemFinal.textContent = mensagem;
}

botaoProxima.addEventListener("click", function () {
  if (!respondeu) return;
  if (indiceAtual < perguntas.length - 1) {
    indiceAtual++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

document.querySelector("#botaoReiniciar").addEventListener("click", function () {
  indiceAtual = 0;
  pontos = 0;
  resultadoFinal.hidden = true;
  areaQuiz.hidden = false;
  botaoProxima.textContent = "Próxima pergunta";
  mostrarPergunta();
});

mostrarPergunta();
