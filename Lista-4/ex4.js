import input from "readline-sync"
let n1 = input.questionInt("Digite o primeiro numero:")
let n2 = input.questionInt("Digite o segundo numero:")
let n3 = input.questionInt("Digite o terceiro numero:")

let NumeroMaior = n1;

if(n2>NumeroMaior){
    NumeroMaior = n2;
}
if(n3>NumeroMaior){
    NumeroMaior = n3;
}
console.log("O numero maior é:", NumeroMaior);

