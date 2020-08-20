import React, { useState } from 'react';

export default function App() {
  // 여러 개의 상태값을 하나의 useState로 관리 가능
  const [state, setState] = useState({ name: '', age: 0 });
  // 사실 여러 개의 상태값을 관리할 때는, useReducer가 더 적합

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        // 상태값 변경 시, 전체 객체를 새로 입력해야 함
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <input
        type="text"
        value={state.age}
        onChange={(e) => setState({ ...state, age: e.target.value })}
      />
    </div>
  );
}
