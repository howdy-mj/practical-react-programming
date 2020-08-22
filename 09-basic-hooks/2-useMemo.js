import React, { useMemo, useState } from 'react';

// useMemo 훅은 계산량이 많은 함수의 반환값을 재활용 하는 용도로 사용

export default function App() {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);

  // 첫번째 매개변수로 함수, 그럼 해당 함수가 실행된 결과값을 리액트가 기억
  // 두 번째 매개변수가 변경될 때마다 실행
  // 만약 두 번째 매개변수가 바뀌지 않았다면, 이전에 싫행해 저장한 값을 재활용
  const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);

  return (
    <>
      <p>{`value is ${value}`}</p>
      <button
        onClick={() => {
          setV1(Math.random());
          setV2(Math.random());
        }}
      >
        v1/v2 수정
      </button>
      <p>{`v3 is ${v3}`}</p>
      <button onClick={() => setV3(Math.random())}>v3 수정</button>
    </>
  );
}

// 아래 함수가 계산량이 많다고 가정
function runExpensiveJob(v1, v2) {
  console.log('runExpensiveJob is called');
  // run something too expensive
  return v1 + v2;
}
