import produce from 'immer';

const person = { name: 'mike', age: 22 };
const newPerson = produce(person, (draft) => {
  draft.age = 32;
});

// 첫 번째 매개변수는 변경할 상태값을 적고
// 두 번째 매개변수에서 상태값을 변경하는 로직 작성

// App.js

import React from 'react';
import produce from 'immer';

const prevState = {
  user: {
    name: 'mike',
    friends: [
      {
        name: 'jane',
        age: 23,
      },
      {
        name: 'jake',
        age: 24,
      },
    ],
  },
  products: [],
};

const nextState = produce(prevState, (draft) => {
  draft.user.friends[0].age = 32;
});

console.log('prevState === nextState', prevState === nextState);
console.log(
  'prevState.user.friends[0] === nextState.user.friends[0]',
  prevState.user.friends[0] === nextState.user.friends[0]
);
console.log(
  'prevState.user.friends[0] === nextState.user.friends[0]',
  prevState.user.friends[1] === nextState.user.friends[1]
);

console.log(
  'prevState.products === nextState.products',
  prevState.products === nextState.products
);

export default function App() {
  return <div className="App">ㅇㅇ</div>;
}
