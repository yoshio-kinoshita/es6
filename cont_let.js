// var name = '太郎';
// var title = 'Webアプリケーションエンジニア';
// var hourlySalary = 4000;


// ES 6
const name = '太郎';
let title = 'Webアプリケーションエンジニア';
let hourlySalary = 4000;
     
console.log(title);
console.log(hourlySalary);

title = 'リードWebアプリケーションエンジニア';
hourlySalary = 4500;

console.log(title);
console.log(hourlySalary);


const name = "yoshio kinoshita";
let age = 37;
const dateOfBirth = "19810921";

const statuses = [ 
  { code: 'OK', response: '正常に完了しました' },
  { code: 'FAILED', response: 'エラーが発生しました' },
  { code: 'PENDING', response: '処理中です...' }
];
let message = '';
let currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
