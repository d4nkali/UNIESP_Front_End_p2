/*

Atividade 3 - Desenvolva uma função que realize a soma de uma quantidade variáveis de valores a 
ser informado na sua invocação.


Aluno: Danilo Pereira Viana - P2-B

*/

var list_soma = []; // Cria uma lista vazia
var rep; // Cria uma variavel para verificar o while

function calc_soma() { // Cria a função 'calc_soma'

    let soma = 0; // Cria uma variavel vazia para armazenar a soma

    for (let i = 0; i < list_soma.length; i++) { // Cria um loop para analizar e incrementar os numeros da lista
        
        soma += Number(list_soma[i]); // Soma e armazena o valor em 'soma'

    }

    return soma; // Exibe o valor de 'soma'

}

do { // Cria um loop
  
    let valor = prompt("Digite um numero para a soma: "); // Pergunta qual o numero e armazena o valor
    list_soma.push(valor); // Adiciona o numero a lista

    rep = prompt("Deseja acrescentar mais um numero (s/n): "); // Pergunta se quer adicionar mais um numero

} while (rep == "s"); // So repetirar se o valor for 's'

// Exibe os valores no HTML

    var exebir_lista = document.getElementById("exebir_lista");
    exebir_lista.textContent = "A lista com os numeros: " + list_soma;

    var exebir_soma = document.getElementById("exebir_soma");
    exebir_soma.textContent = "A soma dos numeros é: " + calc_soma();