function MyComponent() {
  const [value, setValue] = useState(0);

  // if문에서 사용하면 안됨.
  // 조건에 따라 어떨 땐 한 번 사용하고, 어떨 땐 두 번 사용해서
  if (value === 0) {
    const [v1, setV1] = useState(0);
  } else {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
  }

  // value에 따라서 useState를 사용하는 횟수가 달라짐
  for (let i = 0; i < value; i++) {
    const [num, setNum] = useState(0);
  }

  // 함수가 항상 호출된다는 보장이 없으니
  function func1() {
    const [num, setNum] = useState(0);
  }
  // ...
}
