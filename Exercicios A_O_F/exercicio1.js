//Crie um objeto que represente um aluno com nome, idade e curso. Crie uma função que receba esse objeto e retorne uma frase apresentando o aluno.

const aluno = {
    nome: "Juan Lopes",
    idade: 22,
    curso: "Desenvolvimento de Sistemas"
}

function apresentacao(aluno) {
    console.log("-----------------------------------------");
    
    console.log((aluno.nome)+" "+(aluno.idade )+" anos");
    console.log("Seja bem vindo ao curso de: ", (aluno.curso));
    
    console.log("-----------------------------------------");
    

}

apresentacao(aluno);
