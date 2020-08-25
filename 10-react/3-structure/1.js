function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((iterm) => iterm.done));
  function onChangeName(key, name) {
    // todo의 name을 수정하는 코드
    setDoneList(
      doneList.map((item) => (item.key === key ? { ...item, name } : item))
      // 특정 데이터의 이름을 바꾸는 순간, 부모가 가진 데이터와 정합이 안 맞음
      // 자식 컴포넌트에서 부모의 데이터를 별도의 상태값으로 관리하는 것은 좋지 않음
    );
  }
  // ...
}

// done 상태인 todo만 모아서 TodoList 상태값을 만들어서 이 안에서 관리하는 코드
