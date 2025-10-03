import input from "readline-sync"
let n1 = input.questionInt("Digite o primeiro numero:")
let n2 = input.questionInt("Digite o segundo numero:")
let n3 = input.questionInt("Digite o terceiro numero:")

let MenorNumero = n1

if(n2<MenorNumero){
    MenorNumero = n2
    
}
if(n3<MenorNumero){
    MenorNumero = n3
}

MenorNumero = MenorNumero + 5;

console.log("o restulado do Menor Numero + 5 é:", MenorNumero);

