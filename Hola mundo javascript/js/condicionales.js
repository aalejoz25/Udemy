'use strict'

// Condicional if

var edad = 40;
var nombre = "Alvaro Zarabanda";

/*if (edad >= 18) {
    console.log(nombre + " Es mayor de edad")

    if (edad <= 33) {
        console.log("Todavia eres millenial")
    } else if (edad >= 70) {

        console.log("Eres anciano")
    } else {
        console.log("Ya no eres Millenial")
    }
} else {

    console.log(nombre + " Es menor de edad")
}*/

//Operadores logicos
//&& (y) ||(o) !(negacion)


var year = 2018;
//Negacion


if (year != 2016) {
    console.log("El año no es 2016 realmente es " + year)
}

//And
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual")
} else {

    console.log("Estamos en la era postmoderna");
}

//Or

if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("año acaba en 8")
} else {
    console.log("año no registrado")
}