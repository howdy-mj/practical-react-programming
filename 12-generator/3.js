const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();
console.log(iter.next()); // { value: 10, done: false }

// 배열도 iterable인걸 확인할 수 있음
