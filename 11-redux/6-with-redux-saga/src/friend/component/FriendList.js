import React from 'react';

export default function FriendlineList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          {friend.name}({friend.age})
        </li>
      ))}
    </ul>
  );
}
