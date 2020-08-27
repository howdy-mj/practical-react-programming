import React from 'react';
import { getNextFriend } from '../../common/mockData';
import { addFriend, setAgeLimit, setShowLimit } from '../state';
import FriendList from '../component/FriendList';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
} from '../state/selector';

export default function FriendMain() {
  // useSelector 훅은 이전 값을 기억했다가, 해당 값이 변경되었을 때 해당 컴포넌트를 다시 렌더링해 줌
  // const friends = useSelector((state) => state.friend.friends);
  // 여러개 할때 common/shallowEqual.js 참고
  // const [friends, friends2] = useSelector(state => [state.friend.friends, state.friend.friends], shallowEqual)
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit,
  ] = useSelector(
    (state) => [
      getAgeLimit(state),
      getShowLimit(state),
      getFriendsWithAgeLimit(state),
      getFriendsWithAgeShowLimit(state),
    ],
    shallowEqual
  );

  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend(); // 데이터를 가져와서 추가
    dispatch(addFriend(friend));
  }
  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      {/* <FriendList friends={friends} /> */}
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
