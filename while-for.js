/*
    Quelle est la dernière valeur affichée par ce code ? Pourquoi ?
    --------------
    let i = 3;

    while (i) {
    alert( i-- );
    }
    --------------
*/

let i = 3;
while (i) {
    alert( i-- ); // 1 
}

/*
    A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.
    Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ?

    Le préfixe sous forme ++i :
    -----------------------------
    let i = 0;
    while (++i < 5) alert( i );
    -----------------------------
    Le postfixe sous forme i++ :
    -----------------------------
    let i = 0;
    while (i++ < 5) alert( i );
    -----------------------------
*/

// préfix = de 1 à 4
// postfix = de 1 à 5

/*
    Pour chaque boucle, notez les valeurs qui vont s’afficher. Ensuite, comparez avec la réponse.
    Les deux boucles alert les mêmes valeurs ou pas ?

    La forme postfix :
    ---------------------------------------
    for (let i = 0; i < 5; i++) alert( i );
    ---------------------------------------
    La forme préfix :
    ---------------------------------------
    for (let i = 0; i < 5; ++i) alert( i );
    ---------------------------------------
*/

// préfix et postfix = de 0 à 4

/*
    Utilisez la boucle for pour afficher les nombres pairs de 2 à 10.
*/

for (let e = 2; e < 10; e++){
    if ( i % 2 === 0 ) {
        console.log(e)
    }
}

/*
    Réécrivez le code en modifiant la boucle for en while sans modifier son comportement (la sortie doit rester la même).
    ------------------------------
    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }
    ------------------------------
*/

let i = 0;
while (i < 3) {
    alert(` number ${i}! `);
    i++;
}

/*
    Ecrivez une boucle qui demande un nombre supérieur à 100. Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.
    La boucle doit demander un numéro jusqu’à ce que le visiteur saisisse un nombre supérieur à 100 ou annule l’entrée/entre une ligne vide.
    Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres.
    Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.
*/