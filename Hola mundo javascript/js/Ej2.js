'use strict'
//calcular la suma y la media de los numeros
var numero = 0;
var suma = 0;
var contador = 0;



do {
    numero = parseInt(prompt("Digite numeros, se sumaran hasta que digite uno negativo"))
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }

} while (numero >= 0);




alert("La suma de los numeros es: " + suma);
alert("La media de los numeros es: " + suma / contador);