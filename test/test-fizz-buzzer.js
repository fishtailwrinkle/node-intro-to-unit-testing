const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should return "fizz-buzz" for multiples of 15 ', function() {
		const mult15 = [15, 30, 45];
		mult15.forEach(function(input) {
			const answerOfMult15 = fizzBuzzer(input);
			answerOfMult15.should.equal('fizz-buzz');
		});
	});

	it('should return "fizz" for multiples of 3', function() {
		const mult3 = [3,6,9];
		mult3.forEach(function(input) {
			const answerOfMult3 = fizzBuzzer(input);
			answerOfMult3.should.equal('fizz');
		});
	});

	it('should return "buzz" for multiples of 5', function() {
		const mult5 = [5, 10, 20];
		mult5.forEach(function(input) {
			const answerOfMult5 = fizzBuzzer(input);
			answerOfMult5.should.equal('buzz');
		});
	});

	it('should return a number if not multiple of 3 or 5', function() {
		const number = [2, 7, 8, 11];
		number.forEach(function(input) {
			const answerofNumber = fizzBuzzer(input);
			answerofNumber.should.equal(input);
		});
	});

	it('should raise error if input isn\'t a number', function() {
		const badInputs = ['a', true, false, {}, [], function(){}];
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		}); 
	});
});







