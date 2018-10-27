const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [name, name2, name3] = companies;

console.log(name)
const firstCompany = companies[0];
console.log(firstCompany)

const [name4, ...rest] = companies;
console.log(rest);

const[a1] = rest;
console.log(a1);


