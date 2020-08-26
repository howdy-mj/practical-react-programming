export const ADD = 'todo/Add';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

function addTodo({ title, priority }) {
  return { type: ADD, title, priority };
}

function removeTodo({ id }) {
  return { type: REMOVE, id };
}

function removeAllTodo() {
  return { type: REMOVE_ALL };
}

store.dispatch(addTodo({ title: '영화 보기', priority: 'high' }));
store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeAllTodo());
