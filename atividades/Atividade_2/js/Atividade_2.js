/* Atividade 2

Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:

- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres.

Desenvolver atividade utilizando, obrigatoriamente, a linguagem Javascript


Aluno: Danilo Pereira Viana - P2-B

*/

// Criando variaveis e listas

    var pesq_altura = [];
    var pesq_sexo = [];
    var cont_pessoas = 0;

function add_Pessoa(event) { // Criando a função 'add_Pessoa'

    event.preventDefault(); // Evita problemas onde so sera executado quando o formulario for enviado

    // Cria variaveis para armazenar os valores do formulario html

        const perg_altura = document.getElementById('perg_altura');
        const perg_sexo = document.getElementById('perg_sexo');
        
        const altura = parseFloat(perg_altura.value);
        const sexo = perg_sexo.value;

    // Armazena nas listas

        pesq_altura.push(altura);
        pesq_sexo.push(sexo);

        perg_altura.value = '';
        perg_sexo.value = 'M';

    cont_pessoas++; // Adiciona mais 1 ao contador

    // Atualiza a quantidade no html
    document.getElementById('cont_pessoas').innerText = `Pessoas cadastradas: ${cont_pessoas}`;

    if (cont_pessoas === 15) { // Se o contador cheagar em 15 pessoas, então:

        exibir_Resultados(); // Executa a função 'exibir_Resultados();'

    }

}

function exibir_Resultados() { // Cria a função 
    
    // Compara para descobrir a menor e maior altura e armazena em variaveis

        const max_altura = Math.max(...pesq_altura);
        const min_altura = Math.min(...pesq_altura);

    // Filtra quais alturas eram de homens e faz a media

    const altura_homens = pesq_altura.filter((height, index) => pesq_sexo[index] === 'M');
    const media_altura_homens = altura_homens.reduce((sum, height) => sum + height, 0) / altura_homens.length;

    // Conta quantas mulheres tem na pesquisa e armazena na variavel

    const cont_mulheres = pesq_sexo.filter(gender => gender === 'F').length;

    // Exibe os resultados para o html

    document.getElementById('exibir_result').innerText = `Resultados: `
    document.getElementById('pesq_altura_max').innerText = `Maior Altura: ${max_altura.toFixed(2)} m`;
    document.getElementById('pesq_altura_min').innerText = `Menor Altura: ${min_altura.toFixed(2)} m`;
    document.getElementById('media_pesq_altura_homens').innerText = `Média de Altura dos Homens: ${media_altura_homens.toFixed(2)} m`;
    document.getElementById('cont_mulheres').innerText = `Número de Mulheres: ${cont_mulheres}`;

}