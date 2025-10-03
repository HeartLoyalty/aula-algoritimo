import  input from 'readline-sync'

let num1 =input.questionInt("digite um numero:")
let num2 =input.questionInt("digite outro numero:")
if(num2!=0){
    let resp1= num1 / num2;
    let resp2=Math.ceil(( resp1 - parseInt (resp1))*num2);

console.log("o restante é:", resp2, "ou", num1%num2);
}else{
    console.log("impossivel divisão por zero");
}