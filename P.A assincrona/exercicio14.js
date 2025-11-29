//Peça o valor das compras até o cliente digitar 0. No final, mostre o total a pagar.

const input = require ('readline-sync');

let totalPg = 0;
let valor = -1;

while (valor !== 0) {
    valor =  input.questionInt("Digite um valor: ");
    totalPg = totalPg + valor;
};
console.log(`Valor total a pagar é ${totalPg.toFixed(2)} Reais`);
