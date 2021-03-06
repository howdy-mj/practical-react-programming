import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from '../../common/redux-helper';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

// 다른 쪽 액션과 충돌되지 않도록 앞에 friend 작성
// type
const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';
// const SET_AGE_LIMIT = 'friend/SET_AGE_LIMIT';
// const SET_SHOW_LIMIT = 'friend/SET_SHOW_LIMIT';
const SET_VALUE = 'friend/SET_VALUE';

// action creator
export const addFriend = (friend) => ({ type: ADD, friend });
export const removeFriend = (friend) => ({ type: REMOVE, friend });
export const editFriend = (friend) => ({ type: EDIT, friend });
// export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
// export const setShowLimit = (showLimit) => ({
//   type: SET_SHOW_LIMIT,
//   showLimit,
// });
export const setValue = createSetValueAction(SET_VALUE);

// 초기값
const INITIAL_STATE = {
  friends: [],
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT,
  name: 'mike',
};

// reducer
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
  // [SET_AGE_LIMIT]: (state, action) => (state.ageLimit = action.ageLimit),
  // [SET_SHOW_LIMIT]: (state, action) => (state.showLimit = action.showLimit),
  [SET_VALUE]: setValueReducer,
});

export default reducer;
