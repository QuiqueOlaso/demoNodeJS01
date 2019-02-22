'use strict';

const calculadora = {};

const ErrorMessageDivByZero = 'ERROR!';

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){    
	if (b == 0) {
		return new Error(ErrorMessageDivByZero);
    } else {
		return a / b;
    }    
}

calculadora.sumar = sumar;
calculadora.restar = restar;
calculadora.multiplicar = multiplicar;
calculadora.dividir = dividir;
calculadora.errorMsg_DivByZero = ErrorMessageDivByZero

module.exports = calculadora; 