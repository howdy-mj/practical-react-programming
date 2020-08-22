// 자식컴포넌트
import React, { forwardRef, useState, useImperativeHandle } from 'react';

// 클래스형 컴포넌트에서 ref를 통해 자식 컴포넌트의 메서드를 호출할 수 있음
// 이는 자식컴포넌트에 의존성이 생겨 지양하는 것이 맞지만, 종종 필요한 경우가 있음
// 이때 useImperativeHandle 훅을 이용하면 마치 함수형 컴포넌트에도 멤버 변수나 멤버 함수가 있는 것처럼 만들 수 있음

function Profile(_, ref) {
  const [name, setName] = useState('mj');
  const [age, setAge] = useState(0);

  // 부모 컴포넌트에서 profile.current 값이 이걸 참조
  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  );
}

export default forwardRef(Profile);
