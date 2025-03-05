"use strict"

// Nivell 1

    // Exercici 1

        const add = (a, b) => a + b;
        
        console.log(add(2,3))

    // Exercici 2

        let randomNumber = () => Math.floor(Math.random() * 101);
        console.log(randomNumer())

    // Exercici 3 

        class Person {
            constructor(name){
                this.name = name;
            }

             greet = () => console.log(`Hola ${this.name}`);
        }

        const persona = new Person("Meritxell");
        persona.greet();

// Nivell 2

    //Exercici 4 
    let numeros = [1,3,5,6,7,12,25,36];
        
        function printNumbers(numeros) {

            for (let i = 0; i < array.length; i++) {
                const print = () => console.log(numeros[i])
                print();
            }
        }
        printNumbers(numeros)

//Nivell 3 
    // Exercici 5 
        const delayedMessage = () => {
            setTimeout(() => { 
                console.log('han passat 3 segons');
            }, 3000);
        }
        delayedMessage();
