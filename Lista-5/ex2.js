import input from "readline-sync";
let number = input.questionInt("Digite um numero;");
number = number + 1;
while (number<20) {
    console.log(number);
    number++
}