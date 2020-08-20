function Profile() {
  const [name, setName] = useState('mike');
  const [country, setCountry] = useState('korea');
  // ...

  // 만약
  // if (!value) {
  //   const [name, setName] = useState('mike');
  // }
  // const [country, setCountry] = useState('korea');
  // 이렇게 되어 있으면, name은 어떨 때 있고 없으니 리액트 입장에서는 useState가 어떤 것을 가르키는 지 모름
}

// useState, useEffect에게는 별다른 정보를 제공하지 않음
// 따라서 리액트는 이런 훅들을 구분해야 하는데, 순서 정보 밖에 없음
