'use strict';

var calculadora = require('./src/calculadora.js');
var a = 3;
var b = 5;

console.log(`El resultado de la operacion ${a} + ${b} es ${calculadora.sumar(a,b)}`);
console.log(`El resultado de la operacion ${a} - ${b} es ${calculadora.restar(a,b)}`);
console.log(`El resultado de la operacion ${a} * ${b} es ${calculadora.multiplicar(a,b)}`);
console.log(`El resultado de la operacion ${a} / ${b} es ${calculadora.dividir(a,b)}`);