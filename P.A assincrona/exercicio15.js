//Monte um menu interativo com o seguinte formato:

const input = require ("readline-sync");

let opcao = -1;

while (opcao !== 0 ) {
    

console.log("-----------Menu Principal---------");

console.log("1 - Calcular tabuada.");
console.log("2 - Verficar Numero Primo");
console.log("3 - Gerar Sequência de Fibonacci");
console.log("4 - Calcular Fatorial");
console.log("0 - Sair");

console.log("----------------------------------");

opcao = input.questionInt("Escolha uma opcao");
switch (opcao) {
    case 1:
        console.log(tabuada);
        
        let tabuada = input.questionInt("Escreva um numero e mostrarei a tabuada deste numero-->");
        
        let multiplicação = 1
        
        while (multiplicação<=10) {
            console.log(tabuada, ('*'), multiplicação, ('='), tabuada * multiplicação);
            multiplicação++;
            
        }
        
        break;

    case 2:
        console.log("Verifique se o numero e primo");
        
        let number1 = input.questionInt("digite um numero e verifique se ele é um numero primo--> ")
        let primo = true;
        
        if (number <= 1) {
            primo = false
        }else{
            for (let i = 2; i < number1; i++){
                if (number1%i == 0) {
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
        break;
        case 3:
            console.log("Sequencia Fibonacci");
            
            let N = input.questionInt('Digite a quantidade de termos para a sequencia de Fibonacci-->');
            
            let a = 1;
            let b = 1;
            console.log("sequencia de Fibonacci");
            
            if (n >= a) {
            console.log(a);
            
            }
            if (n >=b) {
            console.log(b);
            
            }
            
            for (let i = 3; i <= n; i++) {
            let c = a + b;
            console.log(c);
            
            a = b;
            b = c;    
            };
            break;

        case 4:
            console.log("calculando fatorial");
            
            let number = input.questionInt('Digite um numero--->');
            
            let fatorial = 1;
            
            if (number == 0) {
                fatorial = 1;
            
            }else{
                for (let i = number; i > 1; i--) {
                   fatorial = fatorial * i
                   console.log(`${i} => fatorial = ${fatorial} `);
                   
                    
                }
                console.log(`${number}! = ${fatorial}`);
                
            };
            break;
             case 0:
                
            console.log("Saindo...");
            break;
        default:
            console.log("Opcao invalida");
    }
};
