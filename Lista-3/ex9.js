import  input from 'readline-sync'
let num = input.questionInt('digite um numero:')

let resp = num / 2
if(resp>20){
    console.log('o numero é maior que 20 é:', resp);
}