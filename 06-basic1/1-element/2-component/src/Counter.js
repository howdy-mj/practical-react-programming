import React, { useState } from 'react';
import Title from './Title';

// Title이 state가 바뀌었을 때만 렌더하고 싶다면 React.memo를 사용하면 됨 (./Title.js)
// export default function Counter() {
//   const [count, setCount] = useState(0);
  
//   function onClick() {
//     setCount(count + 1);
//   }
//   function onClick2() {}

//   return (
//     <div>
//       <Title title={`현재 카운트: ${count}`} />
//       <button onClick={onClick}>증가</button>
//       <button onClick={onClick2}>증가</button>
//     </div>
//   )
// }



// 객체로 관리할 경우, 리액트가 렌더하지 않음
// export default function Counter() {
//   const [count, setCount] = useState({value: 0});
  
//   function onClick() {
//     count.value += 1;
//     setCount(count)
//   }
//   // 객체의 참조값은 바뀌지 않았기에, 리액트는 이 값이 변경되었다고 생각을 안해서 렌더 되지 않음
//   // 객체를 불변변수로 관리하는 것은 전개연산자로 관리하는 것

//   return (
//     <div>
//       <Title title={`현재 카운트: ${count.value}`} />
//       <button onClick={onClick}>증가</button>
//     </div>
//   )
// }


// 객체도 불변 변수(전개연산자)로 관리
export default function Counter() {
  const [count, setCount] = useState({value: 0, value2: 0, value3: 0});
  
  function onClick() {
    setCount({...count, value: count.value + 1});
  }

  return (
    <div>
      {count.value > 0 && <Title title={`현재 카운트: ${count.value}`} />}
      <button onClick={onClick}>증가</button>
    </div>
  )
}