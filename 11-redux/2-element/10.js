const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  // 위의 코드는 action.meta && action.meta.delay와 같음
  // ?는 옵셔널 체인징, 이 값이 undefined면 에러가 발생하는데 ?를 넣으면 발생안함
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  };
};

// App.js

import React from 'react';
import { createStore, applyMiddleware } from 'redux';

const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  };
};

const myReducer = (state = { name: 'mike' }, action) => {
  console.log('myReducer');
  if (action.type === 'someAction') {
    return { name: 'mike2' };
  }
  return state;
};

const store = createStore(myReducer, applyMiddleware(delayAction));
store.dispatch({ type: 'someAction', meta: { delay: 3000 } });

// const cancel = store.dispatch({ type: 'someAction', meta: { delay: 3000 } });
// cancel();
// 이를 실행하면 리듀서가 실행되지 않음
// 바깥에서 안의 함수를 멈출 수 있게 하는 것이 특이함

export default function App() {
  return <div className="App">ㅇㅇ</div>;
}
