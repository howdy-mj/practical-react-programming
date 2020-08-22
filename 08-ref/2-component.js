import React, { useRef, useEffect } from 'react';

{
  /*
return (
  <div>
    별 다른 처리를 하지 않닸다면, 함수형 컴포넌트에 바로 ref 속성 값을 입력할 수 없음
    <InputAndSave type="text" ref={inputRef} />
    <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
  </div>
);
*/
}

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* 따라서, inputRef라는 속성 이름으로 받아서 내부에 있는 자식에게 입력하는 것 */}
      <InputAndSave inputRef={inputRef} />
      {/* 그냥 ref로 정의하면, 리액트가 내부에서 처리하기 때문에 이럴 때는 forwardRef 함수 사용*/}
      <Button ref={buttonRef} />
    </div>
  );
};

export default App;

// InputAndSave에는 다양한 요소들이 있기 때문에, 만약 두번째 매개변수를 ref로 받으면 리액트에서 어떤 것이 ref인지 헷갈릴 수 있음
// 따라서 그냥 inputRef라는 이름이 더 적합
function InputAndSave({ inputRef, buttonRef }) {
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button buttonRef={buttonRef}>저장</button>
    </div>
  );
}

// 두번째 매개변수로 ref를 받을 수 있음
const Button = React.forwardRef(function ({ onClick }, ref) {
  return (
    <button onClick={onClick} ref={ref}>
      저장
    </button>
  );
});
