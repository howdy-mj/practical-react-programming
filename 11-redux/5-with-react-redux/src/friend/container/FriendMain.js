import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

export default function FriendMain() {
  // useSelector 훅은 이전 값을 기억했다가, 해당 값이 변경되었을 때 해당 컴포넌트를 다시 렌더링해 줌
  const friends = useSelector((state) => state.friend.friends);
  // 여러개 할때
  // shallowEqaul로 배열이 바뀌지 않았으면 참조값으로 얕은 비교, 값이 변경 되었을 때만 컴포넌트가 렌더링
  // const [friends, friends2] = useSelector(state => [state.friend.friends, state.friend.friends], shallowEqual)
  // common/shallowEqual.js 참고

  const dispatch = useDispatch();

  function onAdd() {
    const friend = getNextFriend(); // 데이터를 가져와서 추가
    dispatch(addFriend(friend));
  }
  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
