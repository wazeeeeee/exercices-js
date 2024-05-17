'use strict';

/*
    Ici, la fonction makeUser renvoie un objet.
    Quel est le résultat de l’accès à sa ref ? Pourquoi ?
    ----------------------
    function makeUser() {
    return {
        name: "John",
        ref: this
    };
    }

    let user = makeUser();

    alert( user.ref.name ); // Quel est le résultat ?
    ------------------------
*/

function makeUser() {
    return {
        name: 'John',
        ref: this
    };
}

let user = makeUser();
alert( user.ref.name ); // Error 

/*
    Créez un objet calculator avec trois méthodes :
    read() demande deux valeurs et les enregistre en tant que propriétés d’objet avec les noms a et b respectivement.
    sum() renvoie la somme des valeurs sauvegardées.
    mul() multiplie les valeurs sauvegardées et renvoie le résultat.
    ----------------------------
    let calculator = {
    // ... votre code ...
    };

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
    ----------------------------
*/

let calculator = {
    sum(){
        return this.a + this.b;
    },
    mull(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mull() );

/*
    https://fr.javascript.info/task/chain-calls
*/

let ladder = {
    step: O,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    },
};

ladder.up().up().down().showStep().down().showStep();


