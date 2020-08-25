useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [useId]);

// 부수 효과 함수의 반환값은 항상 함수 타입이어야 함
// async await 함수는 Promise 객체를 반환하기 때문에 부수효과 함수가 될 수 없음

// 올바른 방법
useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);
