//Crie um array de objetos contendo nome e idade. Crie uma função que retorne apenas as pessoas com mais de 18 anos.

const funcionarios = [
    {
        nome: "Fabiano",
        idade: 43,
        cargo: "Gerente"
    },
     {
        nome: "Josevaldo",
        idade: 23,
        cargo: "Auxilar Administrativo"
    },
     {
        nome: "Andressa",
        idade: 18,
        cargo: "Vendas"
    },
     {
        nome: "Rogerio",
        idade: 17,
        cargo: "Jovem Aprendiz"
    },
     {
        nome: "Nicolas",
        idade: 17,
        cargo: "Jovem Aprendiz"
    },
    
];
//Cria uma função que armazena e mostra apenas os funcionarios maiores de 18 anos
function funcionariosMaisVelhos(funcionarios) {
    //Array vazio para armazenar os objetos condicionados.
    const maisVelhos = [];

    for (let i = 0; i < funcionarios.length; i++) {
        const contadorFuncionarios = funcionarios[i];
            if (contadorFuncionarios.idade>18) {
                //empurra para o array maisVelhos os objetos que atenderem a condição
                maisVelhos.push(contadorFuncionarios);
            }
    }
    //retorna os valores armazenados para o escopo global
    return maisVelhos;
};

const NumeroDeFuncionarios = funcionariosMaisVelhos(funcionarios);

console.log("------------funcionarios maiores de 18 anos----------------");
console.log(NumeroDeFuncionarios);

