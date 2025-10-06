import input from 'readline-sync'

let tabuada = input.questionInt("Escreva um numero e mosrei a tabuada deste numero-->");

let multiplicação = 1

while (multiplicação<=10) {
    console.log(tabuada, ('*'), multiplicação, ('='), tabuada * multiplicação);
    multiplicação++;
    
}