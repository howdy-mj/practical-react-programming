import React, { useReducer } from 'react';

// 여러 개의 상태값을 관리할 때는 useReducer 훅을 사용
// Context api랑 같이 사용하면, 상위 컴포넌트에서 트리 깊은 곳으로 이벤트 처리 함수를 쉽게 전달할 수 있음

export default function App() {
  // dispathc: useState처럼 상태값을 변경할 수 있는 함수
  // 매개 변수로 reducer와 초기값 입력
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'setName', name: e.currentTarget.value })
        }
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: 'setAge', age: e.currentTarget.value })
        }
      />
    </div>
  );
}

const INITIAL_STATE = { name: 'empty', age: 0 };
const MAX_AGE = 50;
// useReducer의 첫 번째 매개변수
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      if (action.age > MAX_AGE) {
        return { ...state, age: MAX_AGE };
      } else {
        return { ...state, age: action.age };
      }
    default:
      return state;
  }
}
