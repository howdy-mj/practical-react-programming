function reducer(state = INITIAL_STATE, action) {
  return producer(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_PEOPLE:
        draft.selectedPeople = draft.peopleList.find(
          (item) => item.id === action.id
        );
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name;
        // 여기서 이름이 바뀌어도, 레퍼런스가 바뀌는 것이 아니기 때문에
        // SET_SELECTED_PEOPLE에서는 여전히 예전 이름 혹은 없는 이름이라 뜰 수 있음
        // 따라서 id 값으로 할당해주는 것이 좋음
        break;
      // ...
    }
  });
}

// 수정 후,

function reducer(state = INITIAL_STATE, action) {
  return producer(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_PEOPLE:
        draft.selectedPeople = action.id;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name;
        break;
      // ...
    }
  });
}
