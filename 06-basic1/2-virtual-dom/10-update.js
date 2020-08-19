// priority 값이 변경되어 렌더되는 결과물
// Title은 변경되지 않았기에 이전 값을 재사용

const elementTree = {
  type: 'div',
  props: {
    children: [
      {
        type: Title,
        props: { title: '리액트 공부하기' },
        // ...
      },
      {
        type: 'p',
        props: { children: '실전 리액트 프로그래밍 공부한다'},
        // ...
      },
      {
        type: 'p',
        props: { children: '우선순위 낮음'}, // 변경된 부분
        // ...
      },
      // ...
    ],
  },
  // ...
}