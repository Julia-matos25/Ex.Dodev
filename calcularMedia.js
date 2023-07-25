let somaNotas = 0;
let quantidadeHomens = 0;
let quantidadeMulheresNotaAcima7 = 0;
let maiorNotaHomem = 0;

for (let i = 1; i <= 10; i++) {
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i} (0 a 10):`));
  const sexo = prompt(`Digite o sexo do aluno ${i} (M ou F):`);

  somaNotas += nota;

  if (sexo === 'M') {
    quantidadeHomens++;

    if (nota > maiorNotaHomem) {
      maiorNotaHomem = nota;
    }
  } else if (sexo === 'F' && nota > 7) {
    quantidadeMulheresNotaAcima7++;
  }
}

const mediaGeral = somaNotas / 10;

console.log('Média geral dos alunos:', mediaGeral);
console.log('Quantidade de homens que enviaram as notas:', quantidadeHomens);
console.log('Quantidade de mulheres com nota acima de 7:', quantidadeMulheresNotaAcima7);
console.log('Maior nota entre os homens:', maiorNotaHomem);


