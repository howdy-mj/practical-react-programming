function SelectFruit({ selectedFruit, onChange }) {
  const [maxPrice, setMaxPrice] = useState(1000);
  // ...
  return (
    <div>
      <Select
        options={FRUITS.filter((item) => item.price <= maxPrice)}
        selected={selectedFruit}
        onChange={onChange}
      />
    </div>
  );
}

const FRUITS = [
  { name: 'apple', price: 500 },
  { name: 'banana', price: 1000 },
  { name: 'orange', price: 1500 },
];

// 하지만 filter를 쓰게 되면 또 다시 새로운 배열이 만들어지기 때문에
// 렌더링 할 때마다 매번 새로운 값이 되어 버림
// 이럴 때는 9
