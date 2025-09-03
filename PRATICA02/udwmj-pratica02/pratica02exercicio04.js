const nome = prompt("Qual é o seu nome?");
const saudacao = document.getElementById("greeting");

if (nome) {
  saudacao.textContent = `Olá, ${nome.toLowerCase()}!`;
} else {
  saudacao.textContent = "Olá!";
}