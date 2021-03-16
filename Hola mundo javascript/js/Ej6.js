'use strict'

//decir si un numero es impar o impar
//validar que el dato sea un numero



do {
    var numero = prompt("Digite un munero: ", 1);
} while (isNaN(numero));

parseInt(numero);

if (numero % 2 == 0) {
    alert("El numero introducido es par");
} else {
    alert("El numero introducido es impar");
}