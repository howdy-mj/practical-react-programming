import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 });

export default function App() {
  // const [username, setUsername] = useState('엠제이');
  // const [age, setAge] = useState(0);
  const [user, setUser] = useState({ username: 'mj', age: 20 });

  const [count, setCount] = useState(0);

  console.log('app render');

  return (
    <div>
      {/*<UserContext.Provider value={{ username, age }}>*/}
      <UserContext.Provider value={user}>
        <Profile />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          증가
        </button>
      </UserContext.Provider>
    </div>
  );
}

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
  console.log('greeting 렌더');
  // count가 바뀌면 greeting도 불필요한 렌더링이 됨
  // 따라서 매번 새로운 객체가 만들어지지 않게 해야 함
  const { username } = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}
