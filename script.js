// Generare 5 numeri casuali e mostrarli in un alert all'utente.
// Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso.
// il timer partirà a contare dopo che avete schiacciato ok.)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
// Bonus:
// controllare che i numeri casuali siano diversi tra loro
// controllare che l'utente non inserisca 2 volte lo stesso numero

const countDisplay = document.getElementById("countdown-display");
const resultDisplay = document.getElementById("result-display");


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fiveNumbersList = [];

do {
    const currentRdnNumber = getRandomNumber(1, 50);
    if (!fiveNumbersList.includes(currentRdnNumber)) {

        fiveNumbersList.push(currentRdnNumber);
    }
} while (fiveNumbersList.length < 5)

alert(fiveNumbersList);




let count = 3;
countDisplay.innerText = count;
const countdown = setInterval(() => {
    countDisplay.innerText = --count;
    if (count === 0) {
        clearInterval(countdown);
    }
}, 1000);


const afterSeconds = setTimeout(() => {

    const secondList = [];
    toShowList = [];

    while (secondList.length < 5) {
        const currentNumber = parseInt(prompt("inserisci un numero da 1 a 50"));
        if (secondList.includes(currentNumber) || isNaN(currentNumber) || currentNumber === "" || currentNumber < 0 || currentNumber > 50) {
            alert("Non hai inserito un numero corretto oppure già inserito");
        } else {
            secondList.push(currentNumber);
            if (fiveNumbersList.includes(currentNumber)) {
                toShowList.push(currentNumber);
            }
        }
    }
    console.log(secondList);


    // let currentNumber = parseInt(prompt("inserisci un numero da 1 a 50").trim());

    // while (isNaN(currentNumber) || currentNumber === "" || currentNumber < 0 || currentNumber > 50) {
    //     alert("Numero non corretto");
    //     currentNumber = parseInt(prompt("reinserisci un numero da 1 a 50").trim());

    // }

    // const toShow = fiveNumbersList.map((item, index, list) => {
    //     if (list[index] === currentNumber) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // });



    // Versione con for tradizionale 
    // Dichiarazione array vuoto toShowList portata direttamente sopra e pushato nel while
    // for (let i = 0; i <= fiveNumbersList.length; i++) {
    //     console.log(secondList[i]);
    //     if (fiveNumbersList.includes(secondList[i])) {
    //         toShowList.push(secondList[i]);
    //     }
    // }


    // Versione con filter
    // const toShow = secondList.filter((item, index, list) => {
    //     if (item === fiveNumbersList[index]) {
    //         return true;
    //     }
    //     return false;
    // });

    // console.log(toShow);

    resultDisplay.innerText = `Hai ricordato ${toShowList.length} numeri e sono i seguenti ${toShowList}`;
}, 4000);




