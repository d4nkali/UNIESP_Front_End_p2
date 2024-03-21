// Exemplo 1 - Criando e manipulando dados javascript

var aluno = {

    nome: "Leornado",
    idade: 23,
    nacionalidade: "Brasileiro",
    menor_idade: false,
    filiacao: ["Jose", "Maria"], // Array / Lista
    endereco: { // Objeto

        rua: "Nova floresta",
        bairro: "Centro",
        cidade: "Patos",

    },

    estaRegular: function() {return true;} // Cria função 

}

// Imprime as informações

    console.log(aluno);
    console.log(aluno.idade);
    console.log(aluno.nacionalidade);
    console.log(aluno.filiacao[1]);