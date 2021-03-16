"use strict"

// Switch

var edad = 40;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        break;

    case 25:
        imprime = "eres un adulto";
        break;

    case 70:
        imprime = "Eres un anciano";
        break;

    default:
        imprime = "entonces xupelo";
        break;
}

console.log(imprime);