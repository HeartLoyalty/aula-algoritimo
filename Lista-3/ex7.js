import  input from 'readline-sync'
let num1 = input.questionInt("digite o numero 1:")
let num2 = input.questionInt("digite o numero 2:")
let num3 = input.questionInt("digite o numero 3:")

let resp = num1 + num2 + num3
if(resp>20){
    console.log("a soma dos numeros é:", resp);
    
}