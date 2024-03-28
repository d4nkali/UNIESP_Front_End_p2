/*

Exercicio 4 - Crie dois objetos com a estrutura abaixo:

- Nome (tipo String)
- Idade (tipo Number)
- Filiacao (Array): nomeDoPai (tipo String) e nomeDaMae (tipo String)
- Endereco (tipo Objeto): rua (tipo String), cidade (tipo String) e estado (tipo String)
- dadosCompletos (tipo função) (verifica se os dados acimas estão preenchidos e retorna true, 
caso positivo, e false, caso negativo)


Crie uma função que receba os dois objetos acima criados, imprima os valores de suas propriedades
e por fim imprima o resultado da função chamada dadosCompleto() que deve verificar se todos 
os campos estão preenhidos.


Aluno: Danilo Pereira Viana - P2-B

*/

var aluno_1 = { //* Criando objeto 'aluno_1'

    nome: "Roger", // Tipo string
    idade: 26, // Tipo number
    filiacao: ["Reginaldo", "Joana"], // Array
    endereco: { // Objeto

        rua: "Ferroviaria",
        cidade: "Campina Grande",
        estado: "PB",

    },

    dadosCompletos: function() { //* Criando a função 'dadosCompletos'

        //! Se todos os campos de dados do objeto estiverem preenchidos, então:
        if (this.nome && this.idade && this.filiacao[0] && this.filiacao[1] 
        && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {

            return true; // Retorna o valor verdadeiro

        }

        else { //! Senão:

            return false; // Retorna o valor falso

        }

    },

}

var aluno_2 = { //* Criando objeto 'aluno_2'

    nome: "Fabio", // Tipo string
    idade: 21, // Tipo number
    filiacao: ["Jose", "Marileide"], // Array
    endereco: { // Objeto

        rua: "",
        cidade: "Patos",
        estado: "PB",

    },

    dadosCompletos: function() { //* Criando a função 'dadosCompletos'

        //! Se todos os campos de dados do objeto estiverem preenchidos, então:
        if (this.nome && this.idade && this.filiacao[0] && this.filiacao[1] 
        && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {

            return true; // Retorna o valor verdadeiro

        }

        else { //! Senão:

            return false; // Retorna o valor falso

        }

    },

}

function imprimirResultados() { //* Criando a função 'imprimirResultados'

    console.log("Imprimindo os resultados");
    console.log();

    //! Imprime as informações de 'aluno_1'

        console.log("Aluno 1: ");
        console.log();
        console.log("Nome: " + aluno_1.nome);
        console.log("Idade: " + aluno_1.idade);
        console.log("Nome do Pai: " + aluno_1.filiacao[0]);
        console.log("Nome da Mãe: " + aluno_1.filiacao[1]);
        console.log(aluno_1.endereco);
        console.log();
        console.log("Os dados estão preenchidos: " + aluno_1.dadosCompletos());

    console.log();

    //! Imprime as informações de 'aluno_2'

        console.log("Aluno 2: ");
        console.log();
        console.log("Nome: " + aluno_2.nome);
        console.log("Idade: " + aluno_2.idade);
        console.log("Nome do Pai: " + aluno_2.filiacao[0]);
        console.log("Nome da Mãe: " + aluno_2.filiacao[1]);
        console.log(aluno_2.endereco);
        console.log();
        console.log("Os dados estão preenchidos: " + aluno_2.dadosCompletos());

}

imprimirResultados(); //* Chama a função 'imprimirResultados'