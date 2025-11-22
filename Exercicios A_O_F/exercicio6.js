//Crie um array de objetos representando livros com título, autor e ano. Crie uma função que retorne apenas os livros publicados depois de 2010.

const Livros = [{
    Nome: "A Sombra do Vento",
    Autor: "Carlos Ruiz Zafón",
    Ano: 2001
},
{
    Nome: "A Estrada",
    Autor: "Cormac McCarthy",
    Ano: 2006
},
{
    Nome: "O Problema dos Três Corpos",
    Autor: "Cixin Liu",
    Ano: 2014
},
{
    Nome: "O Andar do Bebado",
    Autor: "Leonard Mlodinow",
    Ano: 2008
},
{
    Nome: "Os Testamentos",
    Autor: "Margaret Atwood",
    Ano: 2019
},
{
    Nome: "Ensaio sobre a Cegueira",
    Autor: "José Saramago",
    Ano: 1995
},
{
    Nome: "Perdido em Marte",
    Autor: "Andy Weir",
    Ano: 2011
},

];
//Cria uma funçao que filtra apenas os livros publicados depois de 2010
function livrosSelectForAnos(Livros) {
    //Cria um array para armazenar os valores.
    const livrosAno = [];
    for (let i = 0; i < Livros.length; i++) {
        
        const livrosRecentes  = Livros[i];
        //Cria uma condição que determina que os valores a serem armazenados tem de ser maiores que 2010.
        if (livrosRecentes.Ano>2010) {
            //empurra os resultados condicionados para o array vazio
            livrosAno.push(livrosRecentes);
        };   
    }
    //devolve os valores a onde a função foi chamada
    return livrosAno
};

const totalLivrosRecentes = livrosSelectForAnos(Livros);

console.log("Estes são todos os livros publicados depois de 2010");
console.log("---------------------------------------------------");
console.log(totalLivrosRecentes);
console.log("---------------------------------------------------");


