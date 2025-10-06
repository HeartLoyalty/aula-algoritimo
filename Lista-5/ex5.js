import input from 'readline-sync'

let numone = input.questionInt('Digite o primeiro numero --> ');
let numtwo = input.questionInt('Digite o segundo numero --> ');
let numtree = input.questionInt('Digite o terceiro numero --> ');
if (numone>numtree , numtwo>numtree) {
    if (numone<numtwo) {
        numone= numone + 1;
        while (numone!==numtwo) {
            console.log(numone);
            numone++;
            
        }
    }else{
        numtwo = numtwo + 1;
        while (numtwo!==numone) {
            console.log(numtwo);
            numtwo++;
            
            
        }
    }
}else{
    if (numone>numtwo , numtree>numtwo) {
        if (numone<numtree) {
            numone = numone + 1;
            while (numone!==numtree) {
                console.log(numone);
                numone++;
            
            }
        
        }else{
            numtree = numtree + 1;
            while (numtree !== numone) {
                console.log(numtree);
                numtree++;
                
                
            }
        }
    
    }else{
        if (numtwo>numone , numtree>numone) {
            if (numtwo<numtree) {
                
                numtwo = numtwo + 1;
                while (numtwo!==numone) {
                    console.log(numtwo);
                    numtwo++;
                }
                
                
            }else{
                numtree = numtree + 1;
                while (numtree!==numtwo) {
                    console.log(numtree);
                    numtree++;
                    
                    
                }
            }
            
        }
    }
}

