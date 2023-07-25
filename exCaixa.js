let nome = prompt("Digite o seu nome:");
let cpf = prompt ("Digite o seu CPF:");
let saque ;
let deposito;
let opcao = prompt( "Deseja saque/deposito");
let valorSaldo = prompt("Qual valor deseja:");

if (opcao == saque) {
    remove (valorSaldo);
}
if (opcao == deposito) {
    console.log(valorSaldo)
}
let continuar = true;
while (continuar) { 
    const resposta = parseInt(prompt("Deseja continuar? Insira 1 para parar e 2 para continuar."));
}
if (resposta === 1) {
    //ação para continuar
    console.log(valorSaldo);
}
else if (resposta === 2) {
    // Ação para parar
    continuar = false;
}
let saldoTotal = 0;
let maiorValor = 0;
let quantidadeValores = 0;

function solicitarOperacao() {
  const operacao = parseInt(prompt('Digite a operação desejada:\n1 - Saque\n2 - Depósito'));
  if (operacao === 1) {
    realizarSaque();
  } else if (operacao === 2) {
    realizarDeposito();
  } else {
    console.log('Opção inválida. Tente novamente.');
    solicitarOperacao();
  }
}

function realizarSaque() {
  const valorSaque = parseFloat(prompt('Digite o valor a ser sacado:'));
  if (valorSaque <= saldoTotal && valorSaque >= 0) {
    saldoTotal -= valorSaque;
    atualizarValores(valorSaque);
    console.log(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`);
  } else {
    console.log('Saldo insuficiente ou valor inválido para saque. Tente novamente.');
    realizarSaque();
  }
}

function realizarDeposito() {
  const valorDeposito = parseFloat(prompt('Digite o valor a ser depositado:'));
  if (valorDeposito >= 0) {
    saldoTotal += valorDeposito;
    atualizarValores(valorDeposito);
    console.log(`Depósito de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.`);
  } else {
    console.log('Valor inválido para depósito. Tente novamente.');
    realizarDeposito();
  }
}

function atualizarValores(valor) {
  if (valor > maiorValor) {
    maiorValor = valor;
  }
  quantidadeValores++;
}

function exibirResumo() {
  console.log(`Saldo Total: R$ ${saldoTotal.toFixed(2)}`);
  console.log(`Maior valor inserido: R$ ${maiorValor.toFixed(2)}`);
  console.log(`Média dos valores inseridos: R$ ${(saldoTotal / quantidadeValores).toFixed(2)}`);
}

function main() {
  const nome = prompt('Digite o nome do cliente:');
  const cpf = prompt('Digite o CPF do cliente:');

  let continuar = 1;
  while (continuar === 1) {
    solicitarOperacao();
    continuar = parseInt(prompt('Deseja continuar?\n1 - Sim\n2 - Parar'));
  }

  exibirResumo();
}

main();

