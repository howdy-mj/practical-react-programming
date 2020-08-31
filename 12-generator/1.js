function* f1() {
  yield 10;
  yield 20;
  return 'finished';
}

const gen = f1();
// 제너레이터 객체가 반환 됨
