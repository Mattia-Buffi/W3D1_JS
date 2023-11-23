/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(nOne,nTwo) {
    if(IsIntNumber(nOne)&&IsIntNumber(nTwo)) {
    if(nOne===nTwo) return ((nOne+nTwo)*3);
    return (nOne+nTwo);
    } return ('Un valore inserito non è un intero');
}


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso 
 tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (valueInt) {
    if(IsIntNumber(valueInt)){
    if((20<valueInt && valueInt<=100) || (valueInt===400)) return true;
    return false;
    } return ('Il valore inserito non corretto')
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString (yourString){
    if(typeof(yourString)==="string"){
    let tempString='';
    for (let index = (yourString.length-1); index >= 0; index--) {
        tempString=tempString.concat(yourString[index]);    
    }
    return tempString;
    } return ('Input is not a string')
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo 
 maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (myString) {
    if(typeof(myString)==="string") {
    let lettera=(myString[0]);
    let newString=lettera.toUpperCase();
    for (let index = 1;index < myString.length; index++) {
        if(myString[index-1]===' '){
            lettera=myString[(index)];
            newString=(newString+(lettera.toUpperCase()));
        } else newString=newString.concat(myString[index]);
    }  
    return newString;
    } return ('Input is not a sting')
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array 
 contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (numElement) {
    let arrayReturn=[];
    for (let index = 0; index < numElement; index++) {
        arrayReturn[index]= Math.floor(Math.random() * 10);   
    }
    return arrayReturn;
}

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2) {
    return (l1*l2);
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (yourNumb){
   let delta =Math.abs(yourNumb-19);
    if (delta>19) return (delta*3);
    return ('il delta è '+delta);
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(yourString) {
    if(typeof(yourString)==="string") {
   
        //PRIMO MODO
    // if(yourString.includes('code')&&(yourString[0]=='c')&&(yourString[1]=='o')&&(yourString[2]=='d')&&(yourString[3]=='e')) return yourString;
    // return ('code'+yourString);

    //SECONDO METODO
    if(yourString.lastIndexOf('code',3)==0) return yourString;  //0 trovato -1 non trovata
    else return ('code'+yourString);
    
    } return ('Input is not a string');
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(valueInt) {
    // CONTROLLO PARAMETRO INTERO POSITIVO
    if((Math.floor(valueInt)===valueInt)&&(valueInt>=0)) {
        if((valueInt%3===0)||(valueInt%7===0)) return true;
        else return false;
    }else console.log('Errore variabile non corretta');
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
function cutString(yourString){
    // OPZIONE 1
    //let newString='';
    // for (let index = 1; index < (yourString.length-1); index++) {
    //     newString=newString.concat(yourString[index]);    
    // }

    //OPZIONE 2
    let newString=yourString.slice(1,(yourString.length-1)); //ultima posizione esclusa
    return newString;
}

//FUNZIONE VERIFICA INTERO
function IsIntNumber(value){
    if((typeof(value)==="number")&&(Math.floor(value)===value)) return true;
    return false
}