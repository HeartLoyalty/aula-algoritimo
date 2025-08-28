import  input from 'readline-sync'
let idade=input.questionInt("digite sua idade:")
if(idade>=18){
    console.log("voce pode tirar habilitacão")
}else{
    console.log("voce não pode tirar habilitação")

}