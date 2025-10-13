import input from 'readline-sync'
        let number = input.questionInt("Digite qualquer numero:");
         let numbertwo = input.questionInt("Digite qualquer numero:");

         let smallerorbigger = number
         let biggerorsmaller = numbertwo 
    while (number>0 && numbertwo>0) {
         number = input.questionInt("Digite qualquer numero:");
          numbertwo = input.questionInt("Digite qualquer numero:");
        if (number>smallerorbigger) {
            smallerorbigger = number
            
        }if (numbertwo<biggerorsmaller) {
            biggerorsmaller = numbertwo  
        } 
        
    }

    console.log("numeros",smallerorbigger);
    console.log("numeros",biggerorsmaller);