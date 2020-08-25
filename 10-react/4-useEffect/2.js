function Profile({ userId }) {
  const [user, setUser] = useState();

  // 아무것도 쓰지 않았을 때는
  // 렌더링 될 때마다 호출되기 때문에, 서버의 api를 호출하는 코드가 항상 실행

  useEffect(() => {
    fecthUser(userId).then((data) => setUser(data));
  }, [userId]);
  // 빈 배열 안에, userId가 변경될 때마다 호출
  // ...
}
