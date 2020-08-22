export default function App() {
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <input type="text" ref={inputRef} />}
      <button onClick={() => setShowText(!showText)}>
        텍스트 보이기/가리기
      </button>
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
}

// ref 객체에 current가 없을 수도 있음
// 특히 조건부 렌더링 이후에 ref를 사용하면 주의해야 함
// input 요소가 존재하지 않을때 아래의 버튼을 클릭하면 문제가 발생할 수 있음

// 텍스트를 가리고 텍스트로 이동 클릭을 하면 에러가 뜸
// 따라서 current 값이 존재하는지 검사해야 함
