var a = parseInt(prompt("Insira o valor de A"))
var b = parseInt(prompt("Insira o valor de B"))

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


console.log("Soma:", somar(a, b));
console.log("Subtração:", subtrair(a, b));
console.log("Multiplicação:", multiplicar(a, b));
console.log("Divisão:", dividir(a, b));