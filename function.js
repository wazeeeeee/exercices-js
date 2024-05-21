'use strict'
/*
    La fonction suivante renvoie true si le paramètre age est supérieur à 18.
    Sinon, il demande une confirmation et renvoie son résultat :
    ---------------------------------------------
    function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
    }
    ---------------------------------------------
    La fonction fonctionnera-t-elle différemment si else est supprimé ?
    -----------------------------------------
    function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
    }
    -----------------------------------------
    Existe-t-il une différence dans le comportement de ces deux variantes ?
*/

// Non il y'a aucune différence dans le comportement de ces deux variantes.

/*
    La fonction suivante renvoie true si le paramètre age est supérieur à 18.
    Sinon, il demande une confirmation et renvoie le résultat.
    ----------------------------------------------
    function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
    }
    ----------------------------------------------
    Réécrivez-le, pour effectuer la même chose, mais sans if, et en une seule ligne.
    Faites deux variantes de checkAge :
    En utilisant un opérateur point d’interrogation ?
    En utilisant OU ||
*/

function checkAge(age) {
    return (age < 18) ||  confirm('Did parents allow you ?');
}

function checkAge(age) {
    return (age < 18) ? true: confirm('Did parents allow you ?');
}

/*
    Ecrivez une fonction min(a, b) qui renvoie le plus petit des deux nombres a et b.
    Par exemple :
    -----------------
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
    -----------------
*/

function min(a, b) {
    return a < b ? a : b;
}

/*
    Ecrivez une fonction pow(x, n) qui renvoie x à la puissance n. Ou, autrement dit, multiplie x par lui-même n fois et renvoie le résultat.
    ---------------------------------
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
    ---------------------------------
    Créez une page Web qui demande (prompt)x et n, puis affiche le résultat de pow(x, n).
    Exécuter la démo

    P.S. Dans cette tâche, la fonction ne doit prendre en charge que les valeurs naturelles de n : entiers supérieurs à 1.
*/

function pow(x, n){
    let result = x;

    for (let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1){
    alert(`Power ${n} is not supported, use positive integer`);
}else {
    alert( pow(x, n) );
}