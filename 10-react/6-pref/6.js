function SelectFruit({ selectedFruit, onChange }) {
  // ...
  return (
    <div>
      <Select
        options={[
          { name: 'apple', price: 500 },
          { name: 'banana', price: 1000 },
          { name: 'orange', price: 1500 },
        ]}
        selected={selectedFruit}
        onChange={onChange}
      />
    </div>
  );
}

// 객체가 렌더링 되면서 참조값이 달라지기 때문에
// 실제 객체 값이 변하지 않아도, 리액트는 달라졌다고 인식하기 때문에 렌더링이 됨
// 객체 안의 값이 변하지 않는다면, 7처럼 밖으로 빼야 함
