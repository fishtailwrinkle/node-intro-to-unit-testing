const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	it('should return \'fizz\' when number is divisible by 3, \'buzz\' when number is divisible by 5, \'fizz-buzz\' when number is divisible by 15, \'number\' for all other number', function() {

		const normalCases = [
			{num: 3, expected: "fizz"},
			{num: 5, expected: "buzz"},
			{num: 15, expected: "fizz-buzz"},
			{num: 1, expected: 1}
		] ;

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args not a number', function() {
		const badInputs = [
			['a'],
			['1']
		];

		badInputs.forEach(function(input) {
		const answer = fizzBuzzer(input);
		answer.should.be.false;
	}); 

	});

});







