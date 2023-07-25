let totalAlunos = 0;
let somaNotas = 0;
let quantidadeHomens = 0;
let quantidadeMulheresAcima7 = 0; // Adicionando a declaração da variável aqui
let maiorNotaHomens = 0;

let continuarCadastro = true;

while (continuarCadastro) {
  let nota = parseFloat(prompt("Digite a nota do aluno:"));
  let sexo = prompt("Digite o sexo do aluno (M/F):");

  somaNotas += nota;
  totalAlunos++;

  if (sexo.toUpperCase() === "M") {
    quantidadeHomens++;
    if (nota > maiorNotaHomens) {
      maiorNotaHomens = nota;
    }
  } else if (sexo.toUpperCase() === "F") {
    if (nota > 7) {
      quantidadeMulheresAcima7++;
    }
  }

  let opcao = prompt("Deseja cadastrar outra nota? (S/N):");
  if (opcao.toUpperCase() !== "S") {
    continuarCadastro = false;
  }
}

let mediaGeral = somaNotas / totalAlunos;

console.log("Média geral dos alunos:", mediaGeral);
console.log("Quantidade de homens que enviaram as notas:", quantidadeHomens);
console.log(
  "Quantidade de mulheres com nota acima de 7:",
  quantidadeMulheresAcima7
);
console.log("Maior nota entre os homens:", maiorNotaHomens);
