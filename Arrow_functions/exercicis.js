"use strict"

// Nivell 1

    // Exercici 1

        const add = (a, b) => a + b;

    // Exercici 2

        let randomNumer = () => Math.random(0, 100);

    // Exercici 3 

        class Person {
            constructor(name){
                this.name = name;
            }

            salutacio() {
                console.log(`Hola ${this.name}`);
            }
        }

// Nivell 2

    //Exercici 4 

        function printNumbers() {

            let numeros = [1,3,5,6,7,12,25,36];

            for (let index = 0; index < numeros.length; index++) {
                const element = array[index];
                
            }

        }

//Nivell 3 
    // Exercici 5 

        setTimeout (() => console.log(saludar(), 3000))

        function saludar(){
            console.log('hola guapa');
        }