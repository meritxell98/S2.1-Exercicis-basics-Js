"use strict"

//Nivell1 
    //Exercici 1 

        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hola, mon");
            }, 2000);
        });
    //Exercici 2 

        myPromise.then(res => {
            console.log('Hola mon')
        }
        )
    //Exercici 3 

        let myPromise3 = new Promise((myResolve, myReject, ttf) => {
            let resposta = 'Hola'

            setTimeout(() => {

            if(resposta == 'Hola'){
                myResolve('molt bé');
            } else {
                myReject('Error');
            }
            }, 2000);
        });

    //Exercici 4

        async function saludar(){
            let resultat = await myPromise()
            console.log(resultat);
        }

        saludar();
//Nivell 2 

    //Exercici 5
        
        async function saludar2() {
            try {
                let response = await myPromise();
            } catch {
                console.log('error');
            } 
        }

        saludar2();

//Nivell 3 

    //Exercici 6

        const myPromise5 = new Promise ((resolve, reject) =>{
            setTimeout(resolve, 2000,'Hola' );
        });

        const myPromise6 = new Promise ((resolve, reject) =>{
            setInterval(resolve, 3000, 'Adeu');
        });

        Promise.all[myPromise5, myPromise6].then((x) => {
            console.log(x); });
