'use strict'

// tabla de multiplicar de un numero dado por el usuario


do {
    var numero = prompt("Digite un numero: ", 1);
} while (isNaN(numero));

parseInt(numero);
document.write("<h1>Tabla de multiplicar del " + numero + "</h1>");

for (let i = 0; i <= 10; i++) {

    document.write(numero * i + "<br>");

}