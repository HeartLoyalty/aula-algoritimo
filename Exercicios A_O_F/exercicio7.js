//Crie um array com objetos de itens (nome, quantidade, preço). Crie uma função que calcule o valor total do carrinho.

const produtos = [
    {
        nome:"Arroz Agulinha",
        preco: 26,
        quantidade: 2
    },
      {
        nome:"Café Torrado e Moido",
        preco: 15,
        quantidade: 1
    },
      {
        nome:"Oleo de Soja",
        preco: 6,
        quantidade: 2
    },
      {
        nome:"Leite Longa Vida",
        preco: 5,
        quantidade: 3
    },
];
//Cria uma funçao para fazer a multiplicaçao dos preços pela quantidade de produtos
function precoProdutos(produtos) {
    //Cria uma Array vazio para armazenar os valores.
    const precoPorQuantidade = [];
    //Cria um laço que percorre os itens um a um
    for (let i = 0; i < produtos.length; i++) {
        const tiposProdutos = produtos[i];
        //impõe uma condição de que se a quantidade do produtos for maior que 1, ele multiplicará o preço pela quantidade, e retornará esse valor.
        if (tiposProdutos.quantidade>1) {
            tiposProdutos.preco = tiposProdutos.quantidade * tiposProdutos.preco;
            precoPorQuantidade.push(tiposProdutos);

            // Se houver apenas um produto ele será multiplicado por 1 e retornara o preço de uma só quantidade
        }else{
            tiposProdutos.preco =  tiposProdutos.preco * 1;
            precoPorQuantidade.push(tiposProdutos);
        };
    }
    // retorna os valores armazenados para o escopo global
    return precoPorQuantidade;
    
};
//Cria uma função paara armazenar os valores de todos os produtos colocados no carrinho
function totalCarrinho(produtos) {
    // Cria uma variavel que recebe um valor
    let carrinho = 0;
    //Percorre todo o Array e efetua a multiplicação
     for (let index = 0; index < produtos.length; index++) {
        const countCar = produtos[index];
        //impõe a condição de que o preço tem que ser maior que zero
       if (countCar.preco>0) {
        //Soma a multiplicação e faz a atribuição do valor no carrinho
           carrinho += (countCar.preco * countCar.quantidade)
       }
    
    };

    return carrinho;
}
const totalCompras = totalCarrinho(produtos);

const exibirProdutos = precoProdutos(produtos);
console.log("---------------produtos-----------------------");
console.log(exibirProdutos);
console.log("---------------total a pagar------------------");

console.log("---------------Valor: "+totalCompras.toFixed(2)+" R$"+"------------------");






