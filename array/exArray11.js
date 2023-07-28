//Parte 1
var arrayA = [];
var arrayB = [];
var arrayC = [];
var contador = 0;

for (let i = 0; i < 10; i++) {
  var numeroA = parseInt(prompt("Digite um número para o arrayA:"));
  arrayA.push(numeroA);

  var numeroB = parseInt(prompt("Digite um número para o arrayB:"));
  arrayB.push(numeroB);
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (arrayA[i] == arrayB[j] && arrayA[i] > 5) {
      arrayC.push(arrayA[i]);
      contador++;
    }
  }
}

alert("arrayC: " + arrayC);

//Parte 2
var numInteiro = [];
var numPar = [];
var numImpar = [];

for (var i = 0; i < 10; i++) {
  var numInteiros = parseInt(prompt('Informe o número ' + (i + 1) + ':'));
  numInteiro[i] = numInteiros;
}

contadorPar = 0;
contadorImpar = 0;

for (var i = 0; i < numInteiro.length; i++) {
  if(numInteiro[i] % 2 == 0){
    numPar[contadorPar] = numInteiro[i]
    contadorPar++
  }else{
    numImpar[contadorImpar] = numInteiro[i]
    contadorImpar++
  }
  
}

//exibindo os três vetores
console.log("Números informados:  " + numInteiro);
console.log("Números impares: " + numImpar);
console.log("Números impares: " + numPar);