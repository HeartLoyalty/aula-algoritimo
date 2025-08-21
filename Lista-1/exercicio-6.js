import input from 'readline-sync'
let num1=input.questionInt("digite o 1° numero: ")
let num2=input.questionInt("digite o 2° numero: ")

let resp1=num1 - 3;
let resp2=num2 + 2;

let resultadofinal =(resp1+resp2) - 1;
console.log("resultado final é:", resultadofinal);
