function addNumbers(...numbers) {
    return numbers.reduce((acc, number) => {
        return acc + number;
    }, 0);
}

console.log(addNumbers(1, 2, 3, 4,5));
