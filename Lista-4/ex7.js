import input from "readline-sync"

let n1 = input.questionInt("digite o primeiro numero:")
let n2 = input.questionInt("digite o segundo numero:")
let n3 = input.questionInt("digite o terceiro numero:")

if(n1<n2<n3){
    console.log(n1,n2,n3);
    
}else{
    console.log(n3,n2,n1);
    
}
if(n2<n3<n1){
    console.log(n2,n3,n1);
    
}else{
    console.log(n1,n3,n2);
    
}
if(n3<n1<n2){
    console.log(n3,n2,n1);
    
}else{
    console.log(n1,n2,n3);
    
}    
    
