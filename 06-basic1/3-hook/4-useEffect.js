import React, { useState, useEffect } from 'react';

// 특별한 이유가 없다면, 모든 부수효과는 useEffect로 하는 것이 좋음
// 컴포넌트 렌더링 중에 부수 효과를 발생시키는 것은 프로그램의 복잡도를 크게 증가시키는 데,
// 유닛 테스트를 작성하기 힘들어지는 등 순수 함수가 갖는 여러 장점을 포기하는 것
// 대부분 렌더링 후에 처리해도 됨
// 게다가 concurrent mode로 동작할 미래의 리액트는 컴포넌트 함수가 호출되도 중간에 렌더링이 취소될 수 있음
// 즉, 한 번 렌더링 할 때, 컴포넌트 함수가 여러 번 호출될 수 있음

export default function App() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 렌더링 된 후에 호출
  // 좀 더 정확히 하자면, 렌더링 결과가 실제 돔에 반영되고 비동기로 호출
  // 첫 번째 매개변수를 '부수효과 함수'라고 부름
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });
  // 위에 브라우저 타이틀 숫자가 변경

  return <button onClick={() => setCount(count + 1)}>증가</button>;
}
