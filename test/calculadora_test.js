'use strict';

var expect = require("chai").expect;
var calculadora = require("../src/calculadora");

describe("calculadora - Test", function() {

	describe("Testing the Operations", function() {
				
		var a = 1;
		var b = 1;		
		var c = 3;
		var d = 3;
		var zero = 3;

		it("Testing the SUMAR operation", function() {
			expect(calculadora.sumar(a,b)).to.equal(a+b);
		});

		it("Testing the RESTAR operation", function() {
			expect(calculadora.restar(a,b)).to.equal(a-b);
		});

		it("Testing the MULTIPLICAR operation", function() {
			expect(calculadora.multiplicar(c,d)).to.equal(c*d);
		});

		it("Testing the DIVIDIR operation", function() {
			expect(calculadora.dividir(c,d)).to.equal(c/d);
		});

		it("Testing the DIVIDIR operation (2)", function() {			
			expect(calculadora.dividir(0,a)).to.equal(0);
		});	

		it("Testing the DIVIDIR operation by zero", function() {
			var expectedError = new Error(calculadora.errorMsg_DivByZero);			
			expect(calculadora.dividir(3,0).message).to.equal(expectedError.message);
		});		
	});
	
});