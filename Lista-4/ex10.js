import input from "readline-sync"
let n1 = input.questionInt("Digite o primeiro numero:")
let n2 = input.questionInt("Digite o segundo numero:")
let numero
if (n1<n2) {
    (n1 = n1 * 10)
    (n2 = n2 / 2)
    (n1 = n1 + n2)
}else{
    (n2 = n2 * 10)
    (n1 = n1 / 2)
    (n2 = n1 + n2)
}
if (numero % 2 === 0) {
    console.log("o numero", numero , "é par");
    
    
} else {
    console.log( "o numero", numero , "é impar");
    
}
