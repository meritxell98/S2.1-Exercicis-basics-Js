"use strict"

 //Nivell 1 

    //Exercici 1 

        function processar(nombre, myCallback) {
            myCallback(nombre);
        }
        function mostrarNombre(valor){
            console.log(`El nombre és ${valor}`)
        }

        processar(22, mostrarNombre)

    //Exercici 2 

        function mostrarResultat(numero1, numero2){
            let suma = num1 + num2;
            console.log(suma)
        }

        function calculadora(num1, num2, myCallback){
            myCallback(num1, num2);
        }

        calculadora(2, 4, mostrarResultat)

//Nivell 2 

    //Exercici 3 

        function saludar(nom){
            console.log(`Em dic ${nom}`)
        }

        function esperarISaludar(nom, myCallback) {
            let nom = "meritxell"
            setTimeout(myCallback, 2000)
        }

        esperarISaludar(nom, saludar)

    //Exercici 4 
        
        let array = [1, 2, 3];

        function invocar(){
            console.log('hola')

        }

        function processarElements(array, myCallback) {

            for (let index = 0; index < array.length; index++) {
                myCallback(index)  
            }
        }

        processarElements(array, invocar);

//Nivell 3

    // Exercici 5

        let frase = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi?"

        function myDisplay(cadena) {
            console.log(cadena)
        }

         function processarCadena (cadena, myCallback) {
            let resultat = cadena.toUpperCase()
            myCallback(resultat)

         } 

         processarCadena(frase, myDisplay)