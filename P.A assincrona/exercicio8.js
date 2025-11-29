import input from 'readline-sync'
let Usuario = input.question("Digite seu nome de Usuario-->");
let password = input.questionInt("Digite a senha:");

let senha = 1234
while (password!==senha) {
    console.log("Acesso negado");  
    password = input.questionInt(" Digite a senha:");
    
}
console.log("--acesso permitido---");
console.log("---Seja Bem Vindo---");
console.log("---" ,Usuario, "---");


