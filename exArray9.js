//Esse array será usado para armazenar os elementos que você vai digitar.
meuArray = [];
// Esse será usado para armazenar os índices onde o número procurado é encontrado.
indicesEncontrados = [];
//Definimos a condição de continuação do loop 
for (let i = 0; i < 10; i++) {
  // A cada iteração do loop, exibimos um prompt que solicita 
  //que você digite um elemento
  // para o array.
  var elemento = parseInt(prompt("Digite o elemento" + (i + 1) + " do array:"))
   meuArray.push(elemento)
//O elemento digitado é armazenado na variável elemento
// Usamos o método .push para adicionar o elemento no final do array
}

//Depois de preencher o meuArray, 
//solicitamos que você insira um número para procurar no array
var numeroProcurado = parseInt(prompt("Insira o número que deseja procurar no array"))
var contador = 0
//Agora, iniciamos outro loop for para percorrer cada elemento do array meuArray
for (var i = 0; i < meuArray.length; i++){
  if (meuArray [i] == numeroProcurado){
    indicesEncontrados [contador] = i
    contador++
  }
  //. Dentro do loop, verificamos se o elemento atual do meuArray índice i 
  //é igual ao numeroProcurado se meuArray i for igual a numeroProcurado.
  //Armazenamos o índice atual i no array indicesEncontrados usando 
  //indicesEncontrados contador = i, onde contador é uma variável que usamos
  // para rastrear o número de índices encontrados.
  // Incrementamos o contador em 1 usando contador++
}

// console.log("indices encontrados", indicesEncontrados)


//criando um array vazio
let numeros = [];
numeroDesejado = parseInt(prompt("Quantos números você deseja inserir:"));
//pedindo o usuário para inserir 5 números
for (let i = 0; i < numeroDesejado; i++){
  let numero = parseInt(prompt("Digite um número:"));
  numeros.push(numero);
}

//exibindo os números em ordem contrária
numeros.reverse();
console.log("Os numeros digitados foram:", numeros);
//exibindo os números em ordem 
numeros.reverse();
console.log("Os numeros digitados foram:", numeros);