import React, { useState, useEffect } from 'react';

export default function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);

  // 부수효과 함수에서 새로운 함수(return)를 반환하고 있는데,
  // 이런 함수는 다음 부수효과 함수가 호출되기 직전에 호출됨
  // 또는 컴포넌트가 사라지기 직전, unmount 되기 직전에 마지막으로 호출
  // 의존성 배열을 빈 배열로 두면, 컴포넌트가 생성될 때만 부수 효과 함수가 호출되고 컴포넌트가 사라질 때만 반환한 함수가 호출
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div>{`width is ${width}`}</div>;
}

// 언제 발동되는지 확인하려면
useEffect(() => {
  const onResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', onResize);
  console.log('useEffect1'); // 처음 렌더 될 때

  // 의존성 배열이 없기 때문에 콘솔이 찍히지 않음
  return () => {
    window.removeEventListener('resize', onResize);
    console.log('useEffect2');
  };
}, []);

// 늘 렌더되기 하려면,
// 너비를 움직일 때마다 1, 2, 1, ...가 찍히고 버튼을 누를때 2번이 출력
useEffect(() => {
  const onResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', onResize);
  console.log('useEffect1'); // 처음 렌더 될 때

  // 의존성 배열이 없기 때문에 콘솔이 찍히지 않음
  return () => {
    window.removeEventListener('resize', onResize);
    console.log('useEffect2');
  };
});
