function MyComponent(props) {
  // ...
}

function isEqual(prevProps, nextProps) {
  // 이전 속성값과 비교하여 true 또는 false를 반환
  // 참이라면 이전 렌더링 결과를 재사용
  // 거짓이라면 컴포넌트를 실행해서 가상돔을 업데이트하고 변경된 부분만 실제 돔에 반영
}

React.memo(MyComponent, isEqual);

//

React.memo(MyComponent); // 이렇게만 적으면 얕은 비교

// memo로 감싸지 않았다면, 항상 거짓과 속성값을 비교한다 생각할 수 있음
// 이때는 부모가 렌더링 되면 자기 자신도 같이 렌더링이 됨
