// 제너레이터 함수로 자연수의 집합 표현

function* naturalNumbers() {
  let v = 1;
  while (true) {
    yield v++;
  }
}

const gen = naturalNumbers();
console.log(gen.next());

// 일반 함수였다면, 무한 루프가 돌기 때문에 먹통이 되었을 것
// 하지만 제너레이터는 값을 하나씩 던져줌
// 왜냐하면 제너레이터는 실행을 멈출 수 있기 때문
