//Crie um objeto representando uma conta com agência, número da conta, senha, saldo e histórico de operações. Crie um sistema com as funções:

//validar acesso (recebe agência, conta e senha)
//exibir saldo
//realizar saque (somente se houver saldo)
//No saque, exiba a quantidade de cédulas entregues usando as notas: 100, 50, 20 e 10, utilizando //o menor número possível de cédulas.
const input = require('readline-sync');

const contasCadastro =[
    {
    agencia:  "0001",
    numeroDaConta: "123456",
    senha: "2645",
    saldo: 1550.75,
    historico: ["Deposito inicial R$ 1550,75"]

},
 {
    agencia:  "0001",
    numeroDaConta: "987654",
    senha: "5481",
    saldo: 2000.65,
    historico: ["Deposito inicial R$ 2000.65"]

}
];
//Cria uma variavek que vai receber o array que sera validado.
let contaLogada = null;
//Cria um array que armazena os valores das cédulas.
const notasDisponiveis = [100,50,20,10];
//Cria uma função para efetuar o Saque
function realizarSaque(conta) {
    console.log("-----------Realizar Saque-----------");
    //Mostra o saldo atual da conta.
    console.log(`Saldo Atual: R$ ${conta.saldo.toFixed(2)}`);
    //Cria uma constante que recebe um numero e armazena o valor colocado pelo usuario.
    const valorSaque = parseFloat(input.question("Digite um valor para saque (multiplo de 10): "));
    //Cria a condição de que o numero recebido tem de ser multiplo de 10.
    if (valorSaque % 10 !== 0 || valorSaque <= 0) {
        console.log("X ERRO: O valor deve ser um numero positivo e multiplo de R$ 10.");
        return;
        
    }
    //Cria uma condição de que o valor recebido não pode ser maior do que o saldo da conta.
    if (valorSaque > conta.saldo) {
        console.log(`x ERRO: saldo insuficiente. Seu saldo atual é R$ ${conta.saldo.toFixed(2)}`);
        return;
        
    }
    //subtrai do saldo da conta o valor recebido no caso o valor de saque.
    conta.saldo -= valorSaque;
    //faz com que o valor de saque armazenado seja enpurrado para o historico mostrando o deposito inicial e a quantia que foi sacada.(toFixed(2)) usado no final para adicionar 2 numeros decimais no final do numero.
    conta.historico.push(`Saque R$ ${valorSaque.toFixed(2)}`);
    //Se atendidas as condições para o saque, essa mensagem aparece no terminal mostrando que a processo de saque foi efetuado.
    console.log(`Saque de ${valorSaque.toFixed(2)} Realizado com sucesso!`);
    
    //Cria uma variavel que atribui o valor de Saque ao valor restante que deverá ser pago em cedulas.
    let valorRestante = valorSaque;
    // cria um array para armazenar o numero de cedulas ultilizadas para efetuar o saque.
    let contagemDeCédulas = {};

    console.log("--------- DIstribuiçao de Cédulas ----------");
    //cria o laço para percorrer os valores de notas disponiveis
    for (let i = 0; i < notasDisponiveis.length; i++) {
        const nota = notasDisponiveis[i];
        //Cria uma variavel para armazenar o resultado de cedulas ultilizadas para o saque (Math.floor) garante que entregue apenas cedulas inteiras.
        let NumeroCedulas = Math.floor(valorRestante/nota);
        
        //Cria uma dondiçao que determina que o resultado da divisão do numero de cedulas não pode ser zero, fazendo assim passar para a cedula seguinte
        if (NumeroCedulas>0) {
            //Diz o valor total que foi pago com as cedulas
            contagemDeCédulas[nota] = NumeroCedulas;
            //Subtrai o numero de cedulas do valor restante, fazendo com que o laço se repita com a proxima cedula a ser ultilizada com o valor restante a ser pago
            valorRestante -= NumeroCedulas * nota;
            //Mostra o numero de cedelas ultilizadas para o saque.
            console.log(`R$ ${nota}: ${NumeroCedulas} cedula(s)`); 
        }
        //Faz com que a laço termine quando não tiver mais valor a ser pago
        if (valorRestante === 0 ) {
            break;
        }
    }   
    
    
    
}

function validarAcesso(agencia, conta, senha) {
    for (let i = 0; i < contasCadastro.length; i++) {
        const contaAtual = contasCadastro[i];
        if (
            contaAtual.agencia === agencia &&
            contaAtual.numeroDaConta === conta &&
            contaAtual.senha === senha

        ) {
            console.log("Acesso liberado! Seja Bem vindo");
            return contaAtual;
            
        }
        
    }
    console.log("Acesso negado: Agencia, Conta ou Senha estão incorretos.");
    return false
    
}
function menuPrincipal(conta) {
    let opcao = "";
    while (opcao!== "3") {
        console.log("----------------Menu----------------------");
        console.log("1. Realizar Saque");
        console.log("2. Mostrar Saldo e Historico");
        console.log("3. Sair");
        console.log("------------------------------------------");

        opcao = input.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1":
                realizarSaque(conta);
                
                break;
            case "2":
                 console.log("---------------------------------------------");
                 console.log("                SALDO DA CONTA               ");
                 console.log("---------------------------------------------");

                console.log(`Extrato da Conta: ${conta.numeroDaConta}`)
                console.log(`Saldo: R$ ${conta.saldo.toFixed(2)}`);
                console.log("Historico de Operações:");
                for (let index = 0; index < conta.historico.length; index++) {
                    console.log(conta.historico[index]);

                    
                    
                }
                break;

                
            case "3":
                console.log("Sessão encerrada");
                break;
                    
        
            default:
                console.log("Opção invalida. Tente novamente.");

                
        }
    }
}

function IniciarSistema(){
    console.log("---------------------------------------------");
    console.log("        SISTEMA DE ACESSO BANCARIO           ");
    console.log("---------------------------------------------");

    const infoAg = input.question("Digite sua Agencia: ");
    const infoCnt = input.question("Digite sua Conta: ");
    const infoSenha = input.question("Digite sua Senha: ",{hideEchoBack: true});
    
    contaLogada = validarAcesso(infoAg, infoCnt, infoSenha);
    if (contaLogada) {
      menuPrincipal(contaLogada);
        
    }
}
IniciarSistema();