import input from 'readline-sync'
let Usuario = input.question("Digite seu nome de Usuario-->");
let password = input.questionInt("Digite a senha:");


while (password!==1234) {
    console.log("Acesso negado");  
    password = input.questionInt(" Digite a senha:");
    
}
console.log("--acesso permitido---");
console.log("---Seja Bem Vindo---");
console.log("---" ,Usuario, "---");


