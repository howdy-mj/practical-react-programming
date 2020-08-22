import React, { useRef, useEffect } from 'react';

const App = () => {
  const inputRef = useRef();

  // 렌더링이 다 된 후에, 돔에 접근할 수 있음
  useEffect(() => {
    // 새로고침하면 자동으로 input에 focus
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
      {/* Box가 클래스형 컴포넌트라면, 해당 클래스의 메서드를 호출 할 수 있음*/}
      <Box ref={inputRef} />
    </div>
  );
};

export default App;

// 함수형 컴포넌트는 인스턴스로 만들어지지 않지만,
// useImperativeHandle 이라는 훅을 사용하면 함수형 컴포넌트에서도
// 마치 클래스형 컴포넌트의 멤버 변수가 메서드를 접근하는것 처럼
// 함수형 컴포넌트 내부의 변수와 함수를 외부로 노출시킬 수 있음
