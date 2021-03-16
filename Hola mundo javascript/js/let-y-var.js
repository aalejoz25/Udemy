'use strict'
// Prueba con var

var numero = 40;

console.log(numero);

if (true) {
    var numero = 50
    console.log(numero);
}

console.log(numero);

//prueba con let

var texto = "prueba curso";
console.log(texto);

if (true) {
    let texto = "curso prueba"
    console.log(texto);
}

console.log(texto);