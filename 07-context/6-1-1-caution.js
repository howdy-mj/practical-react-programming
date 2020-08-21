import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  return (
    <div>
      {/* 객체 형식으로 넣으면, 렌더링 될때마다 매번 새로운 객체가 만들어짐 */}
      {/* 내부 값이 변경되지 않아도, Consumer는 매번 불필요한 렌더링 */}
      <UserContext.Provider value={{ username, age }}>
        <Profile />
      </UserContext.Provider>
    </div>
  );
}
