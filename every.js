var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

var allComputersCanRun = true;
var somComputersCanRun = false;

allComputersCanRun = computers.every(function(computer) {
    return computer.ram >= 16;
});

console.log(allComputersCanRun);

somComputersCanRun = computers.some(function(computer) {
    return computer.ram >= 16;
});
console.log(somComputersCanRun);