import input from "readline-sync"
let n1 = input.questionInt("Digite o numero:")

if(n1>10){
    console.log("o numero é maior que 10.");
    
}
else{
    console.log("o numero é menor ou igual a 10.");
    
}