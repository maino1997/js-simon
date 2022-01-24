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
    secondList = [];

    for (let i = 0; secondList.length < 5; i++) {
        const currentNumber = parseInt(prompt("inserisci un numero da 1 a 50"));
        if (secondList.includes(currentNumber) || isNaN(currentNumber) || currentNumber === "") {
            alert("Non hai inserito un numero corretto oppure già inserito");
        } else {
            if (fiveNumbersList[i] === currentNumber) {
                secondList.push(currentNumber);
            }
        }
    }
    console.log(secondList);

    toShowList = [];

    for (let i = 0; i < fiveNumbersList.length; i++) {
        if (fiveNumbersList.includes(secondList[i])) {
            toShowList.push(secondList[i]);
        }
    }

    // const toShow = fiveNumbersList.filter((item) => {
    //     const currentNumber = parseInt(prompt("inserisci un numero da 1 a 50").trim());
    //     if (currentNumber === item && !isNan(currentNumber) && currentNumber !== "") {
    //         return true;
    //     }
    //     return false;
    // });


    alert(toShowList);
}, 3000);




