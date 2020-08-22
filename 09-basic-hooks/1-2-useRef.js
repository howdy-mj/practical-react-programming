import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);

  // 렌더링 된 후에 호출
  useEffect(() => {
    prevAgeRef.current = age;
  }, [age]);

  // 처음 렌더링 때는 이전 값을 갖고 있음
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이 변경
      </button>
    </div>
  );
}
