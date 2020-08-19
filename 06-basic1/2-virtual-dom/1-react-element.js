// 리액트는 렌더링 성능을 위해 가상 돔을 활용.
// 브라우저에서 돔을 변경하는 것은 비교적 오래 걸리는 작업, 빠른 렌더링을 위해 돔 변경을 최소화 하는 것이 좋음
// 리액트는 메모리에 가상돔을 올려 놓고 이전/이후의 가상돔을 비교
// 그래서 변경된 부분만 실제 돔에 반영하는 전략을 채택

// jsx가 createElment 이걸로 변환을 해줌
const element = <a href="http://google.com">click here</a>;
const element = React.createElement(
  'a',
  { href: 'http://google.com'},
  'click here',
);