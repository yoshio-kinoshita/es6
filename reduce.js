
var numbers = [10, 20, 30];

var sum = numbers.reduce(function (sum, number) {
    return sum + number
}, 0);

console.log(sum);

var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var colors = primaryColors.map(function (primaryColor) {
    return primaryColor.color;
});

console.log(colors);

var colors2 = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(colors);

function balancesParens(string) {
    return !string.split('').reduce(function (previous, char) {
        if (previous < 0) { return previous; }
        if (char === '(') { return previous + 1; }
        if (char === ')') { return previous - 1; }
    }, 0);
}

console.log(balancesParens('(())'));

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function (desk, current) {
    console.log(current.type);
    if (current.type === 'sitting') {
        desk.sitting = desk.sitting + 1;
    } else {
        desk.standing = desk.standing + 1;
    }
    return desk;
}, { sitting: 0, standing: 0 });

console.log(deskTypes)

var array1 = [1, 2, 3, 4, 5];
var reducer = (accumelator, currentValue) => accumelator + currentValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

function unique(array) {
    return array.reduce(function (acc, element) {
        var existingValue = acc.find(function (target) {
            return target === element;
        });

        if (!existingValue) {
            acc.push(element);
        }
        return acc;
    }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];

console.log(unique(numbers));