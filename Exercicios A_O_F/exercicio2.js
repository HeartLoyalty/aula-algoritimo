//Crie um array contendo objetos de produtos com nome e preço. Crie uma função que receba o array e retorne apenas os produtos com preço acima de 50.

const produtos = [{
    nomeProduto: "Sansung Galaxy A56",
    preco: 1659
},
{
    nomeProduto: "Fone jbl v3",
    preco: 50
},
{
    nomeProduto:"Suporte para Celular",
    preco: 20
},
{
    nomeProduto:"Caneta Bic",
    preco: 2
}    

];


function produtosAcimade(produtos) {
    //cria uma array vazio para armazenar os produtos
    const produtosMQ = [];
    //inicia um laço percorrendo todo o array
    for (let i = 0; i < produtos.length; i++) {
        //cria uma constante que pega os objetos dentro do array
        const produtosCaros = produtos[i];
        //inicia uma condiçao para que diz que a propriedade preco tem de de ser maior ou igual a 50
        if (produtosCaros.preco>=50) {

            //faz com que o array vazio pegue os valores filtrados pela condição
            produtosMQ.push(produtosCaros);            
        }
        
    }
    //retorna o array que armazena os valores filtrados dentro do laço
    return produtosMQ;
};
    //cria uma constante que armazena o resultado retornado na função
    const produtosPrecoAcima = produtosAcimade(produtos);

    console.log(produtosPrecoAcima);
    