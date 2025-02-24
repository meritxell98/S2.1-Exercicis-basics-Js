"use strict"

//Nivell 1 

    //Exercici 1 

         const array1 = [1, 2, 3];
         const array2 = [4, 5, 6];

         const arraysCombined = [...array1, ...array2];

         console.log(arraysCombined)

    //Exercici 2

         function suma(...numeros) {
            return numeros.reduce((acumular, numero)=> acumular + numero, 0)
         }

        console.log(suma(1,2,3))
        console.log(suma(10,20,30))

//Nivell 2 

    // Exercici 3 

         const objecte1 = {
            nom: 'meritxell',
            edat: 26,
            ciutat: 'barcelona'
         };
         const objecte2 = {...objecte1};

         objecte2.ciutat = 'girona';

         console.log(objecte1);
         console.log(objecte2);

    //Exercici 4 

        const numeros4 = [1, 2, 4, 5];

        const[primer, segon, ...altres] = numeros4;

        console.log(primer);
        console.log(segon);
        console.log(altres)

//Nivell 3 

    //Exercici 5 

        function mostrarInformacio (nom, edat, ciutat){
            console.log(`Nom: ${nom}, Edat: ${edat}, Ciutat: ${ciutat}`)
        }

        const persona = ["Meritxell", 26, "Barcelona"]

        mostrarInformacio(...persona)

    //Exercici 6 

    const objecte3 = {
        nom: 'Meritxell',
        edat: 26,
    };

    const objecte4 = {
        ciutat: 'Berlin',
        mascotes: 2,
    };

    const objecte5 = {...objecte3, ...objecte4};

    console.log(objecte5)
    
    


