import React from 'react';
import {
  addTimeline,
  removeTimeline,
  editTimeline,
  increaseNextPage,
} from './timeline/state';
import { addFriend, removeFriend, editFriend } from './friend/state';
import store from './common/store';

store.dispatch(addTimeline({ id: 1, desc: '코딩은 즐거워' }));
store.dispatch(addTimeline({ id: 2, desc: 'redux 좋아' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({ id: 2, desc: '리덕스 좋아 즐거워' }));
store.dispatch(removeTimeline({ id: 1, desc: '코딩은 즐거워' }));

store.dispatch(addFriend({ id: 1, desc: '아이유' }));
store.dispatch(addFriend({ id: 2, desc: '재재' }));
store.dispatch(removeFriend({ id: 2, desc: '수지' }));
store.dispatch(editFriend({ id: 1, desc: '아이유' }));

export default function App() {
  return <div>react-redux 없이 만들어보기</div>;
}
