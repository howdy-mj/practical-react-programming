import React, { useState, useRef, useEffect } from 'react';

// 타이머에 관한 것인데, 만약 useState를 쓰면 타이머가 지나갈때마다 렌더가 되기 때문에 적합하지 않음
// 하지만 UI 데이터가 아니기 때문에 렌더링 데이터는 똑같음
// 그래서 불필요하게 렌더링만 발생
// 따라서 ref 객체가 더 적합

export default function App() {
  const timeIdRef = useRef(-1);

  useEffect(() => {
    timerIdRef.current = setTimeout(() => {}, 1000);
  });
  // ...
  useEffect(() => {
    if (timerIdRef.current >= 0) {
      clearTimeout(timerIdRef.current);
    }
  });
  // ...
}
