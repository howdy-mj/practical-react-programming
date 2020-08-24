// 컴포넌트 내부에서 연관된 코드는 한 곳으로 모아 관리하는 것이 좋음

function Profile({ userId }) {
  // 유저 관련 state, hook
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((date) => setUser(data));
  }, [userId]);
  // => 이것을
  // const user = useUser(userId); 이렇게

  // width 관련 state, hook
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  // => 이것을
  // const width = useWindowWidth(); 이렇게

  // ...
}

// 따로 있으면 나중에 커스텀 훅으로 분리하기도 편함
// 재사용을 못한다하더라도, 컴포넌트 코드가 너무 복잡해진다 싶으면 커스텀 훅으로 분리하는 것이 좋음
