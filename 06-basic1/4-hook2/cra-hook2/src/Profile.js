import React from 'react';
import useUser from './useUser';

export default function Profile({ userId }) {
  // userId만 입력하면 user가 바로 나오니까 굉장히 직관적이고 사용하기 편함
  const user = useUser(userId);

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
