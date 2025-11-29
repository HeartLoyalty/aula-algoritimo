//Verifique se um número informado é primo (divisível apenas por 1 e ele mesmo).

const input =  require ("readline-sync");

let number = input.questionInt("digite um numero e verifique se ele é um numero primo--> ")
let primo = true;

if (number <= 1) {
    primo = false
}else{
    for (let i = 2; i < number; i++){
        if (number%i == 0) {
            primo = false

            break
        } 
    }
}
if (primo) {
    console.log('o numero é primo');
    
}else{
    console.log('o numero não é primo');
    
};