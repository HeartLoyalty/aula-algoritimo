import input from 'readline-sync'

let palavra = input.question("Digite uma palavra:")

let contadorvogais = 0;
let vogais = "aeiou"

for (let v = 0; v < palavra.length; palavra++) {
    let letra = palavra[v];
    if (vogais.includes(letra)) {
        contadorvogais++;
        
    }

    
}console.log('a palavra:', palavra , 'tem', contadorvogais, 'vogais');


