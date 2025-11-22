//Crie uma função que receba um array de números representando notas e retorne a média final.

const Notas = [
    {math: 7},
    {physics: 8},
    {history: 4},
    {portuguese: 10}
];

function calcMedia(Notas) {
    //cria uma variavel para armazenar o valor da soma.
    let somaTotal = 0;
    //cria uma constante que armazena o numero do objetos dentro do array
    const totalMaterias = Notas.length;
    //inicia o laço percorrendo todo o array
    for (let i = 0; i < totalMaterias; i++) {
        //pega o objeto da nota atual
        const objetoNotaAtual = Notas[i];
        //cria uma constante que pega os  valores dos objetos do array percorrido
        const valorNota = Object.values(objetoNotaAtual)[0];
        //soma todos os valores e guarda na soma total
        somaTotal+=valorNota;
        //cria uma condicional que diz que se o totalMaterias for maior que 0
    }if (totalMaterias>0) {
        //retorna a divisão da soma dos valores do objeto pelo numero de objetos dentro do array
        return somaTotal / totalMaterias;
    }else{
        return 0;
    }
}
const totalMedia = calcMedia(Notas);
console.log('a media final e: '+ (totalMedia.toFixed(2)));


   
        

        