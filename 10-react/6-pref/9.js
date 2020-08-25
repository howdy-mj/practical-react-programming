function SelectFruit({ selectedFruit, onChange }) {
  const [maxPrice, setMaxPrice] = useState(1000);
  // ...
  const fruits = useMemo(
    () => FRUITS.filter((item) => item.price <= maxPrice),
    [maxPrice]
  );
  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
    </div>
  );
}

const FRUITS = [
  { name: 'apple', price: 500 },
  { name: 'banana', price: 1000 },
  { name: 'orange', price: 1500 },
];

// useMemo를 이용하면 필요할 때만 fruits 값이 변경되도록 할 수 있음
// 결과적으로 options도 필요할 때만 변경이 되는 셈
// 이때 useMemo 함수 안에서 사용되는 상태값을 의존성 배열에 넣으면 됨
