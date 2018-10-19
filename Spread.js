const defaultColors = ['赤', '緑'];
const userFavoriteColor = ['オレンジ', '黄'];
const fallColors = ['茶', '紅葉'];

console.log(['青', ...fallColors, ...defaultColors, ...userFavoriteColor]);
console.log([fallColors,defaultColors,userFavoriteColor]);


function validateShoppingList(...items) {
    if (items.indexOf('牛乳') < 0 ) {
        return ['牛乳', ...items];
    }

    return items;
}

console.log(validateShoppingList('オレンジ', 'パン'));
console.log(validateShoppingList('オレンジ', 'パン', '牛乳'));

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function join(array1, array2) {
  return [...array1, ...array2];
}

function unshift(array, ...numbers) {
  return [...numbers, ...array];
}

console.log(product(1,2,3,4,5))