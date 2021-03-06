// &&는 처음으로 거짓을 만날 때의 값으로 가거나, 마지막 값이 됨
//
const v1 = 'ab' && 0 && 2; // v1 === 0
// 'ab'는 참이라 다음으로 넘어가고, 0이 거짓이라 v1은 0이 됨
const v2 = 'ab' && 2 && 3; // v2 === 3
// 'ab', 2, 3 모두 참이기 때문에, 마지막으로 평가되는 3이 됨

// ||는 처음으로 참을 만날때의 값이나, 마지막 값이 됨
//
const v3 = 'ab' || 0; // v3 === 'ab'
const v4 = '' || 0 || 3; // v4 === 3

// jsx에서 false를 표현하면, 리액트에서는 무시가 됨
