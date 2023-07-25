// Inicializando a variável de controle e a entrada dos números
// let contador = 1;
// let numero;

// // Laço de repetição while
// while (contador <= 5) {
//   // Entrada do número
//   numero = parseFloat(prompt("Digite um número:"));

//   // Exibição dos resultados
//   let multiplicador = 1;
//   while (multiplicador <= 5) {
//     let resultado = numero * (numero + multiplicador);
//     console.log(numero + " x " + (numero + multiplicador) + " = " + resultado);
//     multiplicador++;
//   }

//   contador++;
// }
// var condicao = 0;

// while (condicao <= 2) {
//   let numeroRecebido = parseInt(prompt("Digite um número:"));

//   let multiplicador = 1;
//   while (multiplicador < 10 ) {
//     let resultado = numeroRecebido * (condicao + multiplicador);
//     console.log (numeroRecebido + " x " + (numeroRecebido + multiplicador) + " = " + (resultado);
//     multiplicador++;
//   }

//   condicao++;
// }
let condicao = 0;

while (condicao < 3) {
  let numeroRecebido = parseInt(prompt("Digite um número:"));

  let multiplicador = 0;
  while (multiplicador <= 10) {
    if (condicao + multiplicador > 10){
        break;
    }
    let resultado = numeroRecebido * (condicao + multiplicador);
    console.log(numeroRecebido + " x " + (condicao + multiplicador) + " = " + resultado);
    multiplicador++;
  }

  condicao++;
}
