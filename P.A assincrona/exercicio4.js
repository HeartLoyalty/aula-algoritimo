import input from 'readline-sync'

let initialnumber = input.questionInt('Digite um numero:');

while (initialnumber >= 0) {
    console.log(initialnumber);

    initialnumber--;
  
}