// let senteFome = prompt("Você sente fome? sim/nao")
// let temDinheiro = prompt("Você tem dinheiro? sim/nao")

// if (senteFome == "sim" && temDinheiro == "sim"){
//  console.log ("Recomendo procurar uma lanchonete!");
// } else if(senteFome == "nao" || temDinheiro == "nao"){
//     console.log("É melhor comer em casa!")
// }

let cintoDeSeguranca = prompt("Está com cinto de segurança? (sim ou não)")
let naoAlcoolizado = prompt("Está alcoolizado? (sim ou não)")
let semaforoVerde = prompt("O semaforo esta verde? (sim ou não)")

if (cintoDeSeguranca === "sim" && naoAlcoolizado === "sim" && semaforoVerde=== "sim"){
    console.log("Pode prosseguir");
} else if (cintoDeSeguranca === "nao" && naoAlcoolizado === "nao" && semaforoVerde=== "nao"){
    console.log("Não pode prosseguir")
}