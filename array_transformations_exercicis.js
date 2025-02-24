"use strict"

// Nivell 1

    //Exercici 1

         const numeros = [1, 2, 3, 4];
         const quadratNumeros = numeros.map((valor) => valor * valor)
         console.log(quadratNumeros)
    
    //Exercici 2 

        const numeros2 = [1, 2, 3, 4];

        const numerosParells = numeros2.filter((valor) => valor % 2 === 0)

        console.log(numerosParells)

    //Exercici 3 

        const array3 = [1, 10 , 8, 11];

        const biggerThan10 = array3.find((element)=> element > 10);

        console.log(biggerThan10)

    //Exercici 4

        const array4 =  [13, 7, 8, 21];

        const sumaTotal = array4.reduce ((total, numero) => {
           return total + numero;
        }, 0);

        console.log(sumaTotal)
        
    // Exercicis 5     

        const array5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

        const resultat = arr => arr.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

        console.log(resultat(array5)); 

//Nivell 3 

    //Exercici 6  

         const array6 = [11, 12, 13, 14];

         const someBiggerThan10 = array6.some((element) => element >= 10);

         const everyBiggerThan10 = array6.every((valor) => valor >= 10);
         
         console.log(someBiggerThan10);
         console.log(everyBiggerThan10);