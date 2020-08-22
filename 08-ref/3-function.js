import React, { useState, useCallback } from 'react';

export default function App() {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);

  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  return (
    <div>
      {showText && (
        <input
          type="text"
          ref={setInitialText}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  );
}

const INITIAL_TEXT = '안녕하세요';

// input에 값을 변경하려해도 바뀌지 않음.
// 이는 컴포넌트가 렌더링 될 때마다, 새로운 ref함수를 입력하고 있기 때문임
// 리액트는 ref 속성값으로 새로운 함수가 들어오면 이전 함수에 null 인수를 넣어서 호출
// 새로운 함수에는 요소의 참조값을 넣어서 다시 호출
// 여기서는 새로운 문자를 입력할 때, ref가 자꾸 렌더링되면서 문자가 입력되지 않는 것
// 이럴때 함수를 고정하기 위해 useCallback 함수 사용

// useCallback 훅의 메모이제이션 기능 덕분에, 한번 생성된 이 함수를 계속해서 재사용 가능
