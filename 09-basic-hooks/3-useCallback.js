import React, { useState } from 'react';

// useMemo와 비슷하게 메모이제이션 기능을 이용,
// 함수 메모이제이션에 특화된 훅이라 생각하면 됨

// 현재 새로운 함수가 생성되어 입력이 되기 때문에,
// onSave의 속성값이 매번 바뀌면서 자식 컴포넌트가 매번 렌더링 됨

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [v1, setV1] = useState(0);

  // name, age가 변경될 때만 실행되도록 useCallback 생성
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit onSave={onSave} setName={setName} setAge={setAge} />
      <p>{`v1: ${v1}`}</p>
      <button onClick={() => setV1(Math.random())}>v1 수정</button>
    </div>
  );
}

const UserEdit = React.memo(function ({ onSave, setName, setAge }) {
  console.log('UserEdit render');
  return null;
});

function saveToServer(name, age) {}
