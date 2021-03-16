'use strict'

//mostrar rodos los numero impares de un intervalo


var numero1 = parseInt(prompt("Digite el primer numero"));
var numero2 = parseInt(prompt("Digite el segundo numero"));


document.write("<h1>De " + numero1 + " hasta " + numero2 + " estan los numero impares: </h1>");

while (numero1 <= numero2) {
    if (numero1 % 2 != 0) {
        document.write(numero1 + "<br>");

    }
    numero1++;

}