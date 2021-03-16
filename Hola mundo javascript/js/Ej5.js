'use strict'

//mostrar todos los numeros divisores de un numero intoducido

var numero = parseInt(prompt("Digite un numero: ", 1));
document.write("<h1>Divisores de " + numero + "</h1>");
for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        document.write(i + "<br>");
    }

}