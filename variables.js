/*
    Déclarez deux variables: Admin and Name.
    Assignez la valeur "John" à la variable Name.
    Assignez la valeur de Name à la variable Admin.
    Affichez la valeur de Admin.
*/

"use strict";

let userName;
let admin;

userName = 'John';
admin = userName;

console.log(admin);

/*
    Créez la variable avec le nom de notre planète. Comment nommeriez-vous une telle variable ?
    Créez la variable pour stocker le nom du visiteur actuel. Comment nommeriez-vous cette variable ?
*/

let planetName = "Terre";
let currentVisitorName = "John";

console.log(planetName);
console.log(currentVisitorName);

/*
    Examinez le code suivant :
    -------------------------------
    const birthday = '18.04.1982';

    const age = someCode(birthday);
    -------------------------------
    Ici, nous avons une constante birthday pour la date de naissance, ainsi que la constante age.
    L’age est calculé à partir de birthday en utilisant someCode(),
    ce qui signifie un appel de fonction que nous n’avons pas encore expliqué (nous le ferons bientôt !),
    mais les détails n’ont pas d’importance ici,
    le fait est que l’age est calculé d’une manière ou d’une autre en fonction de la date de naissance birthday.
    Serait-il juste d’utiliser des majuscules pour birthday? Pour age? Ou même pour les deux ?
    -----------------------------------------------------------------------
    const BIRTHDAY = '18.04.1982'; // mettre l'anniversaire en majuscule ?

    const AGE = someCode(BIRTHDAY); // mettre l'âge en majuscule ?
    -----------------------------------------------------------------------
*/

// Mettre le birthday en majuscule.

