import input from 'readline-sync'

let nome = input.question('Digite seu nome:');

console.log("Olá", nome);
console.log("Mostre todos os numeros de 1 a 10");

let numero = 1;

while (numero<=10) {
    console.log(numero);
    numero++;
}

