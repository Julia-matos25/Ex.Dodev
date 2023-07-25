let modelos = [];
let anos = [];
let valoresCarro = [];

let continuar = true;

while (continuar) {
  let modelo = prompt("Digite o modelo do carro:");
  let ano = parseInt(prompt("Digite o ano do carro:"));
  let valorCarro = parseFloat(prompt("Digite o valor do carro:"));

  modelos.push(modelo);
  anos.push(ano);
  valoresCarro.push(valorCarro);

  let resposta = prompt("Deseja cadastrar outro carro? (Digite 's' para sim ou 'n' para não)");
  if (resposta.toLowerCase() === 'n') {
    continuar = false;
  }
}

console.log("Carros cadastrados:");
for (let i = 0; i < modelos.length; i++) {
  console.log(`${modelos[i]}, ${anos[i]} - Valor: ${valoresCarro[i]}`);
}

// Ordenação pelo preço dos carros usando o algoritmo de ordenação por seleção
for (let i = 0; i < valoresCarro.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < valoresCarro.length; j++) {
    if (valoresCarro[j] < valoresCarro[minIndex]) {
      minIndex = j;
    }
  }
  // Troca os valores no array de modelos
  [modelos[i], modelos[minIndex]] = [modelos[minIndex], modelos[i]];
  // Troca os valores no array de anos
  [anos[i], anos[minIndex]] = [anos[minIndex], anos[i]];
  // Troca os valores no array de valoresCarro
  [valoresCarro[i], valoresCarro[minIndex]] = [valoresCarro[minIndex], valoresCarro[i]];
}

console.log("Carros ordenados por preço:");
for (let i = 0; i < modelos.length; i++) {
  console.log(`${modelos[i]}, ${anos[i]} - Valor: ${valoresCarro[i]}`);
}



