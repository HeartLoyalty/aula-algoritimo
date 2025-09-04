import  input from 'readline-sync'
let num1 = input.questionInt("digite o numero 1:")
let num2 = input.questionInt("digite o numero 2:")
let num3 = input.questionInt("digite o numero 3:")

let resp1 = num1 + 5
let resp2 = num2 + 5
let resp3 = num3 + 5
if (resp1>10){
    console.log('resposta 1:', resp1)
}
if (resp2>10){
    console.log('resposta 2:', resp2);
    
}
if (resp3>10){
    console.log('resposta 3:', resp3);
}

    
