function sum(a = 0, b = 0) {
    return a + b;
}

let s = sum(1, 2);
console.log(s);

function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}