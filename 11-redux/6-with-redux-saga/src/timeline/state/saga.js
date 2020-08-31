import { all, call, put, takeLeading } from 'redux-saga/effects';
// put, call, all은 saga에서 부수효과라 부름
import { actions, types } from './index';
import { callApiLike } from '../../common/api';

// *와 yield는 자바스크립트 제너레이터와 관련
export function* fetchData(action) {
  // put은 리덕스 액션을 발동시키는 것
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
  // takeLeading은 처음에 들어온 요청에 우선순위를 높게 줘서, 다 처리가 된 후에 다음껄 수행
  // takeLatest가 뒤에 들어온 것의 우선순위를 높여 처리
}

/*
  const a = take(types.REQUEST_LIKE);
  const b = put(actions.setLoading(false))
  const c = call(callApiLike);
  console.log({a, b, c})

  // effect가 반환하는 값은 객체
  const logResult = {
    a: {
      TAKE: {
        pattern: 'timeline/REQUEST_LIKE',
      },
    },
    b: {
      PUT: {
        // actions을 발동시키는 역할을 해서 안에 action이 들어있음
        channel: null,
        action: {
          type: 'timeline/SET_LOADING',
          isLoading: false,
        },
      },
    },
    c: {
      CALL: {
        context: null,
        fn: callApiLike,
        args: [],
      },
    },
  }

  // 이런 객체는 호출되었을 때, saga 미들웨어에게 전달이 됨
  // 값을 미들웨어에게 전달 한 후, 그 결과를 다시 제너레이터 쪽으로 넘겨줌
  
 */
