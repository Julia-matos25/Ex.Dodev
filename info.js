let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;
while (continuar) {
  let opcao = parseInt(prompt("Escolha uma opção: 1 - Cadastro; 2 - Login; 3 - Encerrar"));

  if (opcao === 1) {
    let nome = prompt("Digite o nome para cadastro do usuário:");
    let senha = prompt("Digite a senha para cadastro do usuário");
    nomes.push(nome);
    senhas.push(senha);
    contador++;
    console.log("Usuário cadastrado com sucesso!");
  } else if (opcao === 2) {
    let nome = prompt("Digite o nome do usuário:");
    let senha = prompt("Digite a senha do usuário:");

    let encontrouConta = false;
    for (let i = 0; i < nomes.length; i++) {
      if (nomes[i] === nome && senhas[i] === senha) {
        encontrouConta = true;
        console.log("Login bem-sucedido!");
        break;
      }
    }

    if (!encontrouConta) {
      console.log("Nome de usuário ou senha inválidos!");
    }
  } else if (opcao === 3) {
    continuar = false;
    console.log("Encerrando programa...");
  } else {
    console.log("Opção inválida!");
  }
}
