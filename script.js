// Generare 5 numeri casuali e mostrarli in un alert all'utente.
// Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso.
// il timer partirà a contare dopo che avete schiacciato ok.)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
// Bonus:
// controllare che i numeri casuali siano diversi tra loro
// controllare che l'utente non inserisca 2 volte lo stesso numero


const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fiveNumbersList = [];

do {
    const currentRdnNumber = getRandomNumber(1, 50);
    if (!fiveNumbersList.includes(currentRdnNumber)) {

        fiveNumbersList.push(currentRdnNumber);
    }
} while (fiveNumbersList.length < 5)

alert(fiveNumbersList);

const afterSeconds = setTimeout(() => {
    // toShowList = [];

    // for (let i = 0; i < 5; i++) {
    //     if (fiveNumbersList[i] === currentNumber) {
    //         toShowList.push(currentNumber);
    //     }
    // }

    const toShow = fiveNumbersList.filter((item) => {
        const currentNumber = parseInt(prompt("inserisci un numero da 1 a 50").trim());
        if (currentNumber === item) {
            return true;
        }
        return false;
    });


    alert(toShow);
}, 3000);



