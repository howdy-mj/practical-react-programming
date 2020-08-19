// Title 컴포넌트를 렌더링한 결과
// 모든 것이 문자열이므로 실제 돔을 생성할 수 있음
// 이처럼 실제 돔을 만들 수 있는 트리를 가상돔이라 할 수 있음
// 이전 트리와 현재 트리의 다른 점을 찾아 변경하는 것을 렌더 단계라 부름
// 컴포넌트들은 중간에 메모리에 저장되어 렌더 효율을 높이는데 사용 됨
// 이는 render함수에 의해서 변경되는 렌더 단계

const elementTree = {
  type: 'div',
  props: {
    children: [
      {
        type: 'p',
        props: { 
          style: { color: 'blue' },
          title: '리액트 공부하기',
        },
        // ...
      },
      {
        type: 'p',
        props: { children: '실전 리액트 프로그래밍을 공부한다'},
        // ...
      },
      {
        type: 'p',
        props: { children: '우선순위 높음'},
        // ...
      },
      {
        type: 'button',
        props: {
          onClick: function () {
            // Todo 컴포넌트의 onClick 함수
          },
          children: '우선순위 변경',
        },
        // ...
      },
      // ...
    ],
  },
  // ...
}
