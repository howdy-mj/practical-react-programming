function Parent() {
  const [selectedFruit, setSelectedFruit] = useState('apple');
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit
        selected={selectedFruit}
        onChange={(fruit) => setSelectedFruit(fruit)}
      />
    </div>
  );
}

// 상태값 변경에 의해서 랜더링을 할 때 자식 컴포넌트(SeletFruit)도 렌더링을 할 텐데,
// 자식 컴포넌트를 React.memo로 감싸면 안의 속성값이 변경되지 않으면 렌더링이 되지 않을거라 생각하기 쉬움
// 하지만 지금 컴포넌트처럼 안에 함수값이 있으면, 렌더링이 될 때마다 매번 새로운 값이 입력되기 때문에
// react.memo를 사용했다 하더라도 자식 컴포넌트는 렌더링이 됨

// 이를 해결하려면 4.js
