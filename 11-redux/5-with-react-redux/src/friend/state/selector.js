import { createSelector } from 'reselect';

// 선택자 함수
// 메모이제이션 기능이 동작함

const getFriends = (state) => state.friend.friends;
export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimit = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => {
    console.log('getFriendsWithAgeLimit called');
    return friends.filter((item) => item.age <= ageLimit);
  }
  // 매개변수로 넘어오는 값이 변경되었을 때만 실행
  // 변경되지 않았다면, 그 전에 받아온 값을 그대로 사용, 따라서 filter 연산이 적용되지 않는 것
);

export const getFriendsWithAgeShowLimit = createSelector(
  // console.log('b')
  [getFriendsWithAgeShowLimit, getShowLimit],
  (freindsWithAgeLimit, showLimit) => {
    console.log('getFriendsWithAgeShowLimit called');
    return freindsWithAgeLimit.filter(freindsWithAgeLimit.slice(0, showLimit));
  }
);
