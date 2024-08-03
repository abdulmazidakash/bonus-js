/**let number = 59;
number = 56;
number = 75;

const name = 'Asad';
console.log(number);
*/

/**var marks = [54, 23, 54, 76, 78, 75, 34];

for( var i = 0; i < marks.length; i++){
	console.log('hello');
}
*/

var marks = [54, 23, 54, 76, 78, 75, 34];

/**for( var i = 0; i < marks.length; i++){
	var element = marks[i];
	console.log(element);
}

console.log('outside');
console.log('gulishtan');

function add(number1, number2){
	var total = number1 + number2;
	return total;
}

var result1 = add(43, 45);
console.log(result1);

var adam = 'adam sandler';
var kodom = 'kodom sandler';

console.log('not adding this time right', adam);
console.log('not eating right now');

var result2 = add(234, 543);
console.log(result2);
*/

/**function largestNumber(numbers){
	for (var i = 0; i < numbers.length; i++){
		var element = numbers[i];
		console.log(element);
	}
}

largestNumber([23, 53, 65]);
*/

/**function largestNumber(numbers){
	
	var larger = numbers[0];
	for (var i = 0; i < numbers.length; i++){
		var element = numbers[i];
		if(element > larger){
			larger = element;
		}
	}
	return larger;
}

var output = largestNumber([23, 53, 65]);
console.log('output', output);
*/

function largestNumber(numbers){
	
	var larger = numbers[0];
	for (var i = 0; i < numbers.length; i++){
		var element = numbers[i];
		if(element > larger){
			larger = element;
		}
	}
	return larger;
}

var numbers = [23, 34, 45, 54, 75, 86, 97, 87];
var output = largestNumber(numbers);
console.log('output', output);