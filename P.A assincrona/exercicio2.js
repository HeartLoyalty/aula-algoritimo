import input from 'readline-sync'

let numberfinal = input.questionInt("digite o numero final:");

console.log('--Numeros Impares--');
for (let impares = 0; impares <= numberfinal; impares++) {
    if (impares % 2 !== 0) {
        console.log(impares);
        
    }
    
}
console.log('--Numeros Pares--');
for (let Pares = 0; Pares <= numberfinal; Pares++) {
    if (Pares % 2 == 0) {
        console.log(Pares);
        
    }
}

