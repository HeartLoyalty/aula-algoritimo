import input from 'readline-sync'

let alunos = input.questionInt('Digite a quantidade de alunos');

for (let numero = 1; numero <= alunos; numero++) {
   console.log('Aluno'+ numero +':');

let nota1 = input.questionInt('Digite a primeira nota:')
let nota2 = input.questionInt('Digite a segunda nota:')
let nota3 = input.questionInt('Digite a terceira nota:')
    
nota1 = nota1 + nota2 + nota3;
nota1 = nota1 / 3;
if (nota1>=7) {
    console.log(nota1,"Aprovado");
    
    
} else {
    console.log(nota1,"reprovado");
    
}
}