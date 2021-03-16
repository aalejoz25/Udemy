'use strict'


var numero1;

var numero2;

numero1 = parseInt(prompt("Digite un numero", 0));
numero2 = parseInt(prompt("Digite el segundo numero", 0));

if (numero1 > numero2) {
    alert("el numero " + numero1 + " es mayor");
} else if (numero1 == numero2) {
    alert("los dos numeros son iguales");
} else {
    alert("el numero " + numero2 + " es mayor");

}