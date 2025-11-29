//Calcule o fatorial de um número informado pelo usuário. Exemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

const input = require ('readline-sync');

let numero = input.questionInt("Digitte um numero para calcular o fatorial dele:  ");

while (numero!==0) {
    numero = numero * (numero - 1);
}
console.log(numero);

