import  input from 'readline-sync'
let num1 = input.questionInt("digite o numero 1:")
let num2 = input.questionInt("digite o numero 2:")

 let resp1 = num1 * 10 
 let resp2 = num2 * 10
 let resp3 = (num2 + num1)
    
    if(resp3<20){
    console.log("resposta1",resp1) 
     console.log("resposta2",resp2)   
}  