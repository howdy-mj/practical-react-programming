function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(['apple', 'banana', 'oragne']);
  const [newFruit, setNewFruit] = useState('');
  function addNewFruit() {
    // fruits.push(newFruit); // 리액트 입장에서 이건 변경되지 않은 것, 레퍼런스가 같음
    // 따라서 밑에처럼 해야 함
    setFruits([...fruits, newFruit]);
    setNewFruit(''); // 이 코드로 렌더링 됨
  }
  // ...
  return (
    <div>
      {/* 만약 memo로 이를 감쌌다면, options는 예전 컴포넌트를 참조하고 있기 때문에, 변화가 없음*/}
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
      {/* ... */}
    </div>
  );
}
