//Peça uma palavra e conte quantas vogais ela tem//

const input = require('readline-sync')

//Cria uma variavel constante//
const palavra = input.question('Digite uma palavra:');
// cria um contador para percorrer letra por letra
let contadorVogais = 0;
//cria um laço de repetição para que o contador percorra toda a palvra inserida.//
	for(let i = 0; i < palavra.length; i++){
	    //Cria uma variavel para ser condicionado//
        let letra = palavra[i]
        //Cria uma condição para o contador de vogais contar apenas a letra que for igual a (a,e,i,o,u).//
		if( letra == "a"){
			contadorVogais ++;
			}	
            if( letra == "e"){
                contadorVogais ++;
                }
                if( letra == "i"){
                    contadorVogais ++;
                    }	
                    if( letra == "o"){
                        contadorVogais ++;
                        }	
                        if( letra == "u"){
                            contadorVogais ++;
                            }		
		
	}
    //exibe o resultado da contagem mostrando a palavra que foi digitada e o valor das vogais contidas nela//\
	console.log(`A palavra "${palavra}" tem ${contadorVogais} Vogais.`);