function Parent({ user }) {
  return (
    <div>
      <p>Parent</p>
      {user && <Child user={user} />}
      {/* 
        부모에서 조건을 걸어줄때, user에 따라 Child 컴포넌트가 언마운트/마운트를 반복할 수 있음
        자칫하면 Child 컴포넌트의 v 상태값을 초기화해서 문제가 될 수 있음
      */}
    </div>
  );
}

// Child가 조건부에 따라 아무것도 렌더링 하지 않을 때에는 부모컴포넌트에서 먼저 조건을 걸어줄 수 있음
function Child({ user }) {
  const [v, setV] = useState(0);
  // if (user) {
  //   return null;
  // }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  );
}
