import input from "readline-sync"
let n1 = input.questionInt("Digite o primeiro numero:")
let n2 = input.questionInt("Digite o segundo numero:")

if(n1<n2){
    n1 = n1+5;
  
}
else{
    n2 = n2+5;
    
}

if(n1>n2){
    console.log("o numero é", n1);
    
}
else{
    console.log("o numero é", n2);
    
}