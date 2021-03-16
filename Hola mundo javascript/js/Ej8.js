'use strict'

//calcualrdora 
/*dos numeros dados por el usuario en prompt, mostrar las operaciones basicas en consola y en la pagina
validar que los datos introducidos sean numeros
*/

var numero1;
var numero2;
var suma;
var resta;
var mul;
var div;

var resultados;

do {
    numero1 = parseInt(prompt("Digite el primer numero: "));
} while (isNaN(numero1));

do {
    numero2 = parseInt(prompt("Digite el segundo numero: "));
} while (isNaN(numero2));

document.write("<h1>Las operaciones basicas entre " + numero1 + " y " + numero2 + "</h1>");

suma = (numero1 + numero2);
resta = (numero1 - numero2);
mul = (numero1 * numero2);
if (numero2 == 0) {
    div = "no se puede, es division entre 0";
} else {
    div = (numero1 / numero2);
}

console.log(numero1 + "+" + numero2 + "= " + (suma));
console.log(numero1 + "-" + numero2 + "= " + (resta));
console.log(numero1 + "*" + numero2 + "= " + (mul));
if (numero2 == 0) {
    console.log(div);
} else {
    console.log(numero1 + "/" + numero2 + "= " + (div));
}

resultados = "suma: " + suma + "<br>" + "resta: " + resta + "<br>" + "multiplicacion: " + mul + "<br>" + "division: " + div;

document.write(resultados);