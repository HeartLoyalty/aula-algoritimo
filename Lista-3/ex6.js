import  input from 'readline-sync'
let num1 = input.questionInt("digite um numero:")
let resp = num1 * 3 
if(resp>15){
    console.log("o numero é:", resp)
}