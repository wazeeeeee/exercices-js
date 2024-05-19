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