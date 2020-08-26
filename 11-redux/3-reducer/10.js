import produce from 'immer';

function createReducer(initialState, handlerMap) {
  // reducer 함수
  return function (state = initialState, action) {
    // produce로 감싼 reducer 함수
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
