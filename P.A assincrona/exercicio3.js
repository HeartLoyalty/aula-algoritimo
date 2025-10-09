import input from 'readline-sync'

console.log('--Me de 5 Numeros e veja a soma--');
let soma = 0;
let resultado = '';
let contador = 1;

while (contador <= 5) {
    let n = input.questionInt('Digite o ' + contador + ' numero --> ');
    soma += n;
    resultado += n;
    if (contador < 5) {
        resultado += ' + ';
    }
    contador++;
}
console.log('-----Soma dos cinco números-----');
console.log(resultado, '=', soma);

