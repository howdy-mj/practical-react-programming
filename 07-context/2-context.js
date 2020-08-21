import React, { createContext } from 'react';

// 초기 값을 넣어서 호출하면 객체가 반환
const UserContext = createContext('unknown');
// 안에 Provider, Consumer 컴포넌트가 존재

export default function App() {
  return (
    <div>
      <UserContext.Provider value="mike">
        {/* Provider에서 value로 값을 넘겨주면, */}
        <div>상단 메뉴</div>
        <Profile usename="mike" />
        <div>하단 메뉴</div>
      </UserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
}

function Greeting({ username }) {
  return (
    <UserContext.Consumer>
      {/* Consumer에서 value 값을 받아 처리할 수 있음 */}
      {(username) => <p>{`${username}님 안녕하세요`}</p>}
      {/* render props라는 패턴으로 작성한 코드 */}
    </UserContext.Consumer>
  );
}
