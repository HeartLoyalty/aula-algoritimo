//Crie uma função que receba um array e retorne um objeto mostrando quantas vezes cada elemento aparece.
//Lista de animais
const animais = [
    "Leao",
    "Gaviao",
    "Ganso",
    "Peixe-palhaço",
    "Leao",
    "Peixe-palhaço",
    "Leao",
    "Ganso",
    "Gaviao",
    "Cobra",
    "Leao"
];
// funçao para buscar animais da mesma especie
function contadorEspecie(animais) {
    //constante para armazenar os valores
  const contador = {};
  //laco que percorre toda a lista
  for (let index = 0; index < animais.length; index++) {
    //cosntante que armazena os elementos percorridos
    const totalEspecie = animais[index];
    //cria uma condicao que todo elemento que percorrido se repitir soma mais uma
    if (contador[totalEspecie]) {
        contador[totalEspecie] = contador[totalEspecie] + 1;
    }
    //caso não se repita apenas atribua o valor 1 ao elemento
    else{
        contador[totalEspecie] = 1;
    }
    
  };
  //retorna os valores armezenados para o escopo global  
  return contador;
};
//constante que chama a funçao contador especies
const numEspecies = contadorEspecie(animais);

console.log("o numero de animais da mesma especie são:");
console.log(numEspecies);


