import input from 'readline-sync'
let number = 20
while (number>=10) {
    let number = input.questionInt('Digite um numero menor que 10-->');

    if (number<10) {
        
        console.log(number);
    }
    
    
    
};