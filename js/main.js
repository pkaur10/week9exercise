var stringArray = ["one", "two", "three", "four", "five"];
console.log(stringArray);

for (i = 0; i < stringArray.length; i++) 
{
	console.log(stringArray[i].length);
};

var stringArray = stringArray.reverse();
console.log(stringArray);

var numbers = [10, 31, 83, 4, 12];
numbers.sort(function(a, b) {
console.log(a, b);
	return a-b;
});

console.log(numbers);

numbers.sort(function(a, b) {
	console.log(b, a);
	return b-a;
});

console.log(numbers);

var stringArray1 = ["six", "seven", "eight"];
stringArray1.push("nine", "ten");

stringArray1.shift();

	console.log(stringArray1);





