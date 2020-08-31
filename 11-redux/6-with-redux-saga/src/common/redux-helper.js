import produce from 'immer';

export function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

// action을 key, value로 가져오게 하기 위한 코드
// setValueAction
export function createSetValueAction(type) {
  return (key, value) => ({
    type,
    key,
    value,
  });
}
// reducer 코드
export function setValueReducer(state, action) {
  state[action.key] = action.value;
}
