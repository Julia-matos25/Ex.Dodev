var nomes = []//Array para armazenar os nomes dos alunos 
var notas = []//Array para armazenar as notas

var contador = 0; 
var continuar = true;//Variável para cancelar a inserção de informações
 
//Loop para inserir informações sobre os alunos
    while (continuar) {
        var nomeAlunos = prompt("Insira o nome do aluno: ")
    
        var notaAlunos = parseInt(prompt("Insira a nota do aluno: "))
    
    
nomes[contador] = nomeAlunos
notas[contador] = notaAlunos
contador++


var resposta = prompt("Deseja continuar inserindo nomes e notas? s ou n")

if(resposta == 'n'){
    continuar = false;
}
}

console.log("Notas dos alunos : ")

//Exibir nota de cada aluno
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + ': ' + notas[i])
}

//Calcular a soma das notas

var somaNotas = 0
for (let j = 0; j < notas.length; j++) {
    somaNotas += notas [j]
}

//calcular média geral da turma

var mediaAlunos = somaNotas / nomes.length

  

 console.log("Soma das notas: " + somaNotas)
 console.log("Média geral da turma " + mediaAlunos)
