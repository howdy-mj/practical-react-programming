function reducer(state = INITIAL_STATE, action) {
  return producer(state, (draft) => {
    switch (action.type) {
      case SAY_HELLO:
        const random = Math.floor(Math.random() * 10 + 1);
        // random은 입력이 같아도 출력이 달라질 수 있음
        draft.msg = `안녕하세요, ${action.name}님의 행운의 숫자는 ${random}입니다.`;
        break;

      case INCREMENT:
        // 부수효과를 일으킬 수 있는 api 호출
        callApi({ url: '/sendActionLog', data: action });
        draft.value += 1;
        break;
      // ...
    }
  });
}
