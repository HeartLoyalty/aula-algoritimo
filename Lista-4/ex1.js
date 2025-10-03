import input from 'readline-sync'
let n1 = input.questionInt("Digite o primeiro numero:")
let n2 = input.questionInt("Digite o segundo numero:")
if(n1<n2){
    console.log("o numero menor é:", n1);
    
}
else{
    console.log("o numero menor é:", n2);
    
}