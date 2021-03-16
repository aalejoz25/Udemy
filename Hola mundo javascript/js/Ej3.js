'use strict'

//programa que muestra todos los numeros en un intervalo dado por el usuario

var numero1 = parseInt(prompt("Digite el primer numero"));

var numero2 = parseInt(prompt("Digite el segundo numero"));


document.write("<h1>De " + numero1 + " hasta " + numero2 + " estan: </h1>")
for (let i = numero1; i < numero2; i++) {
    document.write(i + "<br>")

}