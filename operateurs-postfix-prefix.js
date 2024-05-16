"use strict";

/*
    Quelles sont les valeurs finales de toutes les variables a, b, c et d après le code ci-dessous ?
    ------------------
    let a = 1, b = 1;

    let c = ++a; // ?
    let d = b++; // ?
    ------------------
*/

let a = 1, b = 1;

let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 2

/*
    Quelles sont les valeurs de a et x après le code ci-dessous ?
    ----------------------
    let a = 2;

    let x = 1 + (a *= 2);
    ----------------------
*/

let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5

/*
    Quels sont les résultats de ces expressions ?
    -------------
    "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    " \t \n" - 2
    --------------
*/

"" + 1 + 0 // 10 string
"" - 1 + 0 // -1 number
true + false // 1 number
6 / "3" // 2 number
"2" * "3" // 6 number
4 + 5 + "px" // 9px string
"$" + 4 + 5 // $45 string
"4" - 2 // 2 number
"4px" - 2 // NaN
"  -9  " + 5 // " -9  5" string
"  -9  " - 5 // -14 number
null + 1 // 1 number
undefined + 1 // NaN
" \t \n" - 2 // -2 number

/*
    Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.
    Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).
    Pourquoi ? Réparez-le. Le résultat doit être 3.
    ------------------------------------
    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);

    alert(a + b); // 12
    ------------------------------------
*/

let a = prompt("First number", 1);
let b = prompt("Second number", 2);

alert(a + b);