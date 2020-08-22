import React, { useContext, createContext, useState, useRef } from 'react';

export default function App() {
  //  useRef를 사용하려면 BOX의 개수에 맞게 나열해야 하는데, 박스가 많을때는 적합하지 않음
  // 훅은 사용한 순서나 개수가 항같 같아야하는 규칙이 있음

  // 여태까지 ref 객체에 실제 돔의 요소나 컴포넌트 인스턴스를 참조하는 용도로 사용했는데, ref는 어떤 값이든 저장할 수 있음
  // 저장하는 것을 ref로
  const boxListRef = useRef({});

  function onClick() {
    let maxRight = 0; // 가장 끝값 저장 용도
    let maxId = '';
    for (const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (maxRight < rect.right) {
          maxRight = rect.right;
          maxId = box.id;
        }
      }
    }
    alert(`오른쪽 끝 요소는 ${maxId}`);
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100%',
        }}
      >
        {BOX_LIST.map((item) => (
          <div
            key={item.id}
            ref={(ref) => (boxListRef.current[item.id] = ref)} // box id값에 ref저장
            style={{
              flex: '0 0 auto',
              width: item.width,
              hegiht: 100,
              backgroundColor: 'yellow',
              border: 'solid 1px red',
            }}
          >{`box_${item.id}`}</div>
        ))}
      </div>
      {/* 박스를 눌렀을 때 가장 오른쪽 끝의 요소 값을 알고 싶은 것*/}
      <button onClick={onClick}>오른쪽 끝 요소는?</button>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 100 },
  { id: 3, width: 80 },
  { id: 4, width: 100 },
  { id: 5, width: 90 },
  { id: 6, width: 60 },
  { id: 7, width: 120 },
];
