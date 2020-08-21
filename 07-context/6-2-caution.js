import React, { useContext, createContext } from 'react';

const UserContext = createContext('unknown');

export default function App() {
  return (
    <div>
      <UserContext.Provider value="mj">{/*...*/}</UserContext.Provider>
      <Profile />
    </div>
  );
}

// Profile 컴포넌트 안에 Greeting 컴포넌트가 있는데,
// Greeting은 루트 컴포넌트까지 갈때까지 UserContext를 만나지 못함
// 따라서 초기값인 'unkwoun'이 적용이 될텐데
// Consumer를 사용하는 쪽에서 항상 Provider 컴포넌트 안에 렌더링이 되도록 작성해야 함

// 대부분 Context Provider 부분을 루트에서 jsx부분 전체를 감싸는 방식으로 많이 작성
// 이럴 때 Consumer가 Provider를 못찾을 일은 거의 없음
// 루트 쪽이 아니라, 중간 중간 Provider 컴포넌트를 렌더링 할 때는 위치를 주의해야 함
