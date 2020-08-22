import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

// useEffect는 렌더링 결과가 돔에 반영된 후에 비동기로 호출
// useLayoutEffect는 부수효과 함수를 동기로 호출, 렌더링 결과가 돔에 반영된 직후에 바로 호출
// 따라서, useLayoutEffect 훅에서 연산을 많이 하면 브라우저가 먹통이 될 수 있음
// 특별한 이유가 없다면 useEffect 훅을 사용하는 것이 성능상 이점이 있음

// useLayoutEffect는 렌더링 직후에 돔 요소의 값을 읽어들일 경우,
// 또는 조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은 경우

export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef(); // useLayoutEffect 렌더를 확인하기 위해 추가

  // 깜빡이는 이유는, 500보다 클때 다시 500으로 만들어주기 위해 렌더링이 되면서 깜빡이는 것
  // useEffect(() => {
  //   if (width > 500) {
  //     setWidth(500);
  //   }
  // }, [width]);

  // 깜빡임 없이 바로 500으로 실행
  // 가상돔에 입력 되고, 브라우저가 화면을 바꾸기 전에 실행 됨
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    // 500이 넘는 숫자가 찍히고 500으로 변경이 됨
    if (width > 500) {
      setWidth(500);
    }
    // 연산량이 많은 코드를 넣으면 버벅이는 것이 화면에 보임
  }, [width]);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width, height: 100, backgroundColor: 'green' }}
      >
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}
