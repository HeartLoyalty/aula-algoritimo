//Crie um array com nomes. Crie uma função que receba um nome e retorne se ele existe no array.
//cria uma lista de nomes
const nomes = [
    "Juan",
    "Nathalia",
    "Pietro",
    "Daniel",
    "Marina",
    "Emanuely",
    "Marcos",
    "Alicia"
];
//cria uma função para buscar os nomes na lista
function buscarNomes(nomeBuscado, nomes){
    //cria um laço papa percorrer toda lista de momes
    for (let i = 0; i < nomes.length; i++) {
        //armazena os nomes dentro de uma constante
        const nomeAtual = nomes[i];
        //cria uma condição que diz que se o nome buscado estiver presente na lista de nomes retornara verdadeiro.
        if (nomeAtual === nomeBuscado) {
            return 'existe';
        }
    }
    //caso o nome não exista na lista retornara falso.
    return "nao existe";
};

console.log(("Juan"),":",buscarNomes("Juan",nomes));
console.log(("Nathalia"),":",buscarNomes("Nathalia",nomes));
console.log(("Pedro"),":",buscarNomes("Pedro", nomes));

