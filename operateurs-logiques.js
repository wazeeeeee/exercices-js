'use strict';

/*
    Qu’est-ce que le code ci-dessous va sortir ?
    ---------------------------------
    alert( null || 2 || undefined );
    ---------------------------------
*/

alert( null || 2 || undefined ); // 2

/*
    Qu’est-ce que le code ci-dessous va sortir ?
    -----------------------------------
    alert( alert(1) || 2 || alert(3) );
    -----------------------------------
*/

alert( alert(1) || 2 || alert(3)); // alert(1) puis 2

/*
    Qu’est-ce que ce code va afficher ?
    -------------------------
    alert( 1 && null && 2 );
    -------------------------
*/

alert( 1 && null && 2 ); // null

/*
    Qu’est-ce que ce code va afficher ?
    ------------------------------
    alert( alert(1) && alert(2) );
    ------------------------------
*/

alert( alert(1) && alert(2) ); // 1 puis undefined

/*
    Quel sera le résultat ?
    -----------------------------
    alert( null || 2 && 3 || 4 );
    -----------------------------
*/

alert( null || 2 && 3 || 4 ); // 3

/*
    https://fr.javascript.info/task/check-login
*/

let userName = prompt("Who's there?", "");

if ( userName === "Admin" ){
    let password = prompt("password");

    if ( password === "The masters" ){
        alert("Welcome!");
    }else if ( password === "" || password === null ){
        alert("Canceled");
    }else {
        alert("Wrong password");
    }
}else if ( userName === "" || userName === null ){
    alert("Canceled");
}else {
    alert("I don't know you");
}