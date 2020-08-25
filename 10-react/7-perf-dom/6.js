import React, { useEffect, useState } from 'react';

export default function App({ user }) {
  // ...
  return (
    <div>
      <p>사용자 상세 정보</p>
      <UserDetail key={user.id} user={user} />
    </div>
  );
}

function UserDetail({ user }) {
  // ...
}

// 유저 데이터를 아예 변경하고 싶을 때 key={use.id}를 주면
// 유저가 변경됐을 때 상태값이 아예 초기화 될 것임
