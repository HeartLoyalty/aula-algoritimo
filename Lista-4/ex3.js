import input from "readline-sync"
let n1 = input.questionInt("Digite o numero:")

if(n1>10){
    console.log("o Numero maior que 10 é:", n1);
    
}
else{
    console.log("o NUmero menor ou igual a 10 é", n1);
    
}