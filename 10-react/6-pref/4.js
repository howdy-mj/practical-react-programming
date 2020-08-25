function Parent() {
  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit selected={selectedFruit} onChange={setSelectedFruit} />
    </div>
  );
}

// 3의 문제를 해결하려면
// 그냥 setSelectedFruit라는 것을 onChange에 걸어두면 간단하게 해결될 수 있음
// 상태값 변경함수는 한 번 생성되고 그 다음에 변경되지 않기 때문

// 만약 단순히 이벤트 핸들러로 처리하는 것이 아니라,
// 다른 함수도 같이 있다면 해당 방법으로 처리하기는 힘듦
// 그럴 때는 5.js
