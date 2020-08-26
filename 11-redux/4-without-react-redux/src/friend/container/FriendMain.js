import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

export default function FriendMain() {
  // 상태값이 변경될 때마다 렌더링 하기 위해 만듦
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends; // 이전 friends 데이터
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends; // 현재 friends 데이터
      if (prevFriends !== friends) {
        // friends 데이터가 달라졌을 때만 렌더링
        forceUpdate();
      }
      prevFriends = friends;
    });
    return () => unsubscribe();
  }, []);

  function onAdd() {
    const friend = getNextFriend(); // 데이터를 가져와서 추가
    store.dispatch(addFriend(friend));
  }
  console.log('FriendMain render');
  const friends = store.getState().friend.friends; // 리덕스에서 타임라인 데이터를 가져와 렌더링
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
