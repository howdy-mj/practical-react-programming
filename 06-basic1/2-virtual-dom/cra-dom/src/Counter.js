import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  // 컴포넌트의 key값이 변경되면 초기화 됨
  // 삭제(unmount)되었다가 다시 추가(mount)됨
  // 현재 state값도 같이 초기화

  return (
    <div>
      <p>{`현재 카운트: ${count}`}</p>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
