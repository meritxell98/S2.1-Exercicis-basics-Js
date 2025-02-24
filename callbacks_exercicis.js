"use strict"

 //Nivell 1 

    //Exercici 1 

        function processar(numero, myCallback) {
            myCallback(numero);
            return
        }
        function mostrarNumero(valor){
            console.log(`El número és ${valor}`)
        }

        processar(22, mostrarNumero)

    //Exercici 2 

        function operarSuma(num1, num2){
            let suma = num1 + num2;
            console.log(suma)
        }

        function calculadora(num1, num2, myCallback){
            myCallback(num1, num2);
        }

        calculadora(2, 4, operarSuma)

//Nivell 2 

    //Exercici 3 

        function saludar(nom){
            console.log(`Em dic ${nom}`)
        }

        function esperarISaludar(nom, myCallback) {
        
            setTimeout(() => {
                myCallback(nom);
            }, 2000);
        }

        esperarISaludar('Meritxell', saludar)

    //Exercici 4 
        
        let numeros = [1, 2, 3];

        function invocar(){
            console.log('hola')
        }

        function processarElements(array, myCallback) {
            for (let i = 0; i < array.length; i++) {
                myCallback(i)  
            }
        }

        processarElements(numeros, invocar);

//Nivell 3

    // Exercici 5

        function myDisplay(cadena) {
            console.log(cadena)
        }

         function processarCadena (cadena, myCallback) {
            let cadenaMajuscules = cadena.toUpperCase()
            myCallback(cadenaMajuscules)

         } 

         processarCadena(" Lorem, ipsum dolor sit amet consectetur adipisicing elit.", myDisplay)