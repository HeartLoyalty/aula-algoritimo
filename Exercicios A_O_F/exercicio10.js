//Crie um array de objetos representando jogadores com nome e pontos. Crie uma função que retorne o array ordenado do maior para o menor ponto.

const jogadores = [
    {
        nome: 'Joao Frango',
        pontos: 100
    },
    {
        nome: 'Cadu Maverick',
        pontos: 20
    },
    {
        nome: 'Tank Evans',
        pontos: 50
    },
    {
        nome: 'Lani Aliikai',
        pontos: 70
    }
];

//funçao criada para percorrer o array e organizar de acordo com a condiçao imposta.
function ranking(jogadores) {
    const podio = jogadores.length;
    //laço FOR externo que controla o numero de passadas, como array possui 4 elementos colocamos o ( - 1) para ele comparar até o penultimo elemento já que a comparaçao envolve sempre o proximo elemento
    for (let i = 0; i < podio.length - 1; i++) {

        //aqui coloca-se o ( - r )para que evite a comparação de elementos já ordenados.
        for (let r = 0; r < podio.length - 1 - r; r++) {
            // condiciona a ordem dos elementos por pontos.
            if (jogadores[r].pontos > jogadores[r + 1].pontos) {
                //armazena temporariamente os elementos ordenados a partir da condição
                let rankingTemporario = jogadores[r];
                
                jogadores[r] = jogadores[r + 1];
                
                jogadores[r + 1] = rankingTemporario;
                
            }
            
        }
    }
//retorna o array com a posição dos elementos modificadas
return jogadores;
}
// armazena o resultado da funçaõ dentro de uma constante
const rankingDePontuacao = ranking(jogadores);
console.log("----------Ranking de jogadores------------");
// percorre a constante mostrando elemento um a um.
for (let index = 0; index < rankingDePontuacao.length; index++) {
    //constante que armazena os elementos.
    const jogador = rankingDePontuacao[index];
    // mostra no terminal os elementos sempre adicionando + 1 no index pois a posição inicial dele é zero, fazendo assim o array ordenado por ranking de pontuação.
    console.log(`${index + 1}° Lugar: ${jogador.nome} - ${jogador.pontos} pontos`);

    
    
}
