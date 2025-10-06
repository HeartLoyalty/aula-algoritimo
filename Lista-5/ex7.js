import input from "readline-sync"

let fnumber = input.questionInt('Digite um numero maior que 10-->');
let snumber = input.questionInt('Digite um numero menor que 5-->');

while (fnumber>10 , snumber<5) {
    console.log(fnumber , snumber);
}