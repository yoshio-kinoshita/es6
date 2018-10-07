
var numbers = [10, 20, 30];

var sum = numbers.reduce(function(sum, number) {
    return sum + number
}, 0);

console.log(sum);