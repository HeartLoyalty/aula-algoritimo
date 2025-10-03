import input from 'readline-sync'
let n1 = input.questionInt('digite um numero:');
let n2 = input.questionInt('digete um segundo numero:')

if(n1<n2){
console.log(n1, n2);
}else{
    console.log(n2, n1);
} 