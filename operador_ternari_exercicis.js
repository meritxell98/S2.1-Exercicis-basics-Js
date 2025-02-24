"use strict"

//Nivell 1

    //Exercici 1 

        function potConduir(edat) {

            edat >= 18 ? console.log('Pots conduir') : console.log('No pots conduir')
         }

         potConduir(16)
         potConduir(27)

    //Exercici 2 

        function biggerThan(num1,num2) {
            num1 > num2 ? console.log('num1 és més gran') : console.log('num2 és més gran')
        }

        biggerThan(10, 34)
        biggerThan(10,4)


//Nivell 2 

    // Exercici 3 

    function determinarNumero(numero){
        numero > 0 ? console.log("Positiu"): numero <0 ? console.log("Negatiu") : console.log("Zero")
    }

    function trobarMaxim(a, b, c) {
        a > b ? (a > c ? console.log(`El numero més gran és ${a}`) : console.log(`El numero més gran és ${c}`)) : (b > c ? console.log(`El numero més gran és ${b}`) : console.log(`El numero més gran és ${c}`));
    }

    trobarMaxim(3,7,5)
    trobarMaxim(10,2,8)
    trobarMaxim(1,3,8)


//Nivell 3 

    //Exercici 4

    let numeros = [1,3,4,6,9,10,12] 

        function parOlmpar(array) {
            for (let i = 0; i < array.length; i++) {
                
            (i % 2) ? console.log(`${i} és imparell`) : console.log(`${i} és parell`) ;
            }
        }

        parOlmpar(numeros)
