"use strict"

// Bucle while

var year = 2018;

while (year != 1991) {
    //ejecuta esto
    console.log("Estamos en el año " + year);
    year--;

    if (year == 2000) {
        break;
    }
}


// do while

var years = 30;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
    console.log(years);
} while (years > 25);