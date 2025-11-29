//Leia vários números até o usuário digitar 0. Mostre:

const input = require ('readline-sync');


let numero = -1;
let soma = 0;
let cont = 0;
let media = 0
let maior = null;
let menor = null;

while (numero !== 0) {
     numero = input.questionInt("Digite um numero que nao seja zero: ");
    if (numero !==0) {
        soma = soma + numero;
        cont++;
    
    if (maior == null|| numero > maior) {
        maior = numero;
        
        }
        if (menor == null || numero < menor) {
            menor = numero;
        }
    }
    
}
if (cont > 0) {
    media = soma/cont;
    console.log("quantidade", cont);
    console.log("media", media);
    console.log("maior numero", maior);
    console.log("menor numero", menor);
};
