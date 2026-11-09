// Array: uma lista com todas as frases disponíveis.
const frases = [
  "Grandes conquistas começam com pequenos passos.",
  "A prática transforma dificuldade em aprendizado.",
  "Não tenha medo de começar do zero.",
  "Cada erro é uma oportunidade de aprender.",
  "Continue. Seu esforço está construindo algo importante.",
  "Criatividade é permitir-se experimentar."
];

const elementoFrase = document.querySelector("#frase");
const botao = document.querySelector("#botaoNovaFrase");

function sortearFrase() {
  // Math.random() gera um número aleatório entre 0 e 1.
  // Math.floor() arredonda para baixo e cria um índice válido do array.
  const indice = Math.floor(Math.random() * frases.length);
  elementoFrase.textContent = frases[indice];
}

botao.addEventListener("click", sortearFrase);
