import React, { useState } from 'react';
import { getNextFriend } from '../data';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';

export default function FriendPage() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLengthLimit, setNameLengthLimit] = useState(MAX_NAME_LENGTH_LIMIT);

  const friendWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  const friendNameLengthLimit = friends.filter(
    (item) => item.name.length <= nameLengthLimit
  );
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label="세 이하만 보기"
        onChange={setAgeLimit}
      />
      <FriendList friends={friendWithAgeLimit} />
      <NumberSelect
        value={nameLengthLimit}
        options={NAME_LENGTH_LIMIT_OPTIONS}
        label="자 이하 이름만 보기"
        onChange={setNameLengthLimit}
      />
      <FriendList friends={friendNameLengthLimit} />
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

const MAX_NAME_LENGTH_LIMIT = 100;
const NAME_LENGTH_LIMIT_OPTIONS = [3, MAX_NAME_LENGTH_LIMIT];
