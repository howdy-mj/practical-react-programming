import React, { useState, useEffect } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect( () => {
    // 1초에 1씩 증가
    setTimeout( () => {
      setSeconds(v => v + 1);
    }, 1000);
  })

  // 돔 요소가 삭제되었다 추가되면 element 탭에서 깜빡 거림
  // 리액트는 key가 변경되면, 이전 요소와 달라졌다 판단해서 삭제하고 새로 만들어서 붙이는 것

  return (
    <div key={seconds}>
      <h1 style={{ color: seconds % 2 ? 'red' : 'blue'}}>안녕하세요</h1>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  )
}