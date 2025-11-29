//Mostre os primeiros N termos da sequência de Fibonacci. (1, 1, 2, 3, 5, 8...).

const input = require ('readline-sync');

let N = input.questionInt('Digite a quantidade de termos para a sequencia de Fibonacci-->');

let a = 1;
let b = 1;
console.log("sequencia de Fibonacci");

if (n >= a) {
    console.log(a);
    
}
if (n >=b) {
console.log(b);
    
}

for (let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);

    a = b;
    b = c;    
};
