import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
    setCount(count + 1);
  }
  console.log('render called');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

// 객체로 바꾸어도 같음
const [count, setCount] = useState({ value: 0 });
function onClick() {
  setCount((v) => v + 1);
  setCount((v) => v + 1);
}

// 리액트 내부에서 배치로 처리되지 않기 때문에 콘솔이 두번 찍힘
useEffect(() => {
  window.addEventListener('click', onClick);
  return () => window.removeEventListener('click', onClick);
});

// 해결 방법
function onClick() {
  ReactDOM.unstable_batchedUpdates(() => {
    setCount((v) => v + 1);
    setCount((v) => v + 1);
  });
}
