import createReducer from '../common/createReducer';

// 다른 쪽 액션과 충돌되지 않도록 앞에 friend 작성
const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

export const addFriend = (friend) => ({ type: ADD, friend });
export const removeFriend = (friend) => ({ type: REMOVE, friend });
export const editFriend = (friend) => ({ type: EDIT, friend });

const INITIAL_STATE = { friends: [] };

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
      (friend) => friend.id !== action.friend.id
    )),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(
      (friend) => friend.id === action.friend.id
    );
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  },
});

export default reducer;
