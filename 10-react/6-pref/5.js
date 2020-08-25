function Parent() {
  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [count, setCount] = useState(0);

  // useCallback으로 작성하면 해당 함수는 필요할 때만 변경이 됨
  const onChangeFruit = useCallback((fruit) => {
    setSelectedFruit(fruit);
    sendLog({ type: 'fruit change', value: fruit });
    // 현재는 안에 사용되는 상태값이 없기 때문에 의존성 배열이 빈 배열
  }, []);
  // 따라서 해당 함수는 한 번 생성 된 값으로 고정이 됨

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit selected={selectedFruit} onChange={onChangeFruit} />
    </div>
  );
}
