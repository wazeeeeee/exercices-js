"use strict";
/*
    Est-ce que alert sera affiché ?
    -----------------
    if ("0") {
    alert( 'Hello' );
    }
    -----------------
*/

if("0") {
    alert( 'Hello' );
} // Hello

/*
    https://fr.javascript.info/task/check-standard
*/

let JSrealname = prompt("What's the 'official' name of JavaScript?", "");

if(JSrealname == "ECMAScript"){
    alert("Right!");
}else{
    alert("You don't know? 'ECMAScript'!");
}

/*
    En utilisant if..else, écrivez le code qui obtient un numéro via le prompt, puis l’affiche en alert :
    1, si la valeur est supérieure à zéro,
    -1, si inférieur à zéro,
    0, si est égal à zéro.
    Dans cet exercice, nous supposons que l’entrée est toujours un nombre.
*/

let value = prompt("type number", 0);

if(value < 0){
    alert(1);
}else if(value > 0){
    alert(-1);
}else{
    alert(0);
}

/*
    Réécrivez ce if en utilisant l’opérateur conditionnel '?' :
    -----------------
    let result;

    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }
    -----------------
*/

let result = (a + b < 4) ? 'Below' : 'Over';

/*
    Réécrire ce if..else en utilisant plusieurs opérateurs ternaires '?'.
    Pour plus de lisibilité, il est recommandé de diviser le code en plusieurs lignes.
    -----------------------------------
    let message;

    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
    ------------------------------------
*/

let message = (login === 'Employee') ? 'Hello' :
(login === 'Director') ? 'Greatings' :
(login === '') ? 'No login' :
'';
