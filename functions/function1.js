

function somar(a, b){
    return a + b;
}


function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}


function dividir(a, b){
    return a / b;
}

var contador = 0;
var continuar

while (continuar == 's'){
var a = parseInt(prompt("Insira o valor de A"))
var b = parseInt(prompt("Insira o valor de B"))


var operacao = parseInt(prompt("Escolha a operação: Soma/n1 - Subtração/n2 - Multiplicação/n3 - Divisão/n4"))
 var resultadoOperacao;
  switch(operacao){
    case 1: 
      resultadoOperacao = somar(a, b));
     break;
    case 2: 
      resultadoOperacao = subtrair(a, b));
     break;
    case 3: 
      resultadoOperacao = multiplicar(a, b));
     break;
    case 4:  
      resultadoOperacao = dividir(a, b));
    default:
        console.log("Operação inválida")
     break;
 }


resultado[contador] = resultadoOperacao;
contador++
console.log("O resultado da operação é: " + resultadoOperacao);

continuar = prompt("Deseja realizar outra operação? s ou n");

}
 

