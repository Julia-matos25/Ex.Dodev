var numero = parseInt(prompt("Digite um número inteiro positivo:"));
var fibonacci = [];
fibonacci[0] = numero - 1;
fibonacci[1] = numero;

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("A sequência de Fibonacci com no máximo 10 elementos é:", fibonacci.slice(0, 10));
