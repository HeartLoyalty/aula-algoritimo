import input from 'readline-sync'
let numone = input.questionInt('Digite o primeiro numero:');
let numtwo = input.questionInt('Digite o segundo numero:');

    numone = numone + 1

    while (numone!==numtwo) {
        console.log(numone);
        numone++;
    }
