// const nome = prompt ("Digite o seu nome:");
// const idade = parseInt(prompt("Digite a sua idade:"));
// const peso = parseFloat(prompt("Digite o seu peso (em kg):"));
// const altura = parseFloat(prompt("Digite a sua altura (em metros):"));
// const profissao = prompt("Digite a sua profissão:");

// let mensagem = 'Olá ${nome}, você tem ${idade} anos, é ${profissao, tem ${altura} de altura e pesa ${peso}.}';

// if (idade >=18) {
//     mensagem += "Está liberada para tomar uma gelada!";
// } else {
//     mensagem += "Sem gelada pra você.";
// }

// console.log (mensagem);

// const nome = prompt("Digite o seu nome:");
// const idade = parseInt(prompt("Digite a sua idade:"));
// const peso = parseFloat(prompt("Digite o seu peso (em kg):"));
// const altura = parseFloat(prompt("Digite a sua altura (em metros):"));
// const profissao = prompt("Digite a sua profissão:");

// let mensagem = `Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.`;

// if (idade >= 18) {
//   mensagem += " Está liberado para tomar uma gelada!";
// } else {
//   mensagem += " Sem gelada para você.";
// }

// console.log(mensagem);

// const idade = parseInt(prompt("Digite a sua idade (em anos):"));



const nome = prompt("Digite o seu nome:");
const idade = parseInt(prompt("Digite a sua idade (em anos):"));
const peso = parseFloat(prompt("Digite o seu peso (em kg):"));
const altura = parseFloat(prompt("Digite a sua altura (em metros):"));
const profissao = prompt("Digite a sua profissão:");

const meses = idade * 12;
const semanas = idade * 52;
const dias = idade * 365;

let mensagem = `Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.\n`;
mensagem += `Sua idade em meses é: ${meses}\n`;
mensagem += `Sua idade em semanas é: ${semanas}\n`;
mensagem += `Sua idade em dias é: ${dias}\n`;

if (idade >= 18) {
  mensagem += "Está liberado para tomar umas geladas!\n";
} else {
  mensagem += "Sem gelada para você.\n";
}

const imc = peso / (altura * altura);

mensagem += `Seu IMC é: ${imc.toFixed(2)} kg/m².\n`;

if (imc < 18.5) {
  mensagem += "Classificação: Magreza";
} else if (imc >= 18.5 && imc <= 24.9) {
  mensagem += "Classificação: Normal";
} else if (imc >= 25 && imc <= 30) {
  mensagem += "Classificação: Sobrepeso";
} else {
  mensagem += "Classificação: Obesidade";
}

console.log(mensagem);

const anoAtual = 2023;
const anoNascimento = anoAtual - idade;

let ano = anoNascimento;
let contador = 0;
let anosVividos = "";

while (ano <= anoAtual) {
  anosVividos += `${ano} - ${contador} anos de idade\n`;
  ano++;
  contador++;
}

console.log("Anos vividos:");
console.log(anosVividos);

let continuar = prompt("Deseja inserir novos dados? (Digite 'Finalizar' para encerrar o programa)");

while (continuar !== "Finalizar") {
  const nome = prompt("Digite o seu nome:");
  const idade = parseInt(prompt("Digite a sua idade (em anos):"));
  const peso = parseFloat(prompt("Digite o seu peso (em kg):"));
  const altura = parseFloat(prompt("Digite a sua altura (em metros):"));
  const profissao = prompt("Digite a sua profissão:");

  // Resto do código para cálculos, exibições e estrutura de repetição while

  continuar = prompt("Deseja inserir novos dados? (Digite 'Finalizar' para encerrar o programa)");
}

console.log("Programa finalizado.");
