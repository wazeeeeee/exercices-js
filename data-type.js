"use strict";

/*
    Quelle est la sortie du script ?
    ---------------------------------
    let name = "Ilya";

    alert( `hello ${1}` ); // ?

    alert( `hello ${"name"}` ); // ?

    alert( `hello ${name}` ); // ?
    ---------------------------------
*/

let userName = "Ilya";
alert(` hello ${1}` ); // hello 1
alert(` hello ${"userName"}` ); // hello userName
alert( `hello ${userName}` ); // hello Ilya
