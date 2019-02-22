'use strict';

const calculadora = {};

function sumar(a, b){
    return 'El resultado de la operacion ' + a + ' + ' + b + ' es ' + (a + b);
}

function restar(a, b){
    return 'El resultado de la operacion ' + a + ' - ' + b + ' es ' + (a - b);
}

function multiplicar(a, b){
    return 'El resultado de la operacion ' + a + ' * ' + b + ' es ' + (a * b);
}

function dividir(a, b){    
	if (b == 0) {
		var msg = "ERROR! Can't divide by zero";
        console.log(msg);
		return new Error(msg);
    } else if (a == 0) {        
        return 'El resultado de la operacion ' + a + ' / ' + b + ' es 0';
    } else {
		return 'El resultado de la operacion ' + a + ' / ' + b + ' es ' + (a / b);
    }    
}

calculadora.sumar = sumar;
calculadora.restar = restar;
calculadora.multiplicar = multiplicar;
calculadora.dividir = dividir;

module.exports = calculadora; 