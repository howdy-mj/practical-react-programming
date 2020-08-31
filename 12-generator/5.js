function* f1() {
  yield 10;
  yield 20;
  yield 30;
}

for (const v of f1()) {
  console.log(v); // 10, 20, 30이 순서대로 찍힐 것
}

const arr = [...f1()];
console.log(arr); // [ 10, 20, 30]
