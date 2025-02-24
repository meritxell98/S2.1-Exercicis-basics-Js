"use strict"

//Nivell1 
    //Exercici 1 

        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(("Hola, mon"));
            }, 2000);
        });
    //Exercici 2 

        myPromise.then(resolve => console.log(resolve))
    //Exercici 3 

        function verificarInput(input){
            let Promesa  = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    if(input === "Hola"){
                        resolve('Entrada correcta')
                    }else{
                        reject('Entrada incorrecta')
                    }
                }, 2000);
            })
        }

        verificarInput("Hola")
        verificarInput("Adeu")

    //Exercici 4

        async function executarPromesa(){
            let resultat = await myPromise;
            console.log(resultat);
        }

        executarPromesa();
//Nivell 2 

    //Exercici 5
        
    async function executarPromesa2(){
        try{
            const resultat = await myPromise;
            console.log(resultat)
        } catch (error){
            console.log(error)
        }
    }

    executarPromesa2();
//Nivell 2 ;

//Nivell 3 

    //Exercici 6

        const myPromise5 = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve('Promesa 1')
            }, 2000);
        });

        const myPromise6 = new Promise ((resolve, reject) =>{
            setTimeout(() => {
                resolve('Promesa 2')
            }, 3000);
        });

        Promise.all([myPromise5, myPromise6])
        .then(resultats => {
            console.log(resultats[0]);
            console.log(resultats[1]);
            });
