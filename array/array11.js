var idades = [];
var alturas = [];
var somaAlturas = 0;
var quantidadeAlunos = 5;

// Preenchendo o array de idades e alturas
for (let i = 0; i < quantidadeAlunos; i++) {
  let idade = parseInt(prompt('Digite a idade do aluno ' + (i + 1) + ': '));
  let altura = parseInt(prompt('Digite a altura do aluno ' + (i + 1) + ' (em metros): '));
  idades.push(idade);
  alturas.push(altura);
  somaAlturas += altura;
}

// Calculando a média da altura de todos os alunos
var mediaAltura = somaAlturas / alturas.length;

// Verificando quantos alunos com mais de 13 anos têm altura menor que a média
var alunosComMenorAltura = 0;
for (let i = 0; i < quantidadeAlunos; i++) {
  if (idades[i] > 13 && alturas[i] < mediaAltura) {
    alunosComMenorAltura++;
  }
}

console.log('Quantidade de alunos com mais de 13 anos e altura menor do que a média:', alunosComMenorAltura);


