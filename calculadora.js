const sumar = require('./operadores/sumar');
const restar = require ('./operadores/restar');
const multiplicar = require ('./operadores/multiplicar');
const dividir = require ('./operadores/dividir');

//sumar
console.log (sumar(7,5));
//restar
console.log (restar(6,9));
//multiplicar
console.log(multiplicar(3,3));
//multiplicar por cero
console.log(multiplicar(3,0));
//dividir
console.log(dividir(9,3));
//dividir por cero
console.log(dividir(4,0));
