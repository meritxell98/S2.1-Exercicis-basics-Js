"use strict"

//Nivell 1

    //Exercici 1 

        function potConduir(edat) {

            let persona = edat >= 18 ? console.log('Pots conduir') : console.log('No pots conduir')
 
         }

    //Exercici 2 

        let num1 = 10;
        let num2 = 2;

        num1 > num2 ? console.log('num1 és més gran') : console.log('num2 és més gran')

//Nivell 2 

    // Exercici 3 

        let numero; 

        let resultat = 
        (numero = 0) ? console.log(`${numero} és zero`) :
        (numero > 0) ? console.log(`${numero} és positiu`) : console.log(`${numero} és negatiu`);

        function trobarMaxim(a, b, c) {

            let maxim = 
            (a > b) ? console.log('a és més gran') :
            (b > c) ? console.log('b és més gran') : console.log('c és més gran');
        
        }

//Nivell 3 

    //Exercici 4

        function parOlmpar() {
            let numeros = [] 

            for (let index = 0; index < numeros.length; index++) {
                
                let numero = (index % 2) ? console.log(`${index} és parell`) : console.log(`${index} és imparell`) ;
                
            }
        }
