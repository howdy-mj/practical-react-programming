import React, { useState, useEffect } from 'react';

export default function Profile({ userId }) {
  const [user, setUser] = useState(null);
  // 두번째 매개변수는 '의존성 배열'이라 부르는데,
  // 배열 값이 변경될 때만 부수효과 함수가 실행 됨

  const value = userId + 10;

  useEffect(() => {
    console.log(value);
    // 이렇게 지역변수를 단순히 콘솔로 찍을 때도, 의존성 배열에 입력해야 함
    // 아니면 lint 에러 발생

    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);
  // 배열안에는 내부에 있는 상태값, 지역변수를 잘 봐야 함
  // 상태값 변경 함수는 변하지 않는 것이기 때문에 예외적으로 의존성 배열에 입력하지 않아도 괜찮음
  // 외부 함수는 의존성 배열에 입력하지 않아도 되지만,
  // 지역 함수가 useEffect안에 있다면 이 역시 의존성 배열에 입력해야 함
  // 만약 지역 함수가 렌더 될때마다 다시 생성이 된다면, useCallback으로 메모이제이션 기능을 이용하는 방법도 있음
  // 의존성 배열은 꼭 필요할 때만 입력하는 것이 좋음

  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: 'jake', age: 23 };
const USER2 = { name: 'jane', age: 31 };
function getUserApi(userId) {
  return new Promise((res) => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}
