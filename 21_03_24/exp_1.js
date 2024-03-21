var aluno = {

    nome: "Leornado",
    idade: "23",
    nacionalidade: "Brasileiro",
    menor_idade: false,
    filiacao: ["Jose", "Maria"],
    endereco: {

        rua: "Nova floresta",
        bairro: "Centro",
        cidade: "Patos",

    },

    estaRegular: function() {return true;}

}

console.log(aluno);
console.log(aluno.idade);
console.log(aluno.nacionalidade);
console.log(aluno.filiacao[1]);