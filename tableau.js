'use strict';
/*
    Ecrivez la fonction camelize(str) qui change les mots séparés par des tirets comme “my-short-string” en camel-cased “myShortString”.
    La fonction doit donc supprimer tous les tirets et mettre en majuscule la première lettre de chaque mot à partir du deuxième mot.
    Exemples :
    ------------------------------------------------------
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    ------------------------------------------------------
    P.S. Astuce : utilisez split pour scinder la chaîne dans un tableau, transformer la et ensuite utilisez join.
*/

// à revoir !!
function camelize(str){
    return str
    .split('-')
    .map(( word, index ) => index == 0 ? word : word[0].topUpperCase() + word.slice(1))
    .join('');
}

/*
    Ecrivez une fonction filterRange(arr, a, b) qui obtient un tableau arr, 
    recherche les éléments avec des valeurs supérieures ou égales à a et inférieures ou égales à b et retourne un résultat sous forme de tableau.
    La fonction ne doit pas modifier le tableau. Elle doit juste retourner le nouveau tableau.
    Par exemple :
    ----------------------------------------------------
    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (valeurs correspondantes)

    alert( arr ); // 5,3,8,1 (non modifié)
    -----------------------------------------------------
*/

// à revoir !!
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr);

/*
    Ecrivez une fonction filterRangeInPlace(arr, a, b) qui obtient un tableau arr et en supprime toutes les valeurs, sauf celles comprises entre a et b. Le test est : a ≤ arr[i] ≤ b.
    La fonction doit juste modifier que le tableau. Elle ne doit rien retourner.
    Par exemple :
    --------------------------------
    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // supprime les nombres qui ne sont pas entre 1 et 4

    alert( arr ); // [3, 1]
    --------------------------------
*/

// à revoir !!
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);

/*
    Trier par croissant
    -------------------------------------------------------
    let arr = [5, 2, 1, -10, 8];

    // ...  votre code pour le trier par ordre décroissant

    alert( arr ); // 8, 5, 2, 1, -10
    -------------------------------------------------------
*/

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

/*
    le code que j'avais proposé de base :

    let arr = [5, 2, 1, -10, 8];

    function decroissant(a, b){
        if(a > b) return -1;
    }
    arr.sort(decroissant);

    alert(arr);
*/

/*
    Nous avons un tableau de chaînes arr. Nous aimerions en avoir une copie triée, mais sans modifier arr.
    Créez une fonction copySorted(arr) qui renvoie une copie triée.
    -----------------------------------------
    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (aucune modification)
    -----------------------------------------
*/
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(sorted);

/*
    le code que j'avais proposé de base :

    let arr = ["HTML", "JavaScript", "CSS"];

    alert( arr.sort( (a, b) => a.localeCompare(b) ));
*/

/*
    https://fr.javascript.info/task/calculator-extendable
*/

// à revoir !!
function calculator(){
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };
    this.calculator = function(str) {
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2],

        if (!this.methods[op]) {
            return NaN;
        }
        return this.methods[op](a, b);
    };
    this.addMethods = function(name, func) {
        isFinite.methods[name] = func;
    };
}

/*
    https://fr.javascript.info/task/array-get-names
*/

// a revoir.
let john = { name: "John", age:25 };
let pete = { name: "Pete", age:30 };
let mary = { name: "Mary", age:28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

alert(names); // John, Pete, Mary

/*
    https://fr.javascript.info/task/map-objects
*/

// à revoir !!
let john = { name: "John", surname: "Smith", id: 1};
let pete = { name: "Pete", surname: "Hunt", id: 2};
let mary = { name: "Mary", surname: "Key", id: 3};

let users = [ john, pete, mary];

let userMapped = users.map(user => ({
    fullname: `${user.name} ${user.surname}`,
    id: user.id
}));

alert(userMapped[0].id);
alert(usersMapped[0].fullname);

/*
    https://fr.javascript.info/task/sort-objects
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

function sortByName(users) {
    users.sort((a, b) => a.name > b.name ? 1 : -1);
}

sortByName(arr);

alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

/*
    https://fr.javascript.info/task/shuffle
*/

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


let arr = [1, 2, 3];

shuffle(arr);
alert(arr);


/*
    https://fr.javascript.info/task/average-age
*/

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );

/*
    https://fr.javascript.info/task/array-unique
*/

// !! à revoir !!
function unique(arr){
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

alert( unique(strings) );

