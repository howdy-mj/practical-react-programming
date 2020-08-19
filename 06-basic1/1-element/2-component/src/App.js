import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'

export default function App() {
  const [color, setColor] = useState('red');
  function onClick() {
    setColor('blue')
  }
  return (
    // <div>
    //   <h2>컴포넌트의 속성값과 상태값</h2>
    //   <div>
    //     <Counter />
    //     <button style={{ backgroundColor: color }} onClick={onClick}>
    //       좋아요
    //     </button>
    //   </div>
    // </div>

    // Fragment에서는 요소의 순서가 key역할을 대신하기 때문에 key를 따로 넣어주지 않아도 됨
    // 실제 돔에는 반영되지 않은 Fragment
    // 축약형으로 <></> 사용 가능
    // <React.Fragment>
    //   <p>안녕</p>
    //   <p>하세요</p>
    //   {null}
    //   {false}
    //   {true}
    //   <Counter />
    // </React.Fragment>
    // => null, boolean은 무시가 됨

    <>
    <Counter />
    <br />
    {ReactDOM.createPortal(
      <div>
        React Portal, 모달을 위해서 많이 사용되기도 함
      </div>,
      document.getElementById('something'),
    )}
    </>
  )
}