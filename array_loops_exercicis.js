"use strict"

 //Nivell 1 

    //Exercici 1

         const noms = ['Anna', 'Bernat', 'Clara'];
         noms.forEach((nom) => console.log(nom));

    //Exercici 2 

         for (const element of noms) {
            console.log(element);
         }

    //Exercici 3 

        const array3 = [1, 2, 3, 4, 5, 6];   
        const esParell = array3.filter ((element) => element % 2 === 0)
        console.log(esParell)

    //Exercici 4 

         let obj = { 
            nom: "Ona", 
            edat: 25, 
            ciutat: 'Barcelona', 
        };

        for (const key in obj) {
            console.log(`${key}: ${obj[key]}`)
        }

    //Exercici 5 

        let numeros4 = [1, 2, 3, 4, 5, 6];

        for (const value of numeros4) {
            if(value > 5){
                break;
            }
            console.log(value);
        }

//Nivell 3 

    //Exercici 6 

        let nomsPersones = ['Anna', 'Bernat', 'Clara'];

        for (const [index, nom] of nomsPersones.entries()) {
            console.log(`Index: ${index}, Value: ${nom}`)
        }