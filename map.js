let numbers = [1, 2, 3];

let doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
}

let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubleNumbers);
console.log(doubled);
console.log(numbers);

var cars = [
    { type: '軽自動車', price: '安い' },
    { type: '高級車', price: '高い' }
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);

function pluck(array, property) {
    return array.map((element) => element[property]);
}

var paints = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' },
    { color2: 'yellow2' }
];
console.log(pluck(paints, 'color'));


var products = [
    { name: 'きゅうり', type: '野菜', quantity: 0, price: 1 },
    { name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15 },
    { name: 'セロリ', type: '野菜', quantity: 30, price: 9 },
    { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5 }
];

var filteredProducts = products.filter(function (product) {
    return product.type === '野菜'
        && product.quantity > 0
        && product.price < 10
        ;
});

console.log(filteredProducts);
