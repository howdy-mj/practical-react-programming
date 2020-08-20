import React, { useState } from 'react';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function onClick() {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }

  const result = count1 >= count2;
  // ...
}

// 리액트는 순서대로 호출
// 배치로 작업하는 거면 사실 순서는 딱히 상관없이 바뀐 것만 호출
