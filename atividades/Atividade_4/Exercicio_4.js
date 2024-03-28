var aluno_1 = {

    nome: "Roger",
    idade: 26,
    filiacao: ["Reginaldo", "Joana"],
    endereco: {

        rua: "Ferroviaria",
        cidade: "Campina Grande",
        estado: "PB",

    },

    dadosCompletos: function() {

        if (this.nome && this.idade && this.filiacao[0] && this.filiacao[1] 
            && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {

            return true;

        }

        else {

            return false;

        }

    },

}

console.log(aluno_1.nome);
console.log(aluno_1.idade);
console.log(aluno_1.filiacao[0]);
console.log(aluno_1.filiacao[1]);
console.log(aluno_1.endereco)
console.log();
console.log("Os dados estão preenchidos: " + aluno_1.dadosCompletos());

var aluno_2 = {

    nome: "Fabio",
    idade: 21,
    filiacao: ["Jose", "Marileide"],
    endereco: {

        rua: "",
        cidade: "Patos",
        estado: "PB",

    },

    dadosCompletos: function() {

        if (this.nome && this.idade && this.filiacao[0] && this.filiacao[1] 
            && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {

            return true;

        }

        else {

            return false;

        }

    },

}

console.log(aluno_2.nome);
console.log(aluno_2.idade);
console.log(aluno_2.filiacao[0]);
console.log(aluno_2.filiacao[1]);
console.log(aluno_2.endereco)
console.log();
console.log("Os dados estão preenchidos: " + aluno_2.dadosCompletos());