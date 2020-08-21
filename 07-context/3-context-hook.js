import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext('unknown');

export default function App() {
  const [name, setName] = useState('mike');

  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile usename="mike" />
        <div>하단 메뉴</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </UserContext.Provider>
    </div>
  );
}

// Proile이 렌더 되지 않아도 잘 바뀌는지 확인하기 위해 React.memo
// 속성 값이 없으므로, 초기에 렌더링되고 다시 마운트 될 일이 없음
const Profile = React.memo(function () {
  console.log('렌더링 안되는지 확인');
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
});

function Greeting() {
  // 원래 여기서 context로 가져온 값을 쓰지 못했는데,
  // useContext 훅이 나오면서 간편해짐
  const username = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}
