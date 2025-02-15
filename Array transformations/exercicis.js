"use strict"

// Nivell 1

    //Exercici 1

         const numeros = [1, 2, 3, 4];
         const map1 = numeros.map((valor) => valor * valor)
    
    //Exercici 2 

        const numeros2 = [1, 2, 3, 4];

        numeros2.filter((valor) => valor % 2 === 0)

    //Exercici 3 

        const array3 = [1, 10 , 8, 11];

        array3.find((element)=> element > 10);

    //Exercici 4

        const array4 =  [13, 7, 8, 21];

        const sumaTotal = array4.reduce ((total, numero) => {
           return total + numero;
        }, 0);
        
    // Exercicis 5     

        const array5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

        const resultat = arr => arr.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

        console.log(resultat(array5)); // 140

//Nivell 3 

    //Exercici 6  

         const array6 = [11, 12, 13, 14];

         const x = array6.some((element) => element >= 10);

         const y = array6.every((valor) => valor >= 10);
         
         console.log(x);
         console.log(y);