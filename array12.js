// var arrayNum = [];

// for (let i = 0; i < 5; i++) {
//    var arraysNum = parseInt(prompt('Insira o numero: ' + (i + 1 ) + ':'))
//  arrayNum[i] = arraysNum;
// if(arrayNum[i] >= 0){
//     arrayNum[i] = true;
//  } else{

//     arrayNum[i] = false;
//  }
// }
 
 
// console.log( arrayNum);


// var arrayNum = [];

// for (let i = 0; i < 5; i++) {
//   let numero = parseInt(prompt('Insira o número ' + (i + 1) + ':'));
  
//   // Verifica se o número já foi inserido antes
//   for (let j = 0; j < i; j++) {
//     while (arrayNum[j] === numero) {
//       numero = parseInt(prompt('Você já inseriu esse número. Digite outro número:'));
//       j = 0; // Reinicia a verificação do início do array
//     }
//   }
  
//   arrayNum[i] = numero;
// }

// console.log(arrayNum);

// var arrayA = [];
// var arrayB = [];
// var arrayC = [];
// var contador = 0;

// var continuar = "s";

// do {
//   var numeroA = parseInt(prompt('Insira um número inteiro e positivo para o vetor A:'))
//    arrayA[contador] = numeroA

//   var numeroB = parseInt(prompt('Insira um número inteiro e positivo para o vetor B:'))
//   arrayB[contador] = numeroB

//   contador++

//   continuar = prompt("Deseja continuar inserindo numeros? s ou n")
//  } while (continuar == 's');

//  //criando o array C com os numeros em comum ou impares
//  var contadorC = 0
//  for (var i = 0; i < arrayA.length; i++){
//   for (var j = 0; j < arrayA.length; j++){
//     if (arrayB[i]== arrayA[j] || arrayB[i] % 2 != 0){
//     arrayC[contadorC] = arrayB[i]
//     contador++
//     j = arrayA.length
//     }else if (arrayA[j] % 2 != 0){
//       arrayC[contadorC] = arrayA[j]
//       contadorC++
//       j = arrayA,length
//     }
//   }
//  }

//  console.log("Array A:", arrayA);
//  console.log("Array B:", arrayB);
//  console.log("Array C:", arrayC);

var arrayNum = [2,6,8,0,6,4,3,2,0,7];

var i = 0;

while (i < arrayNum.length) {
  if(arrayNum[i] === 0) {
    // Elimina a posição atual movendo os elementos posteriores uma posição para trás
    for (let j = i; j < arrayNum.length - 1; j++){
      arrayNum[j] = arrayNum[j + 1];
    }
    // Remove o último elemento, que será uma cópia do valor anterior após o loop acima
    
   arrayNum.length -= 1;
  } else {
    // Incrementa o índice para continuar verificando o próximo elemento
    i++;
  }
}

console.log(arrayNum);