"use strict"

//Nivell 1 

    //Exercici 1 

         const array1 = [1, 2, 3];
         const array2 = [4, 5, 6];

         const arraysCombined = [...array1, ...array2];

    //Exercici 2

         function suma(...numeros) {
            return numeros.reduce((acumulat, numero)=> acumular + numero, 0)
         }

//Nivell 2 

    // Exercici 3 

         const objecte1 = {
            nom: 'meritxell',
            ciutat: 'barcelona'
         };
         const objecte2 = [...objecte1];

         objecte2.ciutat = 'girona';

         console.log(objecte1);
         console.log(objecte2);

    //Exercici 4 

        const numeros4 = [1, 2, 4, 5];

        const[primer, segon, ...resta] = numeros4;

        console.log(primer);
        console.log(segon);
        console.log(resta)

//Nivell 3 

    //Exercici 5 

        function acceptar (a, b, c){
            return a + b + c;
        }

        const array5 = [1, 2, 3]

        console.log(acceptar(...array5));

    //Exercici 6 

    const objecte3 = {
        nom: 'Meritxell',
        edat: 26,
    };

    const objecte4 = {
        ciutat: 'Berlin',
        anys: 2,
    };

    const objecte5 = {...objecte3, ...objecte4};
    
    


