var expense = {
    type: '交通費',
    amount: '4500 JPY'
}

const { type, amount } = expense;

console.log(type);
console.log(amount);

var savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: 14040
}
function fileSummary({ name, extension, size }, { username }) {
    return `${username}: ${name}.${extension}の容量は${size}です。`;
}

console.log(fileSummary(savedFile, { username: 'ken' }));