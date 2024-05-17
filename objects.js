"use strict";
/*
    Écrivez le code, une ligne pour chaque action :

    Créer un objet vide user.
    Ajoutez la propriété name avec la valeur John.
    Ajoutez la propriété surname avec la valeur Smith.
    Changer la valeur de name pour Pete.
    Supprimez la propriété name de l’objet.
*/

let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete'

delete user.name;

/*
    Ecrivez la fonction isEmpty(obj) qui renvoie true si l’objet n’a pas de propriétés, sinon false.
    Devrait fonctionner comme ça :
    -------------------------------------
    let schedule = {};

    alert( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";

    alert( isEmpty(schedule) ); // false
    --------------------------------------
*/

function isEmpty(obj) {
    for (let key in obj ){
        return false;
    }
    return true;
}

/*
    Est-il possible de changer un objet déclaré avec const, comment ?
    ----------------
    const user = {
    name: "John"
    };
    ----------------
    // est-ce que ça fonctionne ?
    -------------------
    user.name = "Pete";
    -------------------
*/

const user = {
    name: "John"
};

user.name = "Pete";

/*
    Nous avons un objet stockant les salaires de notre équipe :
    -----------------
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
    -----------------
    Écrivez le code pour additionner tous les salaires et les enregistrer dans la variable sum. Devrait être égale à 390 dans l’exemple ci-dessus.
    Si salaries est vide, le résultat doit être 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for ( let key in salaries ) {
    sum += salaries[key];
}

console.log(sum);

/*
    Créez une fonction multiplyNumeric(obj) qui multiplie toutes les valeurs de propriétés numériques de obj par 2.
    Par exemple :
    --------------------
    // before the call
    let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

    multiplyNumeric(menu);

    // after the call
        menu = {
        width: 400,
        height: 600,
        title: "My menu"
        };
    ---------------------
        Veuillez noter que multiplyNumeric n’a pas besoin de retourner quoi que ce soit. Il devrait modifier l’objet en place.
        P.S. Utilisez typeof pour rechercher un number ici.
*/

function multiplyNumeric(obj) {
    for ( let key in obj ) {
        if ( typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}