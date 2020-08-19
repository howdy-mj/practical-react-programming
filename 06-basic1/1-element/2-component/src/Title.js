import React from 'react';


function Title({title}) {
  console.log('Title Render')
  return <p>{title}</p>
}

// 속성 값이 변경될 때만 렌더링하기 위해서는 React.memo를 사용
export default React.memo(Title);