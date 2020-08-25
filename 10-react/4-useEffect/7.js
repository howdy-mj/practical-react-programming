function Profile({ userId }) {
  const [user, setUser] = useState();
  // useEffect(() => {
  //   async function fetchAndSetUser(needDetail) {
  //     const data = await fetchUser(userId, needDetail);
  //     setUser(data);
  //   }
  //   fetchAndSetUser(false);
  // }, [userId]);

  // 이렇게 밖으로 뺄 경우, 바깥에서 함수를 사용할 수 있지만,
  // 해당 컴포넌트가 렌더링 될 때마다 이 함수도 같이 렌더링 되기 때문에
  // 매우 비효율 적임. 따라서 이럴 때는 useCallback 훅 사용
  // async function fetchAndSetUser(needDetail) {
  //   const data = await fetchUser(userId, needDetail);
  //   setUser(data);
  // }
  // useEffect(() => {
  //   fetchAndSetUser(false);
  // }, [userId]);

  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

  if (!user) {
    return <h1>로딩...</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`캐시: ${user.cash}`}</p>
      <p>{`계정 생성일: ${user.createdAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}
